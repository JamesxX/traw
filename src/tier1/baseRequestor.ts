import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import URLSearchParams from '../tier0/utils/URLSearchParams'
import FormData from '../tier0/utils/FormData'
import isBrowser from '../tier0/utils/isBrowser'



export interface Common {
    redirect_uri?: string
    user_agent?: /*userAgent |*/ string // not needed for browser
    device_id?: string  // default: 'DO_NOT_TRACK_THIS_DEVICE'
    grant_type?: string // default: 'https://oauth.reddit.com/grants/installed_client'
    debug?: boolean
}

export interface AppAuth extends Common {
    client_id: string
    client_secret?: string // default: ''
    refresh_token?: string
    access_token?: string
}

export interface ScriptAuth extends Common {
    client_id: string
    client_secret: string
    username: string
    password: string
    two_factor_code?: number | string
    access_token?: string
}

export interface CodeAuth extends Common {
    client_id: string
    client_secret?: string
    code: string
    redirect_uri: string
}

export interface All extends Common {
    client_id?: string
    client_secret?: string
    refresh_token?: string
    access_token?: string
    username?: string
    password?: string
    two_factor_code?: number | string
    code?: string
    redirect_uri?: string
}

export interface BaseRequestor extends All {}

export class BaseRequestor implements AppAuth , ScriptAuth , CodeAuth{

    private state: State = {
        ratelimitRemaining: Infinity,
        ratelimitExpiration: Infinity,
        tokenExpiration: Infinity
    }
    scope?: string[]

    constructor(options?: AppAuth)
    constructor(options?: ScriptAuth)
    constructor(options?: CodeAuth)
    constructor(options?: Common)
    constructor(options: All = {}) {
        this.setOptions(options)
    }

    setOptions(options: All) {
        this.client_id = options.client_id
        this.client_secret = options.client_secret || ''
        this.refresh_token = options.refresh_token
        this.access_token = options.access_token
        this.username = options.username
        this.password = options.password
        this.two_factor_code = options.two_factor_code
        this.code = options.code
        this.redirect_uri = options.redirect_uri
        this.user_agent = isBrowser ? window.navigator.userAgent : options.user_agent
        this.device_id = options.device_id || 'DO_NOT_TRACK_THIS_DEVICE'
        this.grant_type = options.grant_type || grantTypes.INSTALLED_CLIENT
        this.debug = options.debug || false
        this.state = {
            ratelimitRemaining: Infinity,
            ratelimitExpiration: Infinity,
            tokenExpiration: Infinity
        }
        this.scope = undefined
    }

    async authenticatedRequest(config: AxiosRequestConfig) {
        const token = await this.updateAccessToken()
        const res = await this.axiosCreate({
            baseURL: 'https://oauth.reddit.com',
            headers: {
                authorization: `Bearer ${token}`,
                'user-agent': this.user_agent!
            },
            params: {
                raw_json: 1
            }
        }).request(config)
        if (res.headers['x-ratelimit-remaining']) {
            this.state.ratelimitRemaining = Number(res.headers['x-ratelimit-remaining'])
            this.state.ratelimitExpiration = Date.now() + (Number(res.headers['x-ratelimit-reset']) * 1000)
        }
        return res
    }

    request = this.authenticatedRequest

    async updateAccessToken() {
        if (!this.access_token || Date.now() > this.state.tokenExpiration) {

            let form: AxiosRequestConfig['form'] = {}

            if (this.refresh_token) {
                form = {
                    grant_type: grantTypes.REFRESH_TOKEN,
                    refresh_token: this.refresh_token
                }
            } else if (this.username && this.password) {
                const password = this.two_factor_code ? `${this.password}:${this.two_factor_code}` : this.password
                form = {
                    grant_type: grantTypes.PASSWORD,
                    username: this.username,
                    password
                }
            } else if (this.code && this.redirect_uri) {
                form = {
                    grant_type: grantTypes.AUTHORIZATION_CODE,
                    code: this.code,
                    redirect_uri: this.redirect_uri
                }
            } else if (this.grant_type && this.device_id) { // fallback
                form = {
                    grant_type: this.grant_type,
                    device_id: this.device_id
                }
            }

            if (!this.state.initialGrantType) this.state.initialGrantType = form.grant_type

            const res = await this.credentialedRequest({
                method: 'post',
                url: 'api/v1/access_token',
                form
            })

            const {
                access_token,
                refresh_token,
                expires_in,
                scope,
                error,
                error_description
            }: credentialsResponse = res.data

            if (error) throw new Error(error_description ? `${error} - ${error_description}` : error)

            this.access_token = access_token
            this.refresh_token = refresh_token
            this.state.tokenExpiration = Date.now() + (expires_in * 1000)
            this.scope = scope.split(' ')

            return this.access_token
        }
        return this.access_token
    }

    async credentialedRequest(config: AxiosRequestConfig) {
        const res = await this.axiosCreate({
            baseURL: 'https://www.reddit.com',
            headers: {
                'user-agent': this.user_agent!
            },
            auth: {
                username: this.client_id!,
                password: this.client_secret!
            }
        }).request(config)
        return res
    }

    /*constructor(auth: bearer_authentication, userAgent: userAgent, bDebug : boolean = false) {
        this.auth = auth;
        this.userAgent = userAgent;
        this.bDebug = bDebug;
        this.xRateLimit = {
            remaining: Infinity,
            used: 0,
            reset: 0
        }
    }*/

    /*private auth: bearer_authentication;
    private userAgent: userAgent;
    private bDebug: boolean;
    private xRateLimit: xRateLimit;

    public async new<Type>(config: AxiosRequestConfig) : Promise<AxiosResponse<Type>> {

        // Await rate limit reset if 0;
        if (this.xRateLimit.remaining < 1) {
            await new Promise( r => setTimeout(r, this.xRateLimit.reset * 1000 ))
        }

        // Setup default values
        config.baseURL = config.baseURL ?? 'https://oauth.reddit.com/';
        config.headers = {
            'User-Agent': this.userAgent.toString(),
            'Authorization': this.auth.toString()
        }


        const result = await axios( config )

        // Maybe add some checking to see if this request didn't exceed limit?

        // Keep xRateLimit up to date
        this.xRateLimit = {
            remaining: Number((result.headers["x-ratelimit-remaining"])),
            used: Number((result.headers["x-ratelimit-used"])),
            reset: Number((result.headers["x-ratelimit-reset"]))
        }

        return result
    }*/

}

export default BaseRequestor

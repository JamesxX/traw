import authenticated_requestor from "../../../authenticated_requestor";

export interface prefs_response{
    beta: boolean,
    default_theme_sr: null,
    threaded_messages: boolean,
    email_comment_reply: boolean,
    private_feeds: boolean,
    activity_relevant_ads: boolean,
    email_messages: boolean,
    profile_opt_out: boolean,
    video_autoplay: boolean,
    email_private_message: boolean,
    geopopular: string,
    show_link_flair: boolean,
    show_trending: boolean,
    send_welcome_messages: boolean,
    country_code: "WF" | "JP" | "JM" | "JO" | "WS" | "JE" | "GW" | "GU" | "GT" | "GS" | "GR" | "GQ" | "GP" | "GY" | "GG" | "GF" | "GE" | "GD" | "GB" | "GA" | "GN" | "GM" | "GL" | "GI" | "GH" | "PR" | "PS" | "PW" | "PT" | "PY" | "PA" | "PF" | "PG" | "PE" | "PK" | "PH" | "PN" | "PL" | "PM" | "ZM" | "ZA" | "ZZ" | "ZW" | "ME" | "MD" | "MG" | "MF" | "MA" | "MC" | "MM" | "ML" | "MO" | "MN" | "MH" | "MK" | "MU" | "MT" | "MW" | "MV" | "MQ" | "MP" | "MS" | "MR" | "MY" | "MX" | "MZ" | "FR" | "FI" | "FJ" | "FK" | "FM" | "FO" | "CK" | "CI" | "CH" | "CO" | "CN" | "CM" | "CL" | "CC" | "CA" | "CG" | "CF" | "CD" | "CZ" | "CY" | "CX" | "CR" | "CW" | "CV" | "CU" | "SZ" | "SY" | "SX" | "SS" | "SR" | "SV" | "ST" | "SK" | "SJ" | "SI" | "SH" | "SO" | "SN" | "SM" | "SL" | "SC" | "SB" | "SA" | "SG" | "SE" | "SD" | "YE" | "YT" | "LB" | "LC" | "LA" | "LK" | "LI" | "LV" | "LT" | "LU" | "LR" | "LS" | "LY" | "VA" | "VC" | "VE" | "VG" | "IQ" | "VI" | "IS" | "IR" | "IT" | "VN" | "IM" | "IL" | "IO" | "IN" | "IE" | "ID" | "BD" | "BE" | "BF" | "BG" | "BA" | "BB" | "BL" | "BM" | "BN" | "BO" | "BH" | "BI" | "BJ" | "BT" | "BV" | "BW" | "BQ" | "BR" | "BS" | "BY" | "BZ" | "RU" | "RW" | "RS" | "RE" | "RO" | "OM" | "HR" | "HT" | "HU" | "HK" | "HN" | "HM" | "EH" | "EE" | "EG" | "EC" | "ET" | "ES" | "ER" | "UY" | "UZ" | "US" | "UM" | "UG" | "UA" | "VU" | "NI" | "NL" | "NO" | "NA" | "NC" | "NE" | "NF" | "NG" | "NZ" | "NP" | "NR" | "NU" | "XK" | "XZ" | "XX" | "KG" | "KE" | "KI" | "KH" | "KN" | "KM" | "KR" | "KP" | "KW" | "KZ" | "KY" | "DO" | "DM" | "DJ" | "DK" | "DE" | "DZ" | "TZ" | "TV" | "TW" | "TT" | "TR" | "TN" | "TO" | "TL" | "TM" | "TJ" | "TK" | "TH" | "TF" | "TG" | "TD" | "TC" | "AE" | "AD" | "AG" | "AF" | "AI" | "AM" | "AL" | "AO" | "AN" | "AQ" | "AS" | "AR" | "AU" | "AT" | "AW" | "AX" | "AZ" | "QA",
    design_beta: boolean,
    monitor_mentions: boolean,
    hide_downs: boolean,
    clickgadget: boolean,
    lang: string,
    ignore_suggested_sort: boolean,
    show_presence: boolean,
    email_upvote_comment: boolean,
    email_digests: boolean,
    layout: string,
    num_comments: number,
    feed_recommendations_enabled: boolean,
    label_nsfw: boolean,
    research: boolean,
    use_global_defaults: boolean,
    show_snoovatar: boolean,
    over_18: boolean,
    legacy_search: boolean,
    live_orangereds: boolean,
    highlight_controversial: boolean,
    no_profanity: boolean,
    domain_details: boolean,
    collapse_left_bar: boolean,
    email_community_discovery: boolean,
    bad_comment_autocollapse: 'off' | 'low' | 'medium' | 'high',
    hide_ups: boolean,
    third_party_data_personalized_ads: boolean,
    email_chat_request: boolean,
    allow_clicktracking: boolean,
    hide_from_robots: boolean,
    show_twitter: boolean,
    compress: boolean,
    accept_pms: 'everyone' | 'whitelisted',
    store_visits: boolean,
    threaded_modmail: boolean,
    email_upvote_post: boolean,
    min_link_score: number,
    media_preview: "on" | "off" | "subreddit",
    email_user_new_follower: boolean,
    nightmode: boolean,
    enable_default_themes: boolean,
    third_party_site_data_personalized_content: boolean,
    third_party_site_data_personalized_ads: boolean,
    survey_last_seen_time: number,
    show_stylesheets: boolean,
    enable_followers: boolean,
    email_new_user_welcome: boolean,
    public_votes: boolean,
    email_post_reply: boolean,
    collapse_read_messages: boolean,
    show_flair: boolean,
    mark_messages_read: boolean,
    search_include_over_18: boolean,
    hide_ads: boolean,
    third_party_personalized_ads: boolean,
    email_username_mention: boolean,
    top_karma_subreddits: boolean,
    newwindow: boolean,
    numsites: number,
    min_comment_score: number,
    send_crosspost_messages: boolean,
    media: "on" | "off" | "subreddit",
    public_server_seconds: boolean,
    show_gold_expiration: boolean,
    highlight_new_comments: boolean,
    email_unsubscribe_all: boolean,
    default_comment_sort: "confidence" | "top" | "new" | "controversial" | "old" | "random" | "qa" | "live",
    show_location_based_recommendations: boolean
}

export async function prefs( requestor: authenticated_requestor ) : Promise<prefs_response>{
    const result = await requestor.get({url: '/api/v1/me/prefs'})
    return <prefs_response>result.data
}

export async function prefs_patch( requestor: authenticated_requestor, prefs: prefs_response) : Promise<void>{
    await requestor.patch({url: '/api/v1/me/prefs', data: prefs})
    return void 0
}
import RedditUser from ".";

export default interface RedditOwnUser extends RedditUser{
    coins: number;
    features: Features;
    force_password_reset: boolean;
    gold_creddits: number;
    gold_expiration: number | null;
    has_android_subscription: boolean;
    has_external_account: boolean;
    has_ios_subscription: boolean;
    has_mail: boolean;
    has_paypal_subscription: boolean;
    has_stripe_subscription: boolean;
    has_subscribed_to_premium: boolean;
    has_visited_new_profile: boolean;
    in_beta: boolean;
    in_chat: boolean;
    in_redesign_beta: boolean;
    inbox_count: number;
    is_sponsor: boolean;
    is_suspended: boolean;
    new_modmail_exists: boolean | null;
    num_friends: number;
    oauth_client_id: string;
    over_18: boolean;
    pref_autoplay: boolean;
    pref_clickgadget: number;
    pref_geopopular: string;
    pref_nightmode: boolean;
    pref_no_profanity: boolean;
    pref_show_trending: boolean;
    pref_show_twitter: boolean;
    pref_top_karma_subreddits: boolean;
    pref_video_autoplay: boolean;
    seen_layout_switch: boolean;
    seen_premium_adblock_modal: boolean;
    seen_redesign_modal: boolean;
    seen_subreddit_chat_ftux: boolean;
    suspension_expiration_utc: number | null;
}

export default class RedditOwnUser extends RedditUser{
    
}

interface Features {
    [key: string]: ExperimentFeature | boolean;
    chat: boolean;
    chat_group_rollout: boolean;
    chat_rollout: boolean;
    chat_subreddit: boolean;
    do_not_track: boolean;
    email_verification: ExperimentFeature;
    mweb_sharing_clipboard: ExperimentFeature;
    mweb_xpromo_revamp_v2: ExperimentFeature;
    show_amp_link: boolean;
    show_nps_survey: boolean;
    spez_modal: boolean;
    top_content_email_digest_v2: ExperimentFeature;
    live_happening_now: boolean;
    adserver_reporting: boolean;
    geopopular: boolean;
    legacy_search_pref: boolean;
    listing_service_rampup: boolean;
    mobile_web_targeting: boolean;
    default_srs_holdout: ExperimentFeature;
    geopopular_ie: ExperimentFeature;
    users_listing: boolean;
    show_user_sr_name: boolean;
    whitelisted_pms: boolean;
    sticky_comments: boolean;
    upgrade_cookies: boolean;
    ads_prefs: boolean;
    new_report_flow: boolean;
    block_user_by_report: boolean;
    ads_auto_refund: boolean;
    orangereds_as_emails: boolean;
    mweb_xpromo_modal_listing_click_daily_dismissible_ios: boolean;
    adzerk_do_not_track: boolean;
    expando_events: boolean;
    eu_cookie_policy: boolean;
    utm_comment_links: boolean;
    force_https: boolean;
    activity_service_write: boolean;
    pokemongo_content: ExperimentFeature;
    post_to_profile_beta: boolean;
    reddituploads_redirect: boolean;
    outbound_clicktracking: boolean;
    new_loggedin_cache_policy: boolean;
    inbox_push: boolean;
    https_redirect: boolean;
    search_dark_traffic: boolean;
    mweb_xpromo_interstitial_comments_ios: boolean;
    live_orangereds: boolean;
    programmatic_ads: boolean;
    give_hsts_grants: boolean;
    pause_ads: boolean;
    show_recommended_link: boolean;
    mweb_xpromo_interstitial_comments_android: boolean;
    ads_auction: boolean;
    screenview_events: boolean;
    new_report_dialog: boolean;
    moat_tracking: boolean;
    subreddit_rules: boolean;
    mobile_settings: boolean;
    adzerk_reporting_2: boolean;
    mobile_native_banner: boolean;
    ads_auto_extend: boolean;
    interest_targeting: boolean;
    post_embed: boolean;
    seo_comments_page_holdout: ExperimentFeature;
    scroll_events: boolean;
    mweb_xpromo_modal_listing_click_daily_dismissible_android: boolean;
    '302_to_canonicals': boolean;
    activity_service_read: boolean;
    adblock_test: boolean;
    geopopular_in: ExperimentFeature;
}
  
interface ExperimentFeature {
    owner: string;
    variant: string;
    experiment_id: number;
}
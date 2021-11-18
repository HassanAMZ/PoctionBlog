---
title: Facebook dynamic URL UTM parameters for iOS14 updates
date: '2021-11-17'
blogID: '00004'
tags: ['facebook CAPI', 'utm parameters', 'user acquisition']
draft: false
summary: To track the traffic acquisition on facebook ads on google analytics for iOS14+ users. This will help the advertisers see the performance of their ads in UA or GA4.
coverImage: '/static/blog/facebook/facebook-dynamic-url-utm-parameters-for-ios14-updates.png'
embedId: 'null'
---

![Facebook dynamic URL UTM parameters for iOS14 updates](/static/blog/facebook/facebook-dynamic-url-utm-parameters-for-ios14-updates.png)

## Table Of Content:

0. [Origin of the issue](#origin-of-the-issue)
1. [Solution to the ATT](#solution-to-the-att)
   - [Custom Reports](#custom-reports)
2. [UTM Code](#utm-code)

### Origin of the issue

Apple now requires apps in the App Store that engage in what Apple defines as "tracking" to obtain permission to "track" users across apps and websites owned by third parties for advertising and measurement purposes through its AppTrackingTransparency (ATT) framework.

As a result of these changes, advertisers running campaigns to people using iOS 14.5 or later devices will be affected by limitations on data sharing. The user can opt-out of the tracking.

Therefore, when the app user clicks on one of the facebook ads the fbclid is not passed with the landing page URL. Before these updates, an fbclid parameter was passed with the URL, which is a random string of aphla-numaric characters, containing all the information about facebook ads, campaign, ad group etc.

### Solution to the ATT

There is no solution to fix the facebook ads reporting / conversion tracking on facebook ads manager. However we can add UTM paramters in the URL and view the report in UA or GA4. we can build custom reports in UA and GA4 to visualize which facebook ads are performing well.

#### Custom Reports

[how to build custom report for UA](/blog/google-analytics/custom-report-for-facebook-ads-in-ua)

[how to build custom report for GA4](/blog/google-analytics/custom-report-for-facebook-ads-in-ga4)

### UTM Code

```
utm_source=FacebookAds&utm_medium={{placement}}&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}

```

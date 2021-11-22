---
title: Facebook dynamic URL UTM parameters for iOS14 updates
date: '2021-11-17'
blogID: '00004'
tags: ['facebook CAPI', 'utm parameters', 'user acquisition']
draft: false
summary: To track the traffic acquisition on facebook ads on google analytics for iOS14+ users. To track the performance of the facebook ads in UA or GA4 using custom reports and secondary dimensions.
coverImage: '/static/blog/00004.png'
embedId: 'null'
---

![Facebook dynamic URL UTM parameters for iOS14 updates](/static/blog/00004.png)

## Table Of Content:

1. [Origin of the issue](#origin-of-the-issue)
2. [Solution to the ATT](#solution-to-the-att)
3. [Custom Reports](#custom-reports)
4. [UTM Code](#utm-code)
5. [Notes](#notes)

### Origin of the issue

Apple now requires apps in the App Store that engage in what Apple defines as "tracking" to obtain permission to "track" users across apps and websites owned by third parties for advertising and measurement purposes through its AppTrackingTransparency (ATT) framework.

As a result of these changes, advertisers running campaigns to people using iOS 14.5 or later devices will be affected by limitations on data sharing. The user can opt-out of the tracking.

Therefore, when the app user clicks on one of the facebook ads the fbclid is not passed with the landing page URL. Before these updates, an fbclid parameter was passed with the URL, which is a random string of aphla-numaric characters, containing all the information about facebook ads, campaign, ad group etc.

### Solution to the ATT

There is no solution to fix the facebook ads reporting / conversion tracking on facebook ads manager. We can add UTM paramters in the URL and view the report in UA or GA4. we can build custom reports in UA and GA4 to visualize which facebook ads are performing well. However, the inital step is to add the UTM paramters in each facebook ad at ad set level.

### Custom Reports

1. [how to build custom report for UA](/blog/google-analytics/custom-report-for-facebook-ads-in-ua)
2. [how to build custom report for GA4](/blog/google-analytics/custom-report-for-facebook-ads-in-ga4)

### UTM Code

We need to update the URL code for all the facebook ads we are on facebook ads manager. Copy the code below and paste it under facebook Campaign> Ad set> ad> Tracking code> URL parameters. Click on "Build a URL parameter" to make sure everything is fine.

```
utm_source=FacebookAds&utm_medium={{placement}}&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}

```

### Notes

1. Updating the UTM paramter will unpublish the ads and they will be in "Review" for upto 48 hours.
2. Do not add the UTM parameters facebook Campaign> Ad set> ad> Ads Set UP> Webiste URL

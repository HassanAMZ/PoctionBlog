---
title: Facebook dynamic URL UTM parameters for iOS14 updates
date: '2021-11-17'
blogID: '00004'
tags: ['facebook', 'utm parameters', 'server tracking']
draft: false
summary: To track the traffic acquisition for facebook ads on google analytics for iOS14+ users. To track the performance of the facebook ads in UA or GA4 using custom reports and secondary dimensions.
coverImage: '/static/blog/00004.png'
embedId: 'null'
---

To track the traffic acquisition for facebook ads on google analytics for iOS14+ users. In this article, we will walk through the steps to set up the dynamic URL parameters on the facebook ads maanger.

## Table Of Content:

1. [Origin of the issue](#origin-of-the-issue)
2. [Solution to the ATT](#solution-to-the-att)
3. [Custom Reports](#custom-reports)
4. [UTM Code](#utm-code)
5. [Notes](#notes)

### Origin of the issue

As a result of iOS14 changes, advertisers running campaigns will be affected by limitations on data sharing. The user can opt-out or opt-in of the tracking, either way the source of the traffic is lost.

Therefore, when the app user clicks on one of the facebook ads the fbclid is not passed with the landing page URL. Before these updates, an fbclid parameter was passed with the URL, which is a random string of aphla-numaric characters, containing all the information about facebook ads, campaign, ad group etc.

### Solution to the ATT

There is no solution to fix the facebook ads reporting / conversion tracking on facebook ads manager. We can add UTM paramters in the URL and view the report in UA or GA4. we can build custom reports in UA and GA4 to visualize which facebook ads are performing well. However, the inital step is to add the UTM paramters in each facebook ad at ad set level.

### Custom Reports

1. [how to build custom report for UA](/blog/google-analytics/custom-report-for-facebook-ads-in-ua)
2. [how to build custom report for GA4](/blog/google-analytics/custom-report-for-facebook-ads-in-ga4)

### UTM Code

We need to update the URL code for all the facebook ads, we are running on facebook ads manager. Copy the code below and paste it under facebook Campaign> Ad set> ad> Tracking code> URL parameters. Click on "Build a URL parameter" to make sure everything is fine.

```
utm_id={{campaign.id}}&utm_source=FacebookAds&utm_medium=cpc&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}

```

![UTM Parameter Image](/static/blog/00004_1.png)

### Notes

1. Updating the UTM paramter will unpublish the ads and they will be in "Review" for upto 48 hours.
2. Do not add the UTM parameters facebook Campaign> Ad set> ad> Ads Set UP> Webiste URL

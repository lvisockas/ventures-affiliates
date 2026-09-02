# Affiliate supply-side research

Fetched 2026-09-02. Every quote is a search-engine snippet attributed to the listed URL. Page fetches were blocked by the session proxy. Treat all citations as unverified until re-checked. Unsourced numbers are marked *[hypothesis]*.

## 1. Networks and aggregators: approval, API, cut

| Platform | Type | Approval / entry bar | Publisher API | Cut on publisher |
|---|---|---|---|---|
| Amazon Associates | Direct program | Website, app or social channel; mobile apps must be in an app store and free; 3 sales in 180 days to stay in; Creators API needs 10 sales per 30 days | Creators API (replacing PA-API 5.0) | None; 1 to 4.5% base rates [^1][^2][^3] |
| Impact.com | Network | Free; website, YouTube, social or "other"; browser extensions and custom software are a property type but "cannot be verified"; creator tier accepts 20 followers | Partner API, Chrome extension | None [^4][^5][^6] |
| CJ Affiliate | Network | "must be over the age of 18 and have a live website"; software publishers bound by CJ Software Publishers Policy | Yes (developer portal) | None [^7] |
| Awin (absorbed ShareASale, closed 6 Oct 2025) | Network | £5 / $1 refundable deposit; extensions must declare and go on "Soft Click" attribution | Yes | None [^8][^9][^10] |
| Rakuten Advertising | Network | "live website, blog, or customized social media site"; "open network and does not screen publishers when they join" | Advertiser Search, Link Locator, Product Search APIs, 100 calls/day/report | None [^11][^12] |
| PartnerStack | SaaS network | "welcomes all types of partners"; 6 to 8 profile questions; free | Partner API (Bearer key) | None; vendor pays 10% on Spark plan [^13][^14] |
| Skimlinks (Taboola) | Sub-affiliate | Manual domain approval; "only about 3% of the 1,600+ applications they get every month are accepted"; new sites rejected | Link API for "apps where they cannot run the standard Skimlinks javascript"; Merchant API managed-tier only; Reporting API | 25% [^15][^16][^17] |
| Sovrn Commerce (ex-VigLink) | Sub-affiliate | Per-location approval; "requires all campaigns to implement or install affiliate links and generate clicks before reviewing"; API is "the most advanced option for use with mobile apps, downloadable software" | Commerce API (key + secret), returns EEPC net of rev share | Reported 25%, "exact percentage is not publicly disclosed"; pays 90 days after month end [^18][^19][^20] |
| FlexOffers | Sub-affiliate | Every traffic source (incl. apps) submitted for approval; sub-affiliates need written consent; NET 60, $25 minimum | Web service API, product feeds | Undisclosed [^21] |
| Wildfire Systems | White-label / API | Enterprise, custom-priced; RevenueEngine targets AI apps; ~60,000 merchant programs | Coupons, Offers, link APIs | Custom rev share [^22][^23] |
| Strackr | Data aggregator | Subscription; 200+ networks; "API is only available in custom plan" | Yes (paid) | Subscription, no rev cut [^24] |
| Trackonomics (Impact) | Data aggregator | "custom-quoted enterprise contracts with sales qualification required" | Yes | Enterprise fee [^24] |
| Lasso | Link tool + marketplace | Free to $24/mo; "450k+ private Amazon deals that pay 2-3x more" | Embeds, WP plugin | Subscription [^25] |
| Levanta | Amazon/Shopify creator network | "completely free for creators", "takes no revenue share"; brand pays $750/mo + 3.5% | Multi-channel link gen | 0% on creator [^26] |
| Kit Creator Network | Newsletter referrals | Paid Kit plan; $1 to $4+ per subscriber | No public affiliate API | 20% service + 3.5% transaction [^27] |
| Linkvertise | Link-gate ad network | 1,000 impressions per link minimum | Yes | 50/50 default, up to 90% for trusted publishers [^28] |
| Lemon Squeezy Affiliate Hub | Store-native marketplace | Sign up at affiliates.lemonsqueezy.com; merchants opt in | Merchant API | Set by merchant [^29] |

## 2. Sub-affiliate economics and who takes tiny publishers

Mechanism: the sub-network "joins an advertiser's affiliate program as one partner, then works with its own pool of publishers ... handles onboarding and payments for its sub-publishers ... the brand pays the sub-affiliate network, and the sub-affiliate network pays the sub-affiliates" [^30]. Cost of the convenience: Skimlinks 25%, Sovrn ~25% (undisclosed), Kit 23.5%, Linkvertise 50%. Networks themselves charge the publisher nothing; the advertiser pays the network fee. Working direct "can result in higher payouts, since there is no intermediary sub-network taking a share" [^30].

Accept tiny or traffic-less publishers: PartnerStack (welcomes all), Impact (20-follower creator tier, unverifiable "other" property types), Rakuten (does not screen), Awin (deposit only), Sovrn (approval happens after clicks flow, so an app can be live first), Lemon Squeezy Hub, Levanta. Reject or gate: Skimlinks (3% acceptance, needs established traffic), CJ (live website), Amazon (3 sales in 180 days or account closed; API needs 10 sales/30 days), FlexOffers (source-by-source approval, no undisclosed sub-affiliates).

Implication: a middleman registering as one Impact/Awin/Rakuten/PartnerStack publisher and sub-distributing links is exactly the Skimlinks/Sovrn/FlexOffers model; networks tolerate it only with disclosure, and FlexOffers bans undisclosed sub-affiliates outright. *[hypothesis]* Expect networks to demand a sub-affiliate agreement and to hold the aggregator liable for each app's compliance.

## 3. Apps, extensions, AI content: explicit policy

- Amazon: apps allowed only as "Approved Mobile Applications" in Google Play, Apple or Amazon stores, free to download; "associates cannot use Special Links in client-side software applications (like browser plug-ins or extensions) on mobile devices, other than Approved Mobile Applications" [^1][^31]. Oct 2025 agreement update permits links in opted-in DMs [^32]. No Associates AI-content clause surfaced here; Influencer storefronts must disclose AI-generated people [^32].
- Impact: extensions and custom software are a listed property type that "cannot be verified" [^5].
- CJ: software must honour "installation requirements, end-user agreement requirements, afsrc=1 requirements, requirements prohibiting usurpation of a transaction" [^7].
- Awin: extension publishers "required by the Awin Code of Conduct to declare they do, and where appropriate, be placed on a Soft Click cookie status"; individual advertisers may forbid extension traffic [^9].
- Rakuten (AI clause): "Publishers must not use AI-generated images, video, audio, or written content to create false or misleading endorsements, reviews, or testimonials" and "must clearly disclose the use of AI in such content as required by applicable law or platform policy" [^33].
- Chrome Web Store (from 10 June 2025): "User action is required before any affiliate link, code, or cookie is applied"; links allowed only "when they provide a direct and transparent benefit to users, such as a discount, cashback, or donation"; disclosure required on the listing and in the UI [^34][^35].
- OpenAI GPT Store: affiliate links tolerated if disclosed; "Stuffing affiliate links without providing value will hurt your retention metrics" [^36].
- Skimlinks's JS "doesn't work with server-side AI responses", so chat-style apps need a link API, not the auto-linker [^37].

## 4. Existing products for AI apps, GPTs, extensions, micro-SaaS

Earn-side (helps a small app earn as an affiliate):
- ChatAds: TypeScript/Python SDK, REST, MCP server, n8n; "takes nothing from your affiliate commissions"; per-request pricing; "You bring your own Amazon Associates or CJ account" [^38]. Direct precedent, but BYO network account, so it does not solve approval.
- Wildfire RevenueEngine: "transforms product mentions from AI chatbots or agents into monetized links across 60,000 merchant programs"; customers Henry Labs, Octogen; enterprise pricing [^22][^23]. Solves approval but is not self-serve.
- Thrad: ads-in-LLM SSP with SDK/API, "supports layering affiliate monetization on top" [^39].
- Sovrn Commerce API, Skimlinks Link API, Strackr API: link-wrapping for apps, gated by approval or paid plans.
- Community hacks: OpenAI forum threads on APIs that "rewrite them as affiliate links" for GPTs [^36].

Program-side (helps a SaaS run its own program; possible supply, not competitors): Rewardful ($49/mo, up to 9% fees, Stripe-only), Tolt ($47/mo + 2.9%, Stripe + Paddle), FirstPromoter ($99, 0%), Refgrow ($29, 0%, Stripe/Paddle/LemonSqueezy/Polar/Dodo), Affonso (Stripe-native; powers Polar and Paddle affiliates) [^40][^41]; PartnerStack (vendor $500/mo or Spark 10%) [^14]; Lemon Squeezy Affiliate Hub [^29]. Fragmented, no unified publisher API: the gap an aggregator could fill on the SaaS vertical.

Nothing found that is self-serve, handles network approval on the app's behalf, and targets Lovable/Bolt/v0 builders specifically. Dodo Payments and ChatAds publish "monetize vibe-coded apps" guides, signalling demand [^42].

## 5. Commission and EPC benchmarks, 2025 to 2026

- Global mean commission "8.3% of attributed revenue" [^43].
- SaaS: "20–50% recurring"; PartnerStack "15–50% of subscription value"; B2B flat "$200–$500 per qualified deal" [^43][^44].
- Ecommerce: "3–10% range"; Amazon 1 to 4.5% on most physical goods, 20% Amazon Games, 10% Luxury Beauty [^43][^3].
- Finance: "flat fees of $50–$200 per lead" [^43].
- Travel: Booking.com pays "25% to 40%" of its ~15% hotel commission (roughly 4 to 6% of booking); Expedia "up to 4%", 7-day cookie [^45][^46].
- EPC: "$0.45–$1.50 across all programs — financial services leads at $2.80 EPC, SaaS ranges $1.20–$3.50, and ecommerce averages $0.65" [^47]. CVR "1%–3% across ecommerce", "4%–8%" in SaaS and finance [^47].

*[hypothesis]* At Amazon-grade EPC ($0.65) a vibecoded app needs ~1,500 outbound clicks per $1,000 gross, before a 25% aggregator cut; SaaS recurring is the only vertical where tiny-publisher economics look viable.

## Citations

[^1]: https://affiliate-program.amazon.com/help/operating/participation/ | "Mobile Applications must be available in either the Google Play, Apple, or Amazon app stores and must be free to download" | fetched: 2026-09-02 | source_type: vendor
[^2]: https://www.keywordrush.com/blog/amazon-pa-api-associatenoteligible-error-is-there-a-new-10-sales-rule/ | "you must have at least 10 qualifying sales within the past 30 days" | fetched: 2026-09-02 | source_type: independent
[^3]: https://azonpress.com/amazon-affiliate-commission-rates/ | "most physical items pay 1 to 4.5 percent" | fetched: 2026-09-02 | source_type: independent
[^4]: https://help.impact.com/en/support/solutions/articles/48001236554-sign-up-as-a-partner-on-impact-com | "Joining impact.com as a publisher is free" | fetched: 2026-09-02 | source_type: vendor
[^5]: https://help.impact.com/partner/what-would-you-like-to-learn-about/account-management/account-settings/connect-media-properties/connect-offline-and-other-media-types | "Browser extensions or other custom software built or distributed to promote to an audience are available as a property type, though these cannot be verified" | fetched: 2026-09-02 | source_type: vendor
[^6]: https://joinotto.com/en-za/influencer-programs/impact | "applicants must have a minimum following of 20 on any social platform" | fetched: 2026-09-02 | source_type: independent
[^7]: https://www.cj.com/publisher | "must be over the age of 18 and have a live website" | fetched: 2026-09-02 | source_type: vendor
[^8]: https://www.awin.com/gb/compliance-and-regulations/application-process-and-joining-fee | "requirement of a £5 deposit in order to proceed with the application" | fetched: 2026-09-02 | source_type: vendor
[^9]: https://www.awin.com/us/news-and-events/industry-news/ensuring-fair-attribution-how-awin-partners-with-browser-extensions | "required by the Awin Code of Conduct to declare they do, and where appropriate, be placed on a Soft Click cookie status" | fetched: 2026-09-02 | source_type: vendor
[^10]: https://hellopartner.com/2025/08/19/shareasale-to-sunset-in-us-as-awin-migration-wraps-up/ | "The ShareASale platform will officially close on October 6, 2025" | fetched: 2026-09-02 | source_type: independent
[^11]: https://pubhelp.rakutenadvertising.com/hc/en-us/articles/360060314292-Requirements-for-New-Publishers | "Rakuten Advertising is an open network and does not screen publishers when they join" | fetched: 2026-09-02 | source_type: vendor
[^12]: https://pubhelp.rakutenadvertising.com/hc/en-us/articles/5949801688717-Advertiser-Search-API | "Each report can be run up to 100 calls per day" | fetched: 2026-09-02 | source_type: vendor
[^13]: https://support.partnerstack.com/hc/en-us/articles/20574018677395-Joining-the-PartnerStack-Network | "PartnerStack welcomes all types of partners to their network" | fetched: 2026-09-02 | source_type: vendor
[^14]: https://efficient.app/apps/partnerstack | "$0 per month subscription fee plus 10% processing fee on commissions you pay out" | fetched: 2026-09-02 | source_type: independent
[^15]: https://support.refersion.com/en/articles/2039261-faq-about-skimlinks | "Skimlinks keeps 25% and pays the publisher 75% of earned commissions" | fetched: 2026-09-02 | source_type: vendor
[^16]: https://danielproctor.com/skimlinks-affiliate-network-review/ | "only about 3% of the 1,600+ applications they get every month are accepted" | fetched: 2026-09-02 | source_type: independent
[^17]: https://techcrunch.com/2012/03/20/skimlinks-releases-full-api-for-web-publishers/ | "on apps where they cannot run the standard Skimlinks javascript" | fetched: 2026-09-02 | source_type: independent
[^18]: https://www.sovrn.com/blog/getting-approved-for-commerce/ | "requires all campaigns to implement or install affiliate links and generate clicks before reviewing a campaign for approval" | fetched: 2026-09-02 | source_type: vendor
[^19]: https://knowledge.sovrn.com/kb/api-onboarding-guide-for-commerce | "The Commerce API is the most advanced option for use with mobile apps, downloadable software" | fetched: 2026-09-02 | source_type: vendor
[^20]: https://getlasso.co/affiliate/sovrn-commerce/ | "Sovrn Commerce keeps 25% of the commission, and 75% goes to publishers" | fetched: 2026-09-02 | source_type: independent
[^21]: https://affiliatecms.com/threads/flexoffers-com-updates-its-publisher-terms-and-conditions-what-affiliates-need-to-know-in-2026.386/ | "including sub-affiliates without prior written consent, can lead to account termination" | fetched: 2026-09-02 | source_type: forum
[^22]: https://ai.wildfire-corp.com/ | "transforms product mentions from AI chatbots or agents into monetized links across 60,000 merchant programs" | fetched: 2026-09-02 | source_type: vendor
[^23]: https://www.wildfire-corp.com/cashback-white-label-browser-extensions | "Pricing and revenue share for your white-label loyalty program will be customized to your unique requirements" | fetched: 2026-09-02 | source_type: vendor
[^24]: https://www.rewardful.com/articles/affiliate-software-with-apis | "API is only available in custom plan" | fetched: 2026-09-02 | source_type: vendor
[^25]: https://getlasso.co/pricing/ | "Lite at Free, Starter at $4/month, Growth at $16/month, and Scale at $24/month" | fetched: 2026-09-02 | source_type: vendor
[^26]: https://influencermarketinghub.com/levanta/ | "The Gold Plan costs $750/month plus a 3.5% affiliate revenue fee" | fetched: 2026-09-02 | source_type: independent
[^27]: https://help.kit.com/en/articles/7973490-how-to-enable-paid-recommendations-in-the-creator-network | "Kit takes a 20% service fee and a 3.5% transaction fee for each successful referral" | fetched: 2026-09-02 | source_type: vendor
[^28]: https://ads-landing.linkvertise.com/agb/ | "The default revenue share is 50/50 if not otherwise agreed" | fetched: 2026-09-02 | source_type: vendor
[^29]: https://docs.lemonsqueezy.com/help/affiliates/affiliate-hub | "making your program instantly visible to thousands of affiliates" | fetched: 2026-09-02 | source_type: vendor
[^30]: https://www.accelerationpartners.com/resources/sub-affiliate-networks/ | "the brand pays the sub-affiliate network, and the sub-affiliate network pays the sub-affiliates that actually drove the conversion" | fetched: 2026-09-02 | source_type: independent
[^31]: https://affiliate-program.amazon.com/help/operating/agreement | "client-side software applications (like browser plug-ins or extensions) on mobile devices, other than Approved Mobile Applications" | fetched: 2026-09-02 | source_type: vendor
[^32]: https://www.panstag.com/2026/08/amazon-influencer-program-rule-changes.html | "Operating Agreement — updated October 15, 2025 — now explicitly permits Special Links in direct messages" | fetched: 2026-09-02 | source_type: independent
[^33]: https://rakutenadvertising.com/legal-notices/affiliate-network-policies/ | "Publishers must not use AI-generated images, video, audio, or written content to create false or misleading endorsements, reviews, or testimonials" | fetched: 2026-09-02 | source_type: vendor
[^34]: https://developer.chrome.com/blog/cws-policy-update-affiliate-ads-2025 | "User action is required before any affiliate link, code, or cookie is applied" | fetched: 2026-09-02 | source_type: vendor
[^35]: https://hellopartner.com/2025/03/12/google-introduces-new-rules-for-affiliate-browser-extensions/ | "Enforcement of the new policy will begin June 10th 2025" | fetched: 2026-09-02 | source_type: independent
[^36]: https://community.openai.com/t/gpt-monetization-via-affiliate-links/929247 | "rewrite them as affiliate links, giving GPT creators an extra monetization option" | fetched: 2026-09-02 | source_type: forum
[^37]: https://www.getchatads.com/blog/best-affiliate-networks-ai-chatbots/ | "JavaScript-based auto-linking doesn't work with server-side AI responses" | fetched: 2026-09-02 | source_type: vendor
[^38]: https://www.getchatads.com/pricing/ | "takes nothing from your affiliate commissions" | fetched: 2026-09-02 | source_type: vendor
[^39]: https://www.thrad.ai/content/how-to-monetize-an-ai-chatbot-app | "supports layering affiliate monetization on top for commerce-intent prompts" | fetched: 2026-09-02 | source_type: vendor
[^40]: https://refgrow.com/compare-competitors/tolt-vs-rewardful | "Tolt starts at $47/mo with a 2.9% transaction fee, while Rewardful starts at $49/mo with up to 9% fees" | fetched: 2026-09-02 | source_type: vendor
[^41]: https://affonso.io/blog/paddle-alternatives-for-saas | "Like Paddle, Polar uses Affonso for its affiliate infrastructure" | fetched: 2026-09-02 | source_type: vendor
[^42]: https://dodopayments.com/blogs/monetize-vibe-coded-apps | "natural moments when an AI assistant recommends a hosting provider, suggests a database" | fetched: 2026-09-02 | source_type: vendor
[^43]: https://www.referralcandy.com/blog/affiliate-commission-rates/ | "global average commission rate across all affiliate programs is 8.3% of attributed revenue" | fetched: 2026-09-02 | source_type: vendor
[^44]: https://www.rewardful.com/articles/saas-affiliate-program-benchmarks | "SaaS programs often provide 20–50% recurring commissions" | fetched: 2026-09-02 | source_type: vendor
[^45]: https://reacheffect.com/blog/how-much-does-booking-com-pay-affiliates/ | "starting at 25% of Booking.com's commission for 0-50 bookings, scaling up to 40% for 501+ bookings per month" | fetched: 2026-09-02 | source_type: independent
[^46]: https://affiliatewp.com/best-travel-affiliate-programs/ | "Expedia offers a modest commission rate of only up to 4% per qualifying booking" | fetched: 2026-09-02 | source_type: vendor
[^47]: https://www.dollarpocket.com/affiliate-marketing-benchmarks-2026/ | "Average earnings per click (EPC) runs $0.45–$1.50 across all programs — financial services leads at $2.80 EPC, SaaS ranges $1.20–$3.50, and ecommerce averages $0.65" | fetched: 2026-09-02 | source_type: independent

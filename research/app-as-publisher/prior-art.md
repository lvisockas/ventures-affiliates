# Competitor, analogue and prior-art scan

Fetched 2026-09-02. Quotes are search-snippet verbatim; page fetches were proxy-blocked (only developer.apple.com resolved), so treat every citation as needing re-verification.

## 1. Direct competitors (2024 to 2026)

The exact idea already exists, at several layers.

- ChatAds (getchatads.com): an API that "reads your assistant's responses, identifies product references, and returns affiliate links from your connected accounts in under 200 milliseconds" [^1]. Explicitly targets the segment: pages titled "Vibe Coding App Monetization Tools (2026)" and "Top Affiliate Monetization Platforms for Lovable Apps" [^2]. Model is BYO-account: "Developers connect their own Amazon Associates, Commission Junction, Awin, or Impact accounts and keep 100% of every commission, while ChatAds charges a per-request API fee"; "$0.90 per 1k requests", free tier 100/month, "REST, TypeScript, Python, MCP, and n8n" integrations, "$2 million in seed funding" [^3]. Their about page says the API worked but "the publishers who needed it most did not want to wire up an API", so the front door became a one-script blog chat widget. Gap: does not aggregate network accounts; the builder still applies to each network.
- Wildfire Systems RevenueEngine: "transforms product mentions from AI chatbots or agents into monetized links across 60,000 merchant programs" [^4]; launched July 2023 [^5]; customers Henry Labs and Octogen (2026) [^6]; pricing is revenue share plus "a nominal setup fee" and "a small monthly fee", undisclosed percentage [^7]. Aggregated-account model, sold enterprise, not self-serve.
- Sovrn Commerce (ex VigLink): "can auto-convert any shoppable URL into an affiliate link on the fly using an API", 30K+ merchants, plus a "merchant explorer" API for EPC selection [^8]; July 8, 2026 launched Commerce Bid Check, "a live bid on every click before traffic is routed", and a "beta hosted Commerce MCP server" [^9]. Has a "Mobile and Software Application Onboarding Guide" [^10]. Strongest incumbent: aggregated account, API, MCP server, free to join.
- Strackr: single API over "270 affiliate networks", €10 to €50/month, for "cashback apps, promo codes, loyalty apps" [^11]. Aggregates reporting and links but not network membership.
- Rye: pivoted to "Universal Checkout API" for agents; has a post on "Affiliate Commissions in Agentic Commerce" [^12]. Firmly.ai: "connects merchants to any AI agent with zero engineering effort", partnered with CJ and powers Perplexity native checkout [^13]. Both merchant-side.
- Platform-owned lanes: OpenAI Instant Checkout (launched 29 Sep 2025, 4% merchant fee) was "discontinued in early March 2026" with "approximately 12 merchants ever going live" and Walmart citing "3x lower conversion than click-out"; OpenAI "shifted focus to affiliate links and product discovery" [^14]. Perplexity Merchant Program: "no fees, no commissions, and no listing costs" [^15]. Google UCP: released January 2026, checkout inside AI Mode and Gemini [^16]. Klarna Shopping Search app in ChatGPT, 20 May 2026 [^17]. None pay third-party app builders.
- Adjacent: Levanta API for Publishers (Amazon-seller direct affiliate links) [^18]; Koah Labs and ZeroClick (ads in LLM output, not affiliate) [^19]. Koah: $5M seed Sep 2025, $20.5M Series A Feb 2026 led by Theory Ventures, 30% take, ~$10 eCPM, 7.5% CTR, net 30 payouts, customers Liner, Viro, Sup AI; 2M MAU across the network, 35M impressions over 175M queries. Nevermined (agent payments).

## 2. Analogues from earlier platform shifts

- VigLink (2009): founded after finding "less than 50% of links to Amazon.com on the web were engaged in the affiliate program"; automated "affiliate link insertion, which traditionally required manual effort and multiple affiliate program sign-ups"; "500 million clicks monthly by 2012" via "vBulletin to access 100,000 forum sites" [^20]. Distribution came from platform integrations, not one-by-one signups.
- Skimlinks: identical playbook, 25% take.
- AdMob (2006): "apps were still new, but developers already needed a way to make money from free downloads"; "$100 million business in three years"; Google paid $750M (2009) [^21]. AdSense 68% to publishers, AdMob about 60% to developers [^22]. Unity Ads takes "20% to 30%" [^23].
- Thresholds: Ezoic dropped its 10,000-pageview minimum in 2022, which "was developed to help Ezoic scale how it screened sites for content quality" [^24], then raised it to 250,000 MAU in Feb 2026. Mediavine required 50,000 sessions, then in January 2026 moved to "$5,000 in annual ad revenue", with Journey open at "1,000 sessions per month" [^25].

Pattern: aggregator signs the network agreements once, absorbs vetting risk, exposes a zero-friction SDK, keeps 25 to 40%, and lowers the threshold only as screening automates. Distribution wins came from embedding into the tool the long tail already uses (vBulletin, WordPress, Unity). For vibecoded apps the equivalent is a Lovable/Bolt/Replit template or MCP server.

## 3. Regulatory and policy constraints

- FTC (2023 Endorsement Guides): disclosure must appear "before the link", "close to the beginning of the content", and "Simple terms like 'affiliate link' or 'commissionable link' are not adequate" [^26]. An SDK must inject disclosure, not leave it to the builder.
- Amazon Associates: "You will not use any Content or Special Link ... on or in connection with any client-side software application on any device ... other than Approved Mobile Applications"; approved apps "must be available in either the Google Play, Apple, or Amazon app stores, and must be free" [^27]. Amazon's notice said "Program Content and Special Links should not be used in connection with generative AI", with the live text focused on model training; the ambiguity is unresolved [^28]. April 14, 2026 update requires content with "commentary, analysis or transformation for additional value" [^29]. PA-API needs "10 qualifying orders within the past 30 days" as of November 2025 [^30]. Only one account per entity; sub-affiliate traffic on Amazon seller programs runs through impact.com SharedID [^31]. Net: an aggregator cannot legally pool Amazon under one tag for unapproved web/desktop apps.
- Google Play: "does not allow apps whose primary purpose is to drive affiliate traffic to a website or provide a webview" [^32]. Apple 4.2.2: "apps shouldn't primarily be marketing materials, advertisements, web clippings, content aggregators, or a collection of links" [^33] (fetched directly).
- EU DSA Art. 26(2): platforms must let users "declare whether the content ... contains a commercial communication" and label it "in real time" [^34]; affiliates must supply disclosure data "within 5 business days" on request [^35].
- Network sub-affiliate rules: Awin subnetworks "will be held responsible for their Subpublishers' activities" and must "conduct a thorough partner assessment" [^36]; advertisers can "decline sub-networks, coupon aggregators" upfront [^37]. CJ "can be permanently banned if even a single partner is caught" [^38]. Skimlinks rejects "Downloadable software applications, mobile apps without a website" [^39].

## 4. Take rates

| Comparable | Take | Source |
|---|---|---|
| Skimlinks | 25% of commission, publisher gets 75% | [^40] |
| Sovrn Commerce | ~25%, not officially disclosed; pays "90 days after the end of the earning month" | [^41] |
| Wildfire | undisclosed rev share + setup + monthly fee | [^7] |
| ChatAds | 0% rev share, $0.90/1k requests | [^3] |
| Geniuslink | $5/mo for 2,000 clicks, $2 per extra 1,000 | [^42] |
| AdSense / AdMob | 32% / ~40% | [^22] |
| Unity Ads | 20 to 30% | [^23] |
| Koah | 30% | press coverage of Series A |
| OpenAI Instant Checkout | 4% of GMV (dead) | [^14] |
| Apple/Google stores | 30% (15% small business) | common knowledge, unverified here |

*[hypothesis]* Defensible range for a long-tail aggregator is 25 to 35% of commission, anchored by Skimlinks/Sovrn at 25% and justified upward only if the aggregator carries network approval risk, disclosure compliance and payout floors. Above 40% loses to ChatAds' BYO-account model for any builder who can get approved directly.

## 5. Failure modes

- Commoditisation and roll-up: VigLink sold to Sovrn (Dec 2018) [^43]; Skimlinks to Connexity (May 2020), then Taboola ($800M, Sept 2021) [^44]; Trackonomics to Impact (March 2021) [^45]. Aggregators became features of larger ad or network stacks.
- Supplier rate cuts: Amazon, 21 April 2020: Furniture/Home "from 8% to 3%", Grocery "to just 1%", average rate fell to "roughly 3.14%" [^46]. One supplier can halve an aggregator's revenue overnight.
- Attribution decay: Safari ITP expires cookies "after just seven days" and 24 hours for JS-set click IDs; operators face "30-50% attribution accuracy loss by end of 2026"; networks are "making server-side tracking implementation mandatory" [^47]. Tiny apps cannot do server-side postbacks; the aggregator must.
- Fraud contamination: CJ and Rakuten "are implicated in cookie-stuffing orders of magnitude more" than merchant-run programs [^48]; one bad sub-publisher can get the whole aggregator terminated ([^36], [^38]).
- Platform-owned checkout: OpenAI's failed Instant Checkout shows click-out still wins, but Google UCP and Klarna show platforms will keep trying to own the transaction.
- Why networks would refuse an AI-app aggregator: no editorial site to vet [^39]; Amazon's generative-AI and client-side-software clauses [^27][^28]; hallucinated or scraped product content violating "original value" rules [^29]; unpredictable, low-volume, high-churn sub-publishers breaching subnetwork responsibility clauses [^36]; and zero-traffic builders ("99% of vibe coders will never make a dollar" [^49]) producing no EPC to justify a network's onboarding cost.

## Sources

[^1]: https://www.getchatads.com/blog/seven-tools-for-ai-agent-affiliate-monetization/ | "reads your assistant's responses, identifies product references, and returns affiliate links from your connected accounts in under 200 milliseconds" | fetched: 2026-09-02 | source_type: vendor
[^2]: https://www.getchatads.com/blog/vibe-coding-app-monetization-tools/ | "Vibe Coding App Monetization Tools (2026)" | fetched: 2026-09-02 | source_type: vendor
[^3]: https://www.getchatads.com/pricing/ | "$0.90, or $2.70 for image inputs" per 1k requests | fetched: 2026-09-02 | source_type: vendor
[^4]: https://ai.wildfire-corp.com/ | "60,000 merchant programs" | fetched: 2026-09-02 | source_type: vendor
[^5]: https://www.prnewswire.com/news-releases/wildfire-systems-launches-revenueengine-to-drive-monetization-of-generative-ai-powered-offerings-301884607.html | fetched: 2026-09-02 | source_type: vendor
[^6]: https://www.wildfire-corp.com/blog/wildfire-revenueengine-ai-commerce-customers | "Henry Labs and Octogen have deployed Wildfire's RevenueEngine" | fetched: 2026-09-02 | source_type: vendor
[^7]: https://www.wildfire-corp.com/pricing | "a nominal setup fee ... along with a small monthly fee" | fetched: 2026-09-02 | source_type: vendor
[^8]: https://www.getchatads.com/blog/best-affiliate-networks-ai-chatbots/ | "auto-convert any shoppable URL into an affiliate link on the fly using an API" | fetched: 2026-09-02 | source_type: vendor
[^9]: https://www.prnewswire.com/news-releases/sovrn-launches-commerce-bid-check-an-api-that-returns-a-real-time-bid-value-for-every-affiliate-link-302820766.html | "a live bid on every click before traffic is routed" | fetched: 2026-09-02 | source_type: vendor
[^10]: https://knowledge.sovrn.com/kb/mobile-and-software-application-onboarding-guide-f | fetched: 2026-09-02 | source_type: vendor
[^11]: https://strackr.com/affiliate-api | "over 270 affiliate networks" | fetched: 2026-09-02 | source_type: vendor
[^12]: https://rye.com/blog/agentic-commerce-affiliate-commissions | fetched: 2026-09-02 | source_type: vendor
[^13]: https://www.pymnts.com/partnerships/2025/cj-and-firmly-team-to-provide-embedded-checkout-for-publishers/ | "connects merchants to any AI agent with zero engineering effort" | fetched: 2026-09-02 | source_type: independent
[^14]: https://www.affiversemedia.com/chatgpt-kills-instant-checkout-what-it-means-for-affiliate-programs/ | "approximately 12 merchants ever going live" | fetched: 2026-09-02 | source_type: independent
[^15]: https://www.perplexity.ai/hub/legal/merchant-program-terms-of-service | "no fees, no commissions, and no listing costs" | fetched: 2026-09-02 | source_type: vendor
[^16]: https://searchengineland.com/google-expands-universal-commerce-protocol-and-launches-new-agentic-shopping-tools-478113 | fetched: 2026-09-02 | source_type: independent
[^17]: https://www.digitalcommerce360.com/2026/05/20/klarna-ai-shopping-search-app-openai-chatgpt/ | fetched: 2026-09-02 | source_type: independent
[^18]: https://levanta.io/api-announcement/ | fetched: 2026-09-02 | source_type: vendor
[^19]: https://www.getchatads.com/blog/ranking-six-solutions-for-ai-agent-monetization/ | fetched: 2026-09-02 | source_type: vendor
[^20]: https://en.wikipedia.org/wiki/VigLink | "less than 50% of links to Amazon.com on the web were engaged in the affiliate program" | fetched: 2026-09-02 | source_type: independent
[^21]: https://www.forbes.com/2009/11/09/google-admob-mobile-ads-cmo-network-admob.html | "built what is approaching a $100 million business in three years" | fetched: 2026-09-02 | source_type: independent
[^22]: https://support.google.com/adsense/answer/180195 | "68% revenue share for AdSense for content" | fetched: 2026-09-02 | source_type: vendor
[^23]: https://www.bristlemoonresearch.com/p/unity-software-u-applovin-at-home | "typically in the 20% to 30% range" | fetched: 2026-09-02 | source_type: independent
[^24]: https://www.ezoic.com/blog/no-more-pageview-limits | "developed to help Ezoic scale how it screened sites" | fetched: 2026-09-02 | source_type: vendor
[^25]: https://www.jupiter.co/blog/mediavine-requirements-2026-how-to-qualify | "$5,000 in annual ad revenue" | fetched: 2026-09-02 | source_type: independent
[^26]: https://termly.io/resources/articles/ftc-affiliate-disclosure/ | "'affiliate link' or 'commissionable link' are not adequate" | fetched: 2026-09-02 | source_type: independent
[^27]: https://affiliate-program.amazon.com/help/operating/participation/ | "other than Approved Mobile Applications" | fetched: 2026-09-02 | source_type: vendor
[^28]: https://my.wealthyaffiliate.com/nathanv1/blog/amazons-associate-program-exposing-amazons-new-ai-policy | "Program Content and Special Links should not be used in connection with generative AI" | fetched: 2026-09-02 | source_type: forum
[^29]: https://affiliyo.com/blog/amazon-associates-april-2026-policy-changes | "commentary, analysis or transformation for additional value" | fetched: 2026-09-02 | source_type: independent
[^30]: https://www.keywordrush.com/blog/amazon-pa-api-associatenoteligible-error-is-there-a-new-10-sales-rule/ | "10 qualifying orders within the past 30 days" | fetched: 2026-09-02 | source_type: independent
[^31]: https://help.impact.com/partner/what-would-you-like-to-learn-about/seller-partnerships/amazon-seller-partnerships/amazon-sub-affiliate-tracking/track-your-sub-affiliate-traffic-as-a-seller-partner | fetched: 2026-09-02 | source_type: vendor
[^32]: https://play.google/developer-content-policy/ | "primary purpose is to drive affiliate traffic to a website" | fetched: 2026-09-02 | source_type: vendor
[^33]: https://developer.apple.com/app-store/review/guidelines/ | "apps shouldn't primarily be marketing materials, advertisements, web clippings, content aggregators, or a collection of links" | fetched: 2026-09-02 | source_type: vendor
[^34]: https://www.eu-digital-services-act.com/Digital_Services_Act_Article_26.html | "clear and unambiguous manner and in real time" | fetched: 2026-09-02 | source_type: independent
[^35]: https://track360.io/blog/eu-digital-services-act-dsa-affiliate-marketing-impact-2026 | "within 5 business days" | fetched: 2026-09-02 | source_type: vendor
[^36]: https://help.awin.com/advertisers/docs/en/subnetworks | "held responsible for their Subpublishers' activities" | fetched: 2026-09-02 | source_type: vendor
[^37]: https://www.affililist.com/blog/awin-affiliate-program | "decline sub-networks, coupon aggregators" | fetched: 2026-09-02 | source_type: independent
[^38]: https://www.benedelman.org/topics/advertising-fraud/ | "permanently banned if even a single partner is caught" | fetched: 2026-09-02 | source_type: independent
[^39]: https://support.skimlinks.com/hc/en-us/articles/223835548-Why-was-my-Publisher-application-denied | "mobile apps without a website" | fetched: 2026-09-02 | source_type: vendor
[^40]: https://support.skimlinks.com/hc/en-us/articles/223835508-How-much-does-Skimlinks-charge | "keeps 25% of publisher earned commissions" | fetched: 2026-09-02 | source_type: vendor
[^41]: https://alidropship.com/is-sovrn-a-scam/ | "90 days after the end of the earning month" | fetched: 2026-09-02 | source_type: independent
[^42]: https://geniuslink.com/pricing | "$5/month ... 2,000 clicks ... $2 per 1,000" | fetched: 2026-09-02 | source_type: vendor
[^43]: https://www.businesswire.com/news/home/20181214005226/en/Sovrn-Holdings-Acquires-VigLink-Expand-Suite-Products | fetched: 2026-09-02 | source_type: vendor
[^44]: https://www.globenewswire.com/en/news-release/2021/07/23/2267938/31297/en/Taboola-Acquiring-Connexity-Bringing-Personalized-e-Commerce-Recommendations-To-The-Open-Web.html | fetched: 2026-09-02 | source_type: vendor
[^45]: https://impact.com/press-releases/impact-acquires-trackonomics-boosts-publisher-commerce-content-capabilities/ | fetched: 2026-09-02 | source_type: vendor
[^46]: https://www.cnbc.com/2020/04/14/amazon-slashes-commission-rates-for-affiliate-program.html | "from 8% to 3%" | fetched: 2026-09-02 | source_type: independent
[^47]: https://track360.io/blog/affiliate-tracking-2026-cookie-deprecation-privacy-sandbox | "30-50% attribution accuracy loss by end of 2026" | fetched: 2026-09-02 | source_type: vendor
[^48]: https://www.sysnet.ucsd.edu/~voelker/pubs/crookies-imc15.pdf | "orders of magnitude more" | fetched: 2026-09-02 | source_type: independent
[^49]: https://kinja.com/ai/can-you-really-make-money-with-vibe-coding | "99% of vibe coders will never make a dollar" | fetched: 2026-09-02 | source_type: forum

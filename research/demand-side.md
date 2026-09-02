# Vibecoder demand-side research

Fetched 2026-09-02. Every quote is a search-engine snippet, not a page read (the session proxy blocked fetches to techcrunch, lovable.dev, stripe.com, reddit, dev.to, ezoic, polar.sh and others). Re-verify before citing.

## 1. Size of the builder population

| Platform | Users | Projects | ARR | Source |
|---|---|---|---|---|
| Lovable | ~8M (late 2025); 80% non-technical | 50M+ projects, ~1M new/week | $500M run rate (Jun 2026) | "80% of builders are non-technical, and more than 50 million projects have been created on the platform, with roughly one million new projects starting each week" [^1] |
| Bolt.new | 7M+ (Dec 2025) | 1M+ deployed via Netlify by Mar 2025 | ~$40M ARR (Mar 2025) | "over 7 million users globally by December 2025" [^2]; "Over a million apps were deployed through Bolt.new's Netlify integration by March 2025" [^3] |
| Replit | 50M+ total, 150K paying | 1M+ Agent apps | $525M (Apr 2026) | "hit $525M in annualized revenue in April 2026, up from $300M at the end of 2025"; "58% of Replit's business builders are not engineers" [^4] |
| v0 (Vercel) | 6M+ (Mar 2026) | ~9.6M projects in 2025 | n/a | "As of March 2026, v0 has over 6 million developers" [^5] |
| Base44 (Wix) | 2M | 5M+ apps | $100-150M | "grown to 2 million users and a $150 million annual recurring revenue run rate" [^6] |
| Emergent | 6M+, 150K paying, 70% no coding experience | 7M+ apps | $100M (Feb 2026) | "More than six million builders across 190+ countries have created over seven million apps" [^7] |

Published vs abandoned. No platform discloses retention. Proxies:
- Flathub study (Jul 2026): "120 repositories on Flathub tagged with 'AI Slop'... 32 were still being maintained. The remaining 88 repositories (73%) were abandoned" [^8].
- Self-reported r/vibecoding figure: "63% of vibe coders quietly abandoned their projects at month three" [^9] (weak, unaudited).
- TechTimes on Lovable: "not disclosing how many remain in use after a year or two" [^10].

Monetization intent. Lovable's May 2026 survey (14,300 respondents): "8 in 10 survey respondents said they intend to monetise what they have built... 54.6% said they're building a business, while 24.6% reported working on side projects they hope to monetize... 60.5% said they aren't making money from their projects yet" [^11].

## 2. How vibecoders try to monetize today, and where it hurts

Subscriptions via Stripe are the default path; ads and affiliate are DIY. Pain-point quotes:

1. AdSense demand unmet by platforms. "AdSense support was the top-requested item on Lovable's public feedback board for months, but Lovable retired that board in October 2025 and the feature still hasn't shipped" [^12].
2. Distribution, not building, is the wall. "The gap between 'it's live' and 'people are using it' is where most vibe-coded projects quietly die" [^13]. "99% of solopreneurs cite marketing and distribution as their #1 problem" [^14].
3. SEO invisibility (client-side rendering by default). "Vibe-coded sites look great and rank nowhere, builders wait for traffic that never comes" [^15].
4. Launch spike then nothing. "day 1 with 100 signups from launch hype, but by day 7 daily users drop to 10, and by day 14 the creator moves on to the next idea" [^16]. VibeFight launch: "50+ people visit within the first few hours with dozens saying the idea was genius, but only 1 person submitted and 0 votes were cast" [^17].
5. Earnings are tiny. "most vibe coders make $0-300/month" [^18].
6. Payment plumbing breaks. Fractional-CTO audit of 10 projects: "a Stripe secret key exposed in frontend JavaScript... unverified webhooks that lost ~15% of $200,000+ in payments" [^19].
7. Platform payment limits. Base44: "webhooks only fire when someone's actively using your app" [^20]. Lovable: "Webhooks are opt-in for Lovable, which relies on edge-function polling unless you request webhooks" [^21]. RevenueCat forum: "I cannot add revenuecat on base44 as a subscription paywall. Please help!" [^22].
8. Tax and merchant-of-record burden. "for vibe coders who generate apps with AI tools and want to monetize quickly, the merchant of record model eliminates the tax compliance barrier that stops many indie developers from selling globally" [^23].
9. Subscriptions convert poorly. "subscription pricing struggling due to 3% conversion rates from free to paid. Ads and affiliate links offer a different path" [^24].
10. Apps rot after launch. HN: "Many vibe-coded apps are now mostly abandoned, waiting for subscriptions to expire" [^25].

Gap: direct Reddit post text could not be surfaced. Pull 5 to 6 verbatim r/lovable and r/vibecoding posts before this section is cited.

## 3. What the platforms offer

- Lovable: chat-driven Stripe via Supabase Edge Functions ("Stripe integration only works in deployed versions, not in preview mode") [^26]. No AdSense, no affiliate, no marketplace. Template income is external (Gumroad) [^27].
- Bolt.new: "Introducing native Stripe integration for Bolt" (Apr 2025) [^28]; Bolt Cloud and a paid "Bolt Builders" services marketplace, nothing for app revenue [^29].
- Replit: Stripe partnership incl. "Claimable Sandbox API, builders can build a Stripe integration and test checkout flows directly inside Replit before creating a Stripe account" [^30]. Bounties marketplace "was deprecated in 2026" [^31]; an "Agent Market" where "Replit takes a platform cut similar to mobile app stores; the builder sets the price" is reported by one secondary source only [^32] *[hypothesis]*.
- Base44: one-click Stripe, "available on the Builder plan and above" [^33].
- v0/Vercel: Stripe sandbox embedding [^30]; no builder monetization program found.
- Claude Artifacts: "sharing is free... Usage counts against each user's own Claude subscription limits, not yours" [^34]; no monetization.
- No platform has announced ads, affiliate, or revenue share for builders. The only affiliate-for-vibecoders products found are third parties: ChatAds (per-request API fee, "keep 100% of affiliate commissions") [^35] and generic Skimlinks/Sovrn.

## 4. Monetization tools for tiny apps: thresholds and cuts

| Tool | Threshold | Cut |
|---|---|---|
| Google AdSense | No official traffic minimum; rejects "low value content", wants 10-15 articles, legal pages [^36] | 68% to publisher |
| Ezoic | "250,000+ monthly active users" since 19 Feb 2026; Incubator for smaller sites [^37] | varies |
| Adsterra | "no Adsterra minimum traffic requirements"; $5 Paxum / $25 PayPal min payout [^38] | undisclosed |
| Monetag | "no minimum traffic requirement"; "up to 80% of the revenue"; $5 payout [^39] | up to 80% |
| Gumroad | open | "10% + $0.50 per direct sale, and a flat 30% on sales that come through the Gumroad Discover marketplace" [^40] |
| Lemon Squeezy (MoR) | open, review at first payout | "5% + 50¢" [^41] |
| Polar.sh (MoR) | open | "new free Starter plan now costs 5% + 50¢... Early Member rate (4% + $0.40)" [^42] |
| Buy Me a Coffee | open | "flat 5% on everything" [^43] |
| Ko-fi | open | 0% tips; 5% on shop/memberships or $6-12/mo Gold [^43] |

Takeaway: payments for digital goods is solved and cheap; ads at low traffic means pop/push networks or nothing; affiliate has no low-friction on-ramp except editorial tools built for blogs.

## 5. Affiliate success cases

Thin:
- A product manager "vibe coded an app on Claude that helps people pick gifts for their loved ones, adding Amazon affiliate links"; no revenue disclosed [^44].
- TripleMinds: "Directory sites are probably the best vibe coding use case on the internet right now" [^45]; no revenue.
- Reference economics: Amazon "beginners earning between $50 and $300" per month; Booking.com "You earn a percentage of Booking.com's commission" [^46].
- Public vibecoded revenue stories are all subscription/SaaS (SendPush $135K/week, virtual try-on $800K ARR, invoicing tool) [^47]. No published case of a vibecoded app earning materially from affiliate links was found.

## 6. Categories built, and which carry affiliate intent

madewithlovable.com categories: Education, Entertainment, Finance, Food & Drink, Health, Lifestyle, Marketing, Medical, Personal Life, Productivity, E-commerce, Social, Travel & Transportation, Websites [^48]. Lovable's own templates include "AI Trip Planner Template with chat itineraries and Stripe billing" and finance dashboards [^49]. Agency writeups list common SaaS shapes: "AI Content Generation Tools... Invoice and Billing Tools... Niche CRM Tools... Small Business Reporting Tools" [^50].

Natural affiliate intent: Travel (planners: Booking/Expedia/Skyscanner), Finance (calculators, budgeting: card/broker/insurance CPA), Food & Drink (recipes: Amazon/grocery), Health (workout/supplement: Amazon), E-commerce/deals/directories, Productivity/dev-tool recommenders (SaaS programs, 20-40% recurring). Weak intent: internal tools, CRMs, invoicing, social, games.

## Bottom line

- Population is large (tens of millions of accounts, ~10M+ paying across platforms) and 80% non-technical; ~8 in 10 want to monetize; ~60% earn nothing.
- Their stated bottleneck is traffic/distribution more than payments; affiliate only pays with traffic, so the middleman must solve or select for traffic or it inherits the same zero.
- No platform ships ads/affiliate; AdSense was the top Lovable request. Real, unserved ask.
- Evidence that vibecoders earn from affiliate today: none found. V1 should test willingness plus current traffic levels, not just interest.

## Sources (snippet-sourced, unverified)

[^1] https://thenextweb.com/news/lovable-build-economy-500m-arr-vibe-coding | vendor-derived
[^2] https://getpanto.ai/blog/bolt-new-statistics | independent
[^3] https://research.contrary.com/company/bolt | independent
[^4] https://valueaddvc.com/blog/how-does-replit-make-money-525m-arr-9b-valuation-and-the-ai-agent-business-model-explained | independent
[^5] https://getpanto.ai/blog/v0-ai-platform-statistics | independent
[^6] https://www.calcalistech.com/ctechnews/article/sy194qsg11g | independent
[^7] https://www.businesswire.com/news/home/20260217938088 | vendor
[^8] https://www.xda-developers.com/most-of-flathubs-ai-generated-apps-were-abandoned-within-months-study-finds/ | independent
[^9] https://codingwithvibe.com/vibe-coding-success-rate-non-developer/ | forum-derived
[^10] https://www.techtimes.com/articles/318072/20260609/ | independent
[^11] https://sg.finance.yahoo.com/news/5-interesting-things-just-learned-130101041.html ; https://thebuildeconomy.lovable.app | vendor survey
[^12] https://www.getchatads.com/blog/how-to-add-ads-to-your-lovable-app/ | vendor (competitor)
[^13] https://okara.ai/blog/market-vibe-coded-website-2026 | vendor
[^14] https://vibecom.app/blog/the-vibe-coders-distribution-problem-how-the-bottleneck-shifted-in-2026 | vendor
[^15] https://okara.ai/blog/seo-for-vibe-coded-websites | vendor
[^16] https://dev.to/shayy/why-your-vibe-coded-app-will-fail-and-how-to-fix-it-369p | forum
[^17] https://dev.to/vulcanwm/everyone-said-it-was-genius-no-one-used-it-2hap | forum
[^18] https://determinds.com/how-to-monetize-an-app-vibe-coding-2026/ | independent
[^19] https://justinmckelvey.com/blog/vibe-coding-examples | independent
[^20] https://shipai.dev/blog/base44-payment-integration-guide | independent
[^21] https://nocode.mba/articles/lovable-stripe-subscription | independent
[^22] https://community.revenuecat.com/sdks-51/i-cannot-add-revenuecat-on-base44-as-a-subscription-paywall-please-help-7701 | forum
[^23] https://vibecoding.app/blog/lemon-squeezy-review | independent
[^24] https://www.getchatads.com/blog/vibe-coding-app-monetization-tools/ | vendor
[^25] https://news.ycombinator.com/item?id=47006615 | forum
[^26] https://docs.lovable.dev/integrations/stripe | vendor
[^27] https://lovable.dev/guides/how-to-use-lovable-to-make-money-online | vendor
[^28] https://x.com/boltdotnew/status/1910374840437010628 | vendor
[^29] https://sacra.com/c/bolt-new/ | independent
[^30] https://stripe.com/customers/replit | vendor
[^31] https://www.taskade.com/blog/replit-ai-history | independent
[^32] https://www.digitalapplied.com/blog/ai-agent-marketplaces-2026-discovery-distribution | independent, single source
[^33] https://docs.base44.com/documentation/setting-up-your-app/setting-up-payments | vendor
[^34] https://support.claude.com/en/articles/9487310 | vendor
[^35] https://www.getchatads.com/blog/top-affiliate-monetization-platforms-for-lovable-apps/ | vendor
[^36] https://support.google.com/adsense/answer/9724 | vendor
[^37] https://support.ezoic.com/kb/article/getting-started-ezoics-requirements | vendor
[^38] https://adsterra.com/blog/adsterra-minimum-payout-for-publishers/ | vendor
[^39] https://help.monetag.com/en/articles/6745946 | vendor
[^40] https://roo.beehiiv.com/p/gumroad-fees-2026 | independent
[^41] https://apiscout.dev/guides/polar-vs-stripe-vs-lemon-squeezy-2026 | independent
[^42] https://polar.sh/blog/introducing-polar-plans | vendor
[^43] https://cartmango.com/ko-fi-fees/ ; https://schoolmaker.com/blog/buy-me-a-coffee-pricing | independent
[^44] https://bryancollins.substack.com/p/can-you-actually-make-vibe-coding | independent
[^45] https://tripleminds.co/blogs/technology/top-10-vibe-coded-websites/ | vendor
[^46] https://manychat.com/blog/how-much-do-amazon-affiliates-make/ ; https://reacheffect.com/blog/how-much-does-booking-com-pay-affiliates/ | independent
[^47] https://sabrina.dev/p/vibe-coded-app-135k-revenue-1-week ; https://stealwhatworks.com/blogs/news/vibecoded-apps-make-money | independent
[^48] https://madewithlovable.com/categories | independent directory
[^49] https://lovable.dev/templates/apps | vendor
[^50] https://lowcode.agency/blog/real-apps-built-with-lovable | vendor (agency)

# Creator bounties for vibecoded subscription apps

Idea planning and research, 2026-09-02. No code. Evidence lives in `research/`; every quote there is search-snippet sourced because the session proxy blocked page fetches, so re-verify before treating any number as load-bearing.

## 1. The idea in one paragraph

A non-technical builder ships a subscription app with Lovable, Bolt, Base44 or Replit, billed through Stripe or a merchant of record such as Lemon Squeezy, Polar, Creem or Dodo. They list an offer on the platform: "promote my app, keep 100% of the first month". Creators and publishers (small YouTube and TikTok channels that cover AI tools, Substack writers, long-tail AI directories, Discord owners) browse the offers, grab a link, post, and get paid. The platform does tracking, fraud checks, escrow and payouts, and keeps a cut of every bounty. Think TikTok Shop's creator marketplace, but for software subscriptions, where the sellers are the vibecoders and the products are the apps they cannot get anyone to look at.

## 2. What the research says

### The vendor pain is real and the incumbents do not solve it

- Affiliate software is plentiful and cheap: Rewardful, Tolt, FirstPromoter, Affonso, Refgrow, PromoteKit, Partnero, Creem's beta, Lemon Squeezy's hub. Almost none of it brings affiliates. Tolt says outright that it has no marketplace. Rewardful argues marketplaces are low quality. See `research/marketplace-competitors.md`.
- The ones with real supply gate out tiny vendors. PartnerStack costs roughly $500 to $1,500 a month plus 3 to 15% of commissions and reviewers say it only makes sense past $1M ARR. Reditus is B2B only. Impact starts at $500 a month.
- Founders say the software is the easy part. Hypefury had 700 affiliates and 20% ever lifted a finger. One Indie Hacker launched a program and got one sign-up. A widely cited stat says 95% of affiliates who join never make a sale. See `research/vendor-side.md`.
- The builders' stated wall is distribution, not payments. Lovable's own survey says 8 in 10 want to monetise and 60% earn nothing. See `research/app-as-publisher/demand-side.md`.

### The offer format is respectable, the issuer is the problem

- "100% of the first month" is an established structure used by HubSpot, WP Engine, Omnisend, ProProfs, Upmetrics and Coursera. Bounties of 50 to 100% of month one are the norm for activation-focused programs. Lovable itself pays up to $100 per subscriber and Base44 pays $100.
- Publishers' documented pain is the vendor disappearing: Jasper killing its program, Paddle shutting its affiliate system, founders who "run it for four months, and quietly shut the program down", PartnerStack's Trustpilot score of 2.0 driven by payout delays. Vibecoded apps are the highest-churn vendor class there is. See `research/publisher-supply.md`.

### The unit economics of the bounty are the hard part

At a $15 a month app, the bounty is $15. Publishers judge offers on earnings per click.

| Click-to-paid rate | Earnings per click on a $15 bounty | Benchmark |
|---|---|---|
| 0.8% (Rewardful's SaaS average) | $0.12 | "$0.50 indicates a struggling program" |
| 3% | $0.45 | SaaS programs run $1.20 to $3.50 |
| 8% (great freemium conversion) | $1.20 | competitive |

The vendor can afford far more than one month. At 6.5% monthly churn, the lifetime value of a $15 subscriber is about $230, so a $15 bounty is about 6% of LTV and a 20%-for-12-months deal only pays the publisher about $26. The floor has to move up before creators will post: a minimum bounty in dollars, or bounty plus recurring, funded by the vendor's LTV headroom.

### Who would actually post

- Marquee AI newsletters (The Rundown, TLDR, Ben's Bites, Superhuman) sell flat placements at $1,200 to $24,000. Not this market.
- Top AI directories charge vendors to list ($347 at There's An AI For That, $497 at Futurepedia). Only long-tail directories run on affiliate links.
- Commission-driven supply is concentrated in small YouTube and blog creators on 20 to 40% recurring programs, earning $2,000 to $10,000 a month at the top. They need a constant stream of new tools to cover. That is the asset vibecoded apps have: novelty.
- TikTok Shop's affiliate marketplace is the right UX but bans digital goods. Favly is an early link-in-bio storefront for AI and SaaS creators. Nobody owns "browse new apps, grab a link, post, earn" for software.

### Plumbing is solved

- Tracking: pass a reference ID into Stripe Checkout or the MoR's checkout link and read webhooks. Rewardful already publishes a guide for AI-generated sites that says to paste the script into the AI prompt. Coupon codes are the fallback when cookies fail, which is the top HN complaint about Rewardful.
- Payouts and tax: Stripe Connect covers money transmission and 1099s, the 1099-NEC threshold is $2,000 from 2026, W-8BEN covers non-US creators, EU commissions are reverse-charge VAT.
- Escrow: Impact makes brands pre-fund, PartnerStack auto-charges a monthly invoice. Pre-funding is the right model for vendors with no track record.

## 3. Verdict

Worth a cheap test, not yet worth code. The gap is real: no product combines no-code billing integrations, a curated creator supply, escrowed payouts and a sub-$10k MRR vendor. The reason it is empty is also real: tiny bounties on unknown apps produce EPC that creators ignore, and marketplaces of this shape (AppSumo, PartnerStack) have ugly liquidity and trust records. The idea lives or dies on one thing: whether a reshaped offer gets creators in the AI-tools niche to post about unknown apps. Everything else is commodity.

### Reshape 1: the offer, not just the split

Platform-enforced offer floor so every listing clears the EPC bar:

- 100% of the first month with a $25 minimum bounty, or bounty plus 20% for months 2 to 6.
- Paid after the second renewal clears. This one rule handles refunds, chargebacks within the usual window, and the most common fraud, which is the creator subscribing through their own link for a free month. It also means the vendor only ever pays for retained customers. Creators already accept 30 to 90 day holds.
- Vendor pre-funds a balance (say $100, four bounties) before the listing goes live. No balance, no listing. This is the trust the publisher side keeps asking for.
- 60-day cookie plus a creator-specific coupon code as attribution fallback. Coupon codes double as a small discount the creator can advertise.

### Reshape 2: sell novelty to creators, not just money

Creators who cover AI tools have a content problem: they need new tools every week. Position the supply side as "new apps to feature this week, with a bounty attached", closer to a press list than an affiliate network. Every listing includes a demo video, a one-paragraph angle, screenshots and a free creator account. That is cheap for the vendor and it is what a small YouTuber actually needs to make a video.

### Reshape 3: ride the MoRs and builders for distribution

Creem, Polar and Dodo have the vibecoder audience and affiliate features with no marketplace. Lovable and Base44 run their own $100-per-subscriber bounty programs and understand the mechanic. The distribution play is to be the marketplace layer they link to from their "affiliates" tab, the way Affonso is the software layer under Creem, Polar and Dodo. Note that Affonso itself now lists an affiliate marketplace, which makes it both a channel and a competitor.

## 4. Riskiest assumptions, in order

1. **Creators in the AI-tools niche will post about an unknown app for a $25 to $50 bounty.** Everything depends on this. It is testable in two weeks by hand.
2. **Enough vibecoded apps have paying subscribers and landing pages that convert.** If click-to-paid is under 1%, no offer design saves the EPC. The V1 must recruit vendors with proof of at least a handful of paying users.
3. **Vibecoders will pre-fund $100 and accept a $25 floor.** They are used to "free" affiliate software. The pre-fund is the trust mechanism, so it cannot be dropped.
4. **Self-referral and coupon leakage can be contained by the pay-after-second-renewal rule.** Fraud on tiny apps is dominated by self-referrals, which the rule kills, but coupon scraping and brand bidding need per-creator terms and a kill switch.
5. **A pasted prompt reliably adds the reference ID to Lovable, Base44 and Bolt checkouts.** Rewardful's AI-site guide suggests yes. Unverified across builders and across MoR checkout links.
6. **The platforms will not build this themselves.** Lovable already has a Launched showcase and its own affiliate program. If Lovable ships "get creators to promote your app", this is a feature.

## 5. Validation plan

Stage machine: V1 two-sided interviews plus a concierge pilot, V2 painted door for vendors, then build. Budget stays locked until V1 clears.

### V1a: creator interviews (2 weeks, about €150 in gift cards)

Recruit 15 creators with 1k to 50k followers who cover AI tools: YouTube, TikTok link-in-bio, Substack, Discord owners. Sources: Favly storefronts, "AI tools" YouTube search, Passionfroot creator pages, madewithlovable-style directories.

Ask:
- Which affiliate programs they run now and what they earn per referral.
- What they would need to feature an app they have never heard of: minimum bounty, materials, free access, payout terms.
- Whether "new apps this week with a bounty" is something they would open.

Kill if fewer than 5 of 15 say they would post for a $25 to $50 bounty with pre-funded escrow.

### V1b: vendor interviews (2 weeks, in parallel)

Recruit 15 builders with a live subscription app and at least 5 paying customers. Sources: Lovable Launched, Base44 showcase, Indie Hackers, r/lovable, r/vibecoding, X.

Ask:
- Current MRR, price point, free-to-paid rate if known.
- What they have tried for distribution and what it cost.
- Whether they would pre-fund $100 and pay 100% of month one plus a $25 floor for a retained subscriber.

Kill if fewer than 5 of 15 with real paying users say yes to the pre-fund.

### V1c: concierge pilot (3 weeks, about €300)

No platform. A spreadsheet, Stripe promo codes per creator, and manual payouts by Wise. Take the 5 best vendors and the 10 most willing creators from the interviews and run real offers for 3 weeks.

Measure per creator: did they post, clicks, sign-ups, paid conversions, and the implied EPC. Measure per vendor: conversions, second-renewal survival, refund rate.

Kill if fewer than 30% of creators post, or if blended EPC is under $0.50. Pass if 3 or more creators post, 10 or more paid conversions land, and blended EPC clears $0.50. This pilot is the whole test. The interviews just pick who is in it.

### V2: painted door for vendors (2 weeks, about €400)

Landing page: "Get creators to promote your Lovable app. You pay only when someone stays subscribed." Waitlist asks for app URL, billing provider, MRR band and a yes or no on pre-funding $100. Two creatives, one on "creators, not affiliates" and one on "pay only for retained subscribers".

Kill if waitlist conversion is under 3% or if fewer than 20% of sign-ups say yes to pre-funding. Pass if 30 or more vendors with a live paid app and a yes on pre-funding.

## 6. Business model sketch

- Take 25% of each bounty, dropping to 15% for vendors above $5k a month in bounties. Anchor is the 20 to 30% networks charge when they supply the affiliates, versus 2 to 5% for pure tooling. On a $25 bounty that is $6.25.
- Vendor pre-funded balance, auto-topped-up by card. Platform pays creators net 30 after the second renewal via Stripe Connect, $50 minimum payout, batched monthly.
- Optional paid boost: a listing fee to be featured to the top creators, the model There's An AI For That and Futurepedia already prove vendors accept.
- Revenue reality check: $10k a month of platform revenue at $6 per bounty needs about 1,700 retained conversions a month across the network. That is a few hundred active listings with working funnels. This is a volume business or it is a small one.

## 7. Compliance guardrails from day one

- FTC 2023 Endorsement Guides: creators must disclose, brands can be held liable, and the penalty is $53,088 per violation. Disclosure text is part of every creative kit and the terms.
- Money movement through Stripe Connect as the platform, so the agent-of-payee question is Stripe's licence, not ours. W-9 and W-8BEN collected at creator onboarding.
- No brand bidding, no coupon sites, no incentivised sign-ups, per-creator kill switch, and bounties reversed on refund within the hold window.
- Vendor terms: 60-day notice before closing a program, pre-funded balance covers open bounties, which is the exact failure creators have been burned by.

## 8. Open questions for the operator

1. The $25 floor excludes $5 to $15 apps unless the vendor tops up above 100% of month one. Is that acceptable, or should the floor be lower and the recurring component mandatory instead?
2. Are you willing to hold vendor funds and be the counterparty to creators? That is the platform's actual job and the reason the incumbents charge 20 to 30%.
3. Standalone product first, or pitch Creem, Polar or Dodo as their marketplace layer before building anything?

## 9. Next actions

1. Pull verbatim r/lovable, r/vibecoding and r/microsaas threads on "finding affiliates" and "influencers ignore my app" to replace the snippet quotes in `research/vendor-side.md`.
2. Build the creator and vendor recruit lists (15 each) and the two interview scripts.
3. Draft the offer terms one-pager: floor, hold, pre-fund, cookie, coupon, disclosure.
4. Set up the concierge kit: spreadsheet, Stripe promo-code recipe, Wise payout flow, creative-kit template.
5. One email each to Creem and Polar partnerships describing the marketplace layer.

## Appendix: the direction this replaced

The first pass on 2026-09-02 researched the reverse framing, where the vibecoded app earns commissions by linking out to other merchants. It is filed under `research/app-as-publisher/`. Verdict there was not to build: Sovrn already gives that away and the long tail has no clicks to sell.

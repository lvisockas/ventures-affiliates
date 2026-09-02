# Affiliate middleman for vibecoded apps

Idea planning and research, 2026-09-02. No code. Sources are in `research/`; every quote there is search-snippet sourced because the session proxy blocked page fetches, so re-verify before treating any number as load-bearing.

## 1. The idea in one paragraph

Non-technical people now ship millions of small apps with Lovable, Bolt, Replit, v0, Base44 and Emergent. Most of them want to make money and most make nothing. Subscriptions convert at about 3% and require Stripe plumbing that vibecoders get wrong. Affiliate links are the monetization that fits an app which recommends things (trips, tools, gear, recipes, cards), but affiliate networks gate entry: Skimlinks accepts about 3% of applicants and rejects "mobile apps without a website", Amazon closes accounts without 3 sales in 180 days, CJ wants a live website. The platform signs the network agreements once, holds one aggregated account, and exposes monetization as something a vibecoder can add with a pasted prompt or an MCP server. It keeps a share of commissions.

## 2. What the research says

### Demand is real but the bottleneck is traffic, not links

- Lovable alone reports about 8M users, 80% non-technical, 50M+ projects. Replit is at $525M ARR. Emergent claims 6M builders. See `research/demand-side.md`.
- Lovable's own May 2026 survey of 14,300 builders: 8 in 10 intend to monetise, 60.5% are not making money yet.
- AdSense support was the top requested item on Lovable's feedback board for months and never shipped. No platform (Lovable, Bolt, Replit, Base44, v0) offers ads, affiliate, or revenue share to builders.
- The recurring failure mode is not payments. It is "it's live, nobody comes": launch spike, day-7 collapse, builder moves on. Vibecoded sites are client-rendered and rank nowhere.
- No published case of a vibecoded app earning materially from affiliate links was found. Either nobody does it or nobody reports it. Treat that as a warning, not an opportunity, until V1 says otherwise.

### Supply is joinable but hostile to unvetted sub-publishers

- Free, low-bar networks exist: Impact, Awin (deposit only), Rakuten (no screening), PartnerStack (welcomes all). Sovrn Commerce approves after clicks flow and has an API built for "mobile apps, downloadable software". See `research/supply-side.md`.
- The sub-affiliate model is established (Skimlinks, Sovrn, FlexOffers) and costs the publisher about 25% of commission.
- Liability sits with the aggregator. Awin holds subnetworks "responsible for their Subpublishers' activities". CJ can permanently ban an aggregator if a single partner is caught. FlexOffers bans undisclosed sub-affiliates. One fraudulent or hallucinating app can kill the whole account.
- Amazon is structurally against this model: Special Links are banned in client-side software other than approved store apps, PA-API needs 10 orders per 30 days, and there is an unresolved "not in connection with generative AI" clause. Amazon has to be excluded from the first version, which removes the network most consumers convert on.
- Attribution is decaying. Safari expires cookies in 7 days and networks are moving to mandatory server-side tracking. Tiny apps cannot run postbacks. The aggregator has to.

### The idea already exists at three layers

| Player | Model | What it does not do |
|---|---|---|
| ChatAds ($2M seed) | Per-request API, $0.90 per 1k requests, bring your own network accounts, markets directly to Lovable builders | Does not solve network approval. Pivoted its front door to a blog chat widget because "publishers who needed it most did not want to wire up an API" |
| Sovrn Commerce | Free aggregated account, link-wrapping API, hosted MCP server, 25% cut, pays 90 days after month end | Not self-serve for zero-traffic apps in practice, no disclosure enforcement, no vibecoder distribution |
| Wildfire RevenueEngine | Aggregated account across 60,000 merchant programs, built for AI chat and agents | Enterprise only, setup fee plus monthly fee |
| Koah ($26M raised) | Ads inside AI apps, 30% cut, $10 eCPM | Ads not affiliate, aimed at apps with real MAU |

See `research/prior-art.md`. The white space is narrow: one aggregated account for builders who cannot get approved directly, disclosure and server-side attribution baked into the SDK, distributed inside the vibecoding tools rather than as an API a builder has to wire up.

### Unit economics are thin at the long tail

- Benchmarks: EPC about $0.65 for ecommerce, $1.20 to $3.50 for SaaS, $2.80 for finance leads. Global mean commission 8.3% of attributed revenue.
- At a 30% take, $10k per month of platform revenue needs about $33k per month of commissions flowing through. At ecommerce EPC that is roughly 50,000 outbound clicks a month. At SaaS EPC it is roughly 15,000.
- "Most vibe coders make $0 to $300 per month." An aggregator of apps that each get 10 daily users after week one is an aggregator of zeros. Ezoic and Mediavine raised their thresholds for exactly this reason.

## 3. Verdict on the raw idea

The generic version, "Skimlinks for vibecoded apps", is not worth building. Sovrn already gives it away free and the long tail has no clicks to sell. The pain is genuine, the platforms are not serving it, and the supply side will accept a well-run subnetwork, so there is a version worth testing. It has to be reshaped on three axes.

### Reshape 1: pick the vertical where tiny publishers can pay

SaaS and dev-tool recommendations. Reasons:

- Vibecoders build tools that recommend tools: stack pickers, "best AI tool for X" finders, prompt libraries, workflow guides, dev-tool directories.
- SaaS programs pay 20 to 50% recurring with EPC 2 to 5x ecommerce, and they approve easily (PartnerStack welcomes all, Lemon Squeezy Affiliate Hub is open, Rewardful and Tolt programs are self-approved by the vendor).
- The SaaS affiliate supply is fragmented across PartnerStack, Rewardful, Tolt, FirstPromoter, Refgrow, Affonso, Lemon Squeezy Hub with no unified publisher API. That is an actual aggregation gap that Sovrn and Skimlinks do not cover well.
- Amazon is not needed for this vertical, so the biggest policy conflict disappears.

Travel and finance are the second and third verticals, both with open networks (Booking, Expedia, card CPA programs on Impact and CJ) and natural fit with the trip planners and calculators vibecoders already build.

### Reshape 2: integration is a prompt, not an API

ChatAds' pivot is the lesson. The product surface is:

- A paste-in prompt for Lovable, Bolt, Base44 and Replit: "Add monetized recommendations to this app using <platform>." The prompt installs one script tag or one server helper.
- An MCP server so that Cursor, Claude Code and Replit Agent can add it during the build.
- A template or Lovable-style starter for the three highest-intent shapes: directory, comparison tool, planner.
- Disclosure text and placement injected by the SDK, not left to the builder, so the aggregator's FTC and DSA exposure is controlled centrally.

### Reshape 3: distribution through the platforms, not one builder at a time

VigLink got to 500M monthly clicks through vBulletin, not sign-ups. AdMob was bought because it was inside the apps. The equivalent here is becoming the "Monetize" tab in Lovable or Base44, or at minimum a listed integration and template. AdSense was their most requested unshipped feature, which is the opening line of that conversation. This is also the only real moat: anyone can register with Impact and Awin.

## 4. Riskiest assumptions, in order

1. **Enough vibecoded apps have any outbound-click volume at all.** Everything else is moot if the median live app has under 100 visitors a month. This is the first thing to measure and the most likely killer.
2. **Networks will approve a subnetwork whose sub-publishers are AI-built apps with no editorial site.** Sovrn and Awin look open on paper; Skimlinks explicitly rejects this profile. Needs a real application, not a reading of the terms.
3. **Builders will accept a 25 to 35% cut over ChatAds' bring-your-own model.** Only true for builders who cannot get approved themselves or will not do the work. That is probably most of them, but unproven.
4. **A pasted prompt reliably produces a working, compliant integration across Lovable, Bolt and Base44.** Vibecoded Stripe integrations leak secret keys and lose 15% of webhooks. Ours has to survive the same hands.
5. **Fraud and hallucination can be contained.** One app inventing product claims or one builder running click bots ends the master account. Requires per-app kill switches, click quality monitoring, and staged trust.
6. **The platforms will not build this themselves.** Replit already has payments and an agent marketplace. If Lovable ships a monetize tab, an independent middleman is a feature.

## 5. Validation plan

Stage machine: V1 survey, V2 painted door, then build with users. Budget stays locked until V1 clears.

### V1: survey and interviews (2 weeks, about €200)

Target 150 survey responses and 15 calls with builders who have a deployed app. Recruit in r/lovable, r/vibecoding, r/SideProject, Lovable and Base44 Discords, madewithlovable.com listings.

Ask, in this order:

- Is the app live and what did it get in the last 30 days (visitors, if they know, and evidence such as an analytics screenshot).
- Does the app recommend or link to any product, tool, service or place today.
- Have they tried AdSense, Amazon Associates or any affiliate program, and what happened.
- Would they add a monetized recommendation layer if it took one prompt and they kept 70%.
- What monthly payout would make it feel worth keeping the app alive.

Kill if fewer than 15% of respondents with a live app report more than 500 monthly visitors and recommendation intent, or if fewer than 40% of those say yes to the 70% split. Iterate if intent is high but traffic is low: the product becomes traffic plus monetization (templates, SEO scaffolding), a different and bigger bet.

### V1 in parallel: supply test (2 weeks, €5 in deposits)

Apply as a subnetwork to Sovrn Commerce, Awin, Impact, PartnerStack and Rakuten, describing the sub-publisher profile honestly as AI-built web apps. Record acceptance, conditions and any explicit prohibitions. Kill if neither Sovrn nor Awin nor Impact accepts the profile.

### V2: painted door (3 weeks, about €500 in ads and tooling)

Landing page: "Add affiliate income to your Lovable or Bolt app with one prompt. You keep 70%." Waitlist requires the app URL. Two creatives, one on the "no network approvals" promise, one on the "one prompt" promise. Drive from the same communities plus a small paid test.

Measure: visitor to waitlist rate, the traffic distribution of the submitted app URLs (estimated via a third-party traffic tool, plus a follow-up email asking for a screenshot), and the vertical mix of submitted apps.

Kill if waitlist conversion is under 3% across both creatives, or if fewer than 10% of submitted apps show any measurable traffic. Pass if 25 or more apps with measurable traffic and recommendation intent sign up, which is enough for a hand-run pilot.

### Pilot before any code beyond a script tag

Hand-run 10 to 20 apps through Sovrn's existing API and PartnerStack links under our master account, with a shared spreadsheet as the dashboard. Pay out manually. This proves clicks, commission and network tolerance before building a platform.

## 6. Business model sketch

- Take 30% of commission, drop to 20% above a monthly threshold. Anchor is Skimlinks and Sovrn at 25%; the premium buys approval, compliance and payout floors. Above 40% loses to ChatAds for any builder who can get approved alone.
- Pay builders net 60 after the network pays us. Sovrn pays at 90 days, which means we either float payouts or mirror the delay. Mirror it at first.
- Minimum payout €20 to avoid fee drag on Wise or Stripe Connect transfers.
- Secondary revenue if traffic proves to be the real product: paid templates and SEO scaffolding, sold to the same builders.

## 7. Compliance guardrails baked in from day one

- FTC 2023 Endorsement Guides: disclosure before the link, near the top, not just the words "affiliate link". The SDK renders the disclosure. EU DSA article 26 requires real-time commercial communication labelling.
- No Amazon in version one. Web apps are not "approved mobile applications" and the generative-AI clause is unresolved.
- Google Play and Apple both reject apps whose primary purpose is affiliate traffic. Web apps only at first, no app store distribution.
- Per-app kill switch, click velocity limits, and a review gate before an app's links go live. Networks hold us responsible for every sub-publisher.
- Server-side click tracking and postbacks owned by us, since cookie attribution is dying and tiny apps cannot do it.

## 8. Open questions for the operator

1. Do you want to test this as a standalone product or as a pitch to Lovable or Base44 for their monetize tab? The V2 door tests the former; the latter is one cold email to their partnerships team and costs nothing.
2. Are you willing to be the legal counterparty on network agreements, with the fraud liability that implies? That is the middleman's actual job.
3. Should the first vertical be SaaS and dev tools (best economics, smaller audience) or travel (bigger audience, weaker EPC)?

## 9. Next actions

1. Pull 5 to 6 verbatim Reddit threads from r/lovable and r/vibecoding on monetization to replace the snippet quotes in `research/demand-side.md`.
2. Draft the V1 survey and post it. Book the first five calls.
3. Submit the five network applications with an honest sub-publisher description.
4. Reserve a name and write the V2 landing page copy for the two creatives.
5. Send one email to Lovable partnerships referencing the AdSense request backlog.

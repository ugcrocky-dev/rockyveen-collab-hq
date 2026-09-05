export const profile = {
  name: 'Rocky Veen',
  handle: '@rockyveen',
  email: 'collabs@rockyveen.com',
  site: 'https://rockyveen.com',
  instagram: 'https://instagram.com/rockyveen',
  tiktok: 'https://www.tiktok.com/@rockyveen',
  stats: {
    ig: '225K+',
    views: '2.1M+/mo',
    er: '5.2%',
    reelViews: '50K–300K',
  },
  rates: [
    { name: 'UGC Photo', price: '$350', note: '5 edited photos' },
    { name: 'UGC Video', price: '$750', note: '30–60s + paid rights' },
    { name: 'IG Reel', price: '$1,200', note: 'Posted to 225K+' },
    { name: 'Full Bundle', price: '$1,999', note: 'Photo + video + reel' },
  ],
}

export const pastPartners = [
  'Kling AI',
  'Higgsfield',
  'Pippit',
  'CapCut',
  'RecCloud',
  'Timekettle',
  'Govee',
  'Dreame',
  'PolarPro',
  'NEEWER',
  'SHEIN',
  'Burberry',
  'MNML',
]

export const todayActions = [
  {
    id: 'connect-gmail',
    priority: 'P0',
    title: 'Connect collabs@rockyveen.com',
    detail:
      'Inbox is locked until you authorize Gmail. Use the Composio link from this agent run, then reply so the scan + drafts can start.',
    eta: '2 min',
    status: 'blocked',
  },
  {
    id: 'apply-higgsfield',
    priority: 'P0',
    title: 'Apply to Higgsfield Creator Partnership Program',
    detail:
      'You already have a proven Higgsfield × Kling reel. Apply for CPP credits + Earn campaigns using @rockyveen + rockyveen.com case study.',
    eta: '10 min',
    status: 'ready',
    href: 'https://higgsfield.ai/creator-partnership-program',
  },
  {
    id: 'apply-runway',
    priority: 'P0',
    title: 'Apply Runway Affiliate + Creative Partners',
    detail:
      '225K IG + cinematic AI niche is a strong fit. Start affiliate for paid upside, then CPP for brand amplification.',
    eta: '15 min',
    status: 'ready',
    href: 'https://runway.com/affiliate-program',
  },
  {
    id: 'apply-luma',
    priority: 'P1',
    title: 'Submit Luma Creative Partner Program',
    detail:
      'Meets 5K+ follower bar easily. Pitch storytelling + product-demo UGC for Dream Machine launches.',
    eta: '12 min',
    status: 'ready',
    href: 'https://lumalabs.ai/creative-partner-program',
  },
  {
    id: 'apply-eleven',
    priority: 'P1',
    title: 'Join ElevenLabs Ambassador (Content Creator)',
    detail:
      'Voice + AI workflow demos fit your tech audience. Opens paid collab path over time.',
    eta: '10 min',
    status: 'ready',
    href: 'https://elevenlabs.io/ambassador',
  },
  {
    id: 'descript-affiliate',
    priority: 'P1',
    title: 'Apply Descript Affiliate Program',
    detail:
      '$25/paid Creator or Pro signup. Pair with editing workflow UGC for creators.',
    eta: '8 min',
    status: 'ready',
    href: 'https://www.descript.com/affiliate',
  },
]

export const targets = [
  {
    brand: 'Higgsfield',
    fit: 98,
    category: 'AI video suite',
    why: 'Existing collab proof + active CPP / Earn programs.',
    channel: 'Program application',
    action: 'Apply CPP + pitch paid Earn campaign',
    href: 'https://higgsfield.ai/creator-partnership-program',
    followUp: 'Day 5 if no reply',
    pitchId: 'higgsfield',
  },
  {
    brand: 'Runway',
    fit: 96,
    category: 'AI filmmaking',
    why: 'Cinematic creator audience + affiliate + CPP.',
    channel: 'Affiliate form',
    action: 'Apply affiliate, then CPP',
    href: 'https://runway.com/affiliate-program',
    followUp: 'Day 7',
    pitchId: 'runway',
  },
  {
    brand: 'Luma AI',
    fit: 94,
    category: 'AI video',
    why: 'Partner program wants storytellers with reach.',
    channel: 'CPP application',
    action: 'Apply next cohort',
    href: 'https://lumalabs.ai/creative-partner-program',
    followUp: 'Day 7',
    pitchId: 'luma',
  },
  {
    brand: 'ElevenLabs',
    fit: 91,
    category: 'AI audio',
    why: 'Ambassador track for demo/tutorial creators.',
    channel: 'Ambassador form',
    action: 'Apply Content Creator track',
    href: 'https://elevenlabs.io/ambassador',
    followUp: 'Day 7',
    pitchId: 'elevenlabs',
  },
  {
    brand: 'Descript',
    fit: 90,
    category: 'Creator SaaS',
    why: 'Active affiliate + creator partnerships hiring.',
    channel: 'Affiliate / partnerships',
    action: 'Apply affiliate + cold pitch partnerships',
    href: 'https://www.descript.com/affiliate',
    followUp: 'Day 5',
    pitchId: 'descript',
  },
  {
    brand: 'Perplexity',
    fit: 88,
    category: 'AI search',
    why: 'Heavy influencer spend; needs authentic demos.',
    channel: 'Cold email + IG',
    action: 'Pitch lifestyle-tech demo reel package',
    href: 'https://www.perplexity.ai/hub/blog',
    followUp: 'Day 3 / 7 / 14',
    pitchId: 'perplexity',
  },
  {
    brand: 'Pippit / CapCut',
    fit: 95,
    category: 'Creator tools',
    why: 'Past partners — easiest rebook / retainer path.',
    channel: 'Existing contact + site form',
    action: 'Rebook launch package + retainer offer',
    href: 'https://rockyveen.com/',
    followUp: 'Day 3',
    pitchId: 'pippit',
  },
  {
    brand: 'Timekettle',
    fit: 87,
    category: 'Consumer tech',
    why: 'Proven unboxing performance on your feed.',
    channel: 'Brand marketing / agency',
    action: 'Pitch Q4 product launch UGC bundle',
    href: 'https://www.timekettle.co/',
    followUp: 'Day 5 / 12',
    pitchId: 'timekettle',
  },
  {
    brand: 'Govee',
    fit: 84,
    category: 'Smart home',
    why: 'Past fit; Impact Creators program for gifts + CPA.',
    channel: 'Impact / Creators',
    action: 'Request Creators invite + UGC quote',
    href: 'https://us.govee.com/',
    followUp: 'Day 7',
    pitchId: 'govee',
  },
  {
    brand: 'Evoto Mobile',
    fit: 82,
    category: 'AI photo app',
    why: 'Active UGC casting for short-form campaigns.',
    channel: 'Casting call',
    action: 'Submit portfolio + rate card',
    href: 'https://projectcasting.com/job/ugc-creator-casting-call-for-ai-photo-editing-app-campaign',
    followUp: 'Day 4',
    pitchId: 'evoto',
  },
]

export const pitches = {
  higgsfield: {
    subject: 'Rocky Veen × Higgsfield — CPP + paid Earn campaign',
    body: `Hi Higgsfield Creator Team,

I'm Rocky Veen (@rockyveen) — AI/SaaS UGC creator with 225K+ Instagram, 2.1M+ monthly views, and a live Higgsfield × Kling fashion ad reel that already performed for your stack.

I'd love to:
1) Join the Creator Partnership Program for ongoing credits + launches
2) Run a paid Earn / launch campaign (UGC video + posted reel) for your next model drop

Media kit + rates: https://rockyveen.com
Best contact: collabs@rockyveen.com

Happy to send concept hooks within 24 hours.

— Rocky Veen`,
  },
  runway: {
    subject: 'Runway Affiliate + paid UGC from @rockyveen (225K)',
    body: `Hi Runway Partnerships,

Rocky Veen here — cinematic AI & tech UGC creator (225K IG, 5.2% ER, avg reels 50K–300K). My audience is US-heavy creators and product buyers who already convert on AI tools.

I'd like to:
• Join the Affiliate Program for recurring revenue content
• Pitch a paid UGC + posted Reel package for your next Gen-4 / product push

Proof + packages: https://rockyveen.com
Email: collabs@rockyveen.com

— Rocky`,
  },
  luma: {
    subject: 'Luma Creative Partner application — Rocky Veen',
    body: `Hi Luma Creative Partners team,

Applying as Rocky Veen (@rockyveen). I make cinematic AI/product storytelling for a 225K Instagram community (2.1M+ monthly views).

I already ship AI launch reels brands reuse in paid + organic. Happy to commit 2–3 Luma pieces/month with clear attribution and launch support.

Portfolio: https://rockyveen.com
IG: https://instagram.com/rockyveen
TikTok: https://www.tiktok.com/@rockyveen
Email: collabs@rockyveen.com

— Rocky Veen`,
  },
  elevenlabs: {
    subject: 'ElevenLabs Ambassador — Content Creator track (@rockyveen)',
    body: `Hi ElevenLabs Ambassador team,

I'd like to join as a Content Creator ambassador.

I'm Rocky Veen — AI/tech UGC creator with 225K+ IG. I specialize in tool demos, workflow breakdowns, and launch creatives that convert (past: Kling, Higgsfield, CapCut, Pippit, RecCloud).

I can ship monthly demos/tutorials across IG + TikTok and open a path to paid launch campaigns.

Site: https://rockyveen.com
Email: collabs@rockyveen.com

— Rocky`,
  },
  descript: {
    subject: 'Descript affiliate + paid creator collab — Rocky Veen',
    body: `Hi Descript Creator Partnerships,

Rocky Veen (@rockyveen) — 225K IG creator focused on AI/creator-tool UGC. Applying to the Affiliate Program and open to a paid launch package (screen-record UGC + posted reel).

My audience is creators who buy editing/AI workflow tools. Typical package: $750 UGC video / $1,200 posted reel / $1,999 bundle.

Media kit: https://rockyveen.com
collabs@rockyveen.com

— Rocky`,
  },
  perplexity: {
    subject: 'Perplexity UGC reel idea from @rockyveen (225K)',
    body: `Hi Perplexity Marketing / Creator team,

Rocky Veen here — AI & lifestyle UGC creator with 225K Instagram and strong US 25–44 audience.

Concept: a 30–45s “everyday problem → Perplexity answer → wow moment” reel style (similar energy to your lifestyle influencer work), plus whitelisting-ready UGC.

Packages start at $750 video / $1,200 posted reel.
Proof: https://rockyveen.com
Book: collabs@rockyveen.com

— Rocky Veen`,
  },
  pippit: {
    subject: 'Rebook + retainer — Rocky Veen × Pippit/CapCut',
    body: `Hi team,

Hope you're well — Rocky Veen here. Our last Pippit launch reel performed strongly with my 225K community, and I'd love to lock a Q4 retainer.

Proposal:
• 2 posted reels / month + 2 whitelisting UGC cuts
• Priority turnaround for launches
• Bundle pricing vs one-offs (~20% savings)

Site: https://rockyveen.com
Reply here or collabs@rockyveen.com

— Rocky`,
  },
  timekettle: {
    subject: 'Q4 launch UGC — Rocky Veen (past Timekettle partner)',
    body: `Hi Timekettle Marketing,

Rocky Veen (@rockyveen) — we previously collaborated on the W4 Pro AI Interpreter Earbuds unboxing/UGC.

I'd love to support your next launch with:
• UGC video ($750) and/or posted Reel ($1,200)
• Or Full Bundle ($1,999): photos + video + reel

Audience: 225K IG, 83% USA, tech + lifestyle buyers.
https://rockyveen.com · collabs@rockyveen.com

— Rocky`,
  },
  govee: {
    subject: 'Smart lighting UGC + Creators program — @rockyveen',
    body: `Hi Govee Creators / Marketing,

Rocky Veen — past collaborator energy fit for smart home + lifestyle lighting. 225K IG, cinematic product demos that brands reuse in ads.

Looking to:
1) Join / re-activate Creators program
2) Quote a paid UGC + reel package for your next drop

Media kit: https://rockyveen.com
Email: collabs@rockyveen.com

— Rocky`,
  },
  evoto: {
    subject: 'UGC casting application — Rocky Veen (AI photo / tech)',
    body: `Hi Evoto campaign team,

Applying for your AI photo editing UGC casting.

I'm Rocky Veen (@rockyveen): AI/SaaS UGC specialist, 225K IG, cinematic 30–60s verticals for paid + organic. Portfolio includes AI tool launches with 50K–110K+ views.

Rates: UGC video from $750 · posted reel $1,200
Portfolio: https://rockyveen.com
Contact: collabs@rockyveen.com

— Rocky Veen`,
  },
}

export const playbook = [
  {
    title: 'Own the inbound',
    text: 'Reply to every collabs@rockyveen.com inquiry within 24h with concept + quote. Speed wins mid-tier SaaS deals.',
  },
  {
    title: 'Ship 10 outbound / week',
    text: 'Mix: 5 program applications + 5 paid pitches. Track Day 3 / 7 / 14 follow-ups. Never ghost a warm past partner.',
  },
  {
    title: 'Sell outcomes, not packages',
    text: 'Lead with proof (views, niches, past logos). Offer one clear next step: starter UGC video or posted reel.',
  },
  {
    title: 'Rebook the winners',
    text: 'Highest ROI is CapCut/Pippit/Higgsfield/Kling/Timekettle-style reorders. Pitch retainers before cold volume.',
  },
]

export const followUps = [
  { day: 'Day 0', action: 'Send pitch or submit program form; log in Collab HQ' },
  { day: 'Day 3', action: 'Short bump: one proof link + one ask' },
  { day: 'Day 7', action: 'New angle: alternate package or launch date fit' },
  { day: 'Day 14', action: 'Final soft close or move to nurture list' },
]

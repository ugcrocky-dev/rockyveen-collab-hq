/** Applications HQ — platforms + nested jobs
 * Email: collabs@rockyveen.com
 * Shared password (new accounts): RockyCollabs2026!Veen
 * Prefer email signup — skip Instagram OAuth platforms
 * Profile photo: /assets/rockyveen-ig.jpg
 * Public photo mirror: https://n.uguu.se/sCJDngwj.jpg
 */

export const sharedCreds = {
  email: 'collabs@rockyveen.com',
  passwordHint: 'RockyCollabs2026!Veen',
  handle: '@rockyveen',
  site: 'https://rockyveen.com',
  photoPath: '/assets/rockyveen-ig.jpg',
  photoPublicUrl: 'https://n.uguu.se/sCJDngwj.jpg',
  photoReady: true,
  rateCard: 'https://rockyveen-rate-card.vercel.app/rate-card.pdf',
}

/** Job status: applied | pitched | submitted | won | lost | blocked | queued | needs_action */
/** Platform status: registered_applying | registered | registered_needs_cc_to_go_live |
 *  pending_* | blocked_* | already_registered | unavailable */

export const platforms = [
  {
    id: 'flinque',
    platform: 'Flinque',
    url: 'https://flinque.com',
    loginUrl: 'https://flinque.com/login',
    status: 'registered_applying',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: true,
    category: 'marketplace',
    notes:
      'Logged in. Photo upload attempted. Wayy.ai already Applied. 2026-09-06 recheck: still only Wayy.ai campaign and already Applied — 0 new Flinque applies. Profile social fields appear gated behind IG OAuth (skipped).',
    jobs: [
      {
        id: 'flinque-wayy',
        brand: 'Wayy.ai',
        title: 'AI product UGC / creator collab',
        status: 'applied',
        appliedAt: '2026-09-05',
        rate: '~$100 pitch (platform budget)',
        pitch:
          'AI/SaaS UGC creator · 225K IG · USA audience · Reel $500 / UGC $400–$500',
        notes: 'First Flinque application submitted.',
        href: 'https://flinque.com',
      },
    ],
  },
  {
    id: 'collabstr',
    platform: 'Collabstr',
    url: 'https://collabstr.com',
    loginUrl: 'https://collabstr.com/login',
    status: 'registered_needs_cc_to_go_live',
    username: 'rockyveen-ai',
    oauthRequired: false,
    photoUploaded: true,
    category: 'marketplace',
    notes:
      'DONE by me: profile, IG photo, rates (Reel $500 / TikTok $500 / UGC $450 / UGC+post $750). ONLY blocker left: card identity check at collabstr.com/creator-onboarding?step=4 (verify-only, they say no charge). Paste any card → Go Live → I mass-apply.',
    jobs: [],
  },
  {
    id: 'impact',
    platform: 'Impact.com',
    url: 'https://impact.com',
    status: 'registered_account_locked',
    username: 'rockyveen',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Account locked. Reset links Wrong Link/expired (def6ade2); forgot-password re-triggered (6c86a7a9). Do NOT hammer login/reset — wait for a fresh valid unlock email, then one careful login. Join AI/SaaS only after unlock. 0 programs joined.',
    jobs: [],
  },
  {
    id: 'intellifluence',
    platform: 'Intellifluence',
    url: 'https://intellifluence.com',
    status: 'registered_needs_support',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: true,
    category: 'marketplace',
    notes:
      'Password reset to shared creds. Photo + bio uploaded. Account was created as Brand (not Influencer) — Zendesk convert ticket submitted + email verified. Waiting support to switch role before campaign apply.',
    jobs: [],
  },
  {
    id: 'aspire',
    platform: 'Aspire Creator Portal',
    url: 'https://creators.aspireiq.com',
    status: 'registered_needs_social',
    username: 'collabs@rockyveen.com',
    oauthRequired: true,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Logged in via email OTP. Profile/bio/portfolio https://rockyveen.com updated. Marketplace blocked until Instagram (or other social) is linked via OAuth — cannot finish with email/photo/site alone.',
    jobs: [],
  },
  {
    id: 'contra',
    platform: 'Contra',
    url: 'https://contra.com',
    status: 'registered',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: true,
    category: 'freelance',
    notes:
      'OTP login OK · rocky_veen_3cd8iyps ~89%. Published 3 case studies (AI SaaS UGC Reel, Product demo creator content, Tech lifestyle UGC). Apply still blocked: Complete profile requires Verify identity & set up wallet (ID/doc upload, no skip). Cannot finish with email/photo/site alone.',
    jobs: [
      {
        id: 'contra-ai-saas-ugc-reel',
        brand: 'Portfolio',
        title: 'AI SaaS UGC Reel (case study)',
        status: 'submitted',
        appliedAt: '2026-09-05',
        rate: '—',
        notes: 'Published via Create case study flow.',
        href: 'https://contra.com/p/AFsYcOse-ai-saa-s-ugc-reel',
      },
    ],
  },
  {
    id: 'creatorready',
    platform: 'CreatorReady',
    url: 'https://creatorready.online',
    status: 'blocked_signup_error',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Signup blocked: site returns "Could not send verification code" / email-not-confirmed loop despite fresh OTPs. Retry later or abandon if persistent.',
    jobs: [],
  },
  {
    id: 'ugcjob',
    platform: 'UGCjob',
    url: 'https://ugcjob.com',
    status: 'registered',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: true,
    category: 'marketplace',
    notes:
      'OTP verified + profile refreshed 2026-09-06 (name/rates/IG Reels/@rockyveen/USA). Recheck finished: AI/app applies (18Birdies, Sports Betting App) still redirect to Backstage.com membership paywall — 0 native UGCjob submits. Keep hunting non-Backstage briefs only.',
    jobs: [],
  },
  {
    id: 'soona',
    platform: 'soona (Trend network)',
    url: 'https://soona.co',
    status: 'registered_needs_trial_video',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: true,
    category: 'marketplace',
    notes:
      'Logged in 2026-09-06 (task 9acc2445). IG @rockyveen + rockyveen.com saved. Marketplace/6781 locked until trial brief video (.mp4/.mov). 0 applies.',
    jobs: [],
  },
  {
    id: 'joinbrands',
    platform: 'JoinBrands',
    url: 'https://joinbrands.com',
    status: 'registered_needs_phone',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Password reset to RockyCollabs2026!Veen + email 2FA OK. BLOCKED on phone verification onboarding (email/photo/site insufficient). Cannot apply until phone OTP available.',
    jobs: [],
  },
  {
    id: 'paid',
    platform: '#paid',
    url: 'https://www.hashtagpaid.com',
    status: 'blocked_oauth',
    username: 'collabs@rockyveen.com',
    oauthRequired: true,
    photoUploaded: false,
    category: 'marketplace',
    notes: 'SKIP — requires Instagram OAuth after email verify.',
    jobs: [],
  },
  {
    id: 'influenceco',
    platform: 'Influence.co',
    url: 'https://influence.co',
    status: 'blocked',
    username: '',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes: 'Signup redirected to broken Google banking demo — abandoned.',
    jobs: [],
  },
  {
    id: 'brandbacker',
    platform: 'BrandBacker',
    url: 'https://brandbacker.com',
    status: 'unavailable',
    username: '',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes: 'Platform pausing access / redesign — no signup.',
    jobs: [],
  },
  {
    id: 'ainfluencer',
    platform: 'Ainfluencer',
    url: 'https://ainfluencer.com',
    status: 'blocked_mobile_only',
    username: '',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes: 'Creator signup forced through mobile app — skipped.',
    jobs: [],
  },
  {
    id: 'upfluence',
    platform: 'Upfluence',
    url: 'https://creators.upfluence.com',
    status: 'registered_needs_social',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Logged in 2026-09-06 recheck: every marketplace campaign still Anonymized / Requirement not met — social OAuth required to view brands or apply. No email-only apply path. Skipped.',
    jobs: [],
  },
  {
    id: 'framer-dub',
    platform: 'Framer Creators (via Dub Partners)',
    url: 'https://partners.dub.co/marketplace/framer',
    status: 'registered_needs_social_verify',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: true,
    category: 'affiliate',
    notes:
      'Dub Partners account verified (OTP). Profile ~4/6: traffic/channels/earnings/niches filled. Apply to Framer DISABLED until logo validation + verify ≥2 socials/website. IG bio OTP was 586542 (may expire — check Dub profile Verify). Cannot finish without Rocky putting code in IG bio or verifying website.',
    jobs: [],
  },
  {
    id: 'twine',
    platform: 'Twine',
    url: 'https://www.twine.net',
    status: 'registered_needs_onboarding',
    username: 'rockyveenugc',
    oauthRequired: false,
    photoUploaded: false,
    category: 'freelance',
    notes:
      'Profile live at twine.net/rockyveenugc. 2026-09-06 login still Twine server error ("something went wrong") after multiple retries — cannot finish onboarding/applies until Twine fixes login.',
    jobs: [],
  },
  {
    id: 'shareasale-awin',
    platform: 'ShareASale / Awin',
    url: 'https://www.awin.com',
    status: 'blocked_phone_required',
    username: '',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes: 'Task 7946b33a finished blocked: ShareASale→Awin publisher signup step 4 requires physical address + telephone. Stopped per no-fake-phone rule.',
    jobs: [],
  },
  {
    id: 'partnerstack',
    platform: 'PartnerStack',
    url: 'https://partnerstack.com',
    status: 'registered_pending_network_approval',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Network membership SUBMITTED 2026-09-06 (b1e2cad0) — pending approval. Descript under review. Reclaim still gated on Network approval (d46f804a). Later handshake login hit shadow-DOM Continue-button stall (a6df0a03) — retry from dash after Network approves. Skip phone/tax/card/IG OAuth.',
    jobs: [
      {
        id: 'ps-descript',
        brand: 'Descript',
        title: 'PartnerStack affiliate application',
        status: 'submitted',
        appliedAt: '2026-09-05',
        rate: 'Affiliate',
        notes: 'Application received — awaiting Descript review.',
        href: 'https://dash.partnerstack.com/descriptinc/application',
      },
      {
        id: 'ps-reclaim',
        brand: 'Reclaim.ai',
        title: 'PartnerStack affiliate application',
        status: 'needs_action',
        appliedAt: '2026-09-06',
        rate: 'Affiliate',
        notes: 'Retrying after Network submit; dropdown “used before?” → No.',
        href: 'https://dash.partnerstack.com/marketplace/all/details/reclaim',
      },
      {
        id: 'ps-network',
        brand: 'PartnerStack Network',
        title: 'Network membership application',
        status: 'submitted',
        appliedAt: '2026-09-06',
        rate: '—',
        notes: 'Submitted 2026-09-06 (b1e2cad0). Pending PartnerStack Network approval.',
        href: 'https://dash.partnerstack.com/marketplace/network_application',
      },
    ],
  },
  {
    id: 'direct-programs',
    platform: 'Direct brand programs',
    url: 'https://rockyveen.com',
    status: 'registered_applying',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: true,
    category: 'direct',
    notes:
      'Creator/affiliate programs applied outside marketplaces (forms + email).',
    jobs: [
      {
        id: 'prog-canva',
        brand: 'Canva',
        title: 'Canvassador program',
        status: 'won',
        appliedAt: '2026-09-04',
        rate: 'Program / product',
        notes: 'Accepted into Canvassador.',
        href: 'https://www.canva.com',
      },
      {
        id: 'prog-runway',
        brand: 'Runway',
        title: 'Runway Affinity / creator program',
        status: 'submitted',
        appliedAt: '2026-09-04',
        rate: 'Program',
        notes: 'Application submitted.',
        href: 'https://runwayml.com',
      },
      {
        id: 'prog-luma',
        brand: 'Luma AI',
        title: 'Creator Partner Program (CPP)',
        status: 'submitted',
        appliedAt: '2026-09-04',
        rate: 'Program',
        notes: 'CPP application submitted.',
        href: 'https://lumalabs.ai',
      },
      {
        id: 'prog-descript',
        brand: 'Descript',
        title: 'Affiliate / creator program',
        status: 'submitted',
        appliedAt: '2026-09-04',
        rate: 'Affiliate',
        notes: 'Application submitted.',
        href: 'https://www.descript.com',
      },
      {
        id: 'prog-perplexity',
        brand: 'Perplexity',
        title: 'Curator / creator program',
        status: 'submitted',
        appliedAt: '2026-09-04',
        rate: 'Program',
        notes: 'Curator application submitted.',
        href: 'https://www.perplexity.ai',
      },
      {
        id: 'prog-capcut',
        brand: 'CapCut',
        title: 'Creator / affiliate program',
        status: 'submitted',
        appliedAt: '2026-09-04',
        rate: 'Program',
        notes: 'Application submitted.',
        href: 'https://www.capcut.com',
      },
      {
        id: 'prog-ideogram',
        brand: 'Ideogram',
        title: 'Creator program',
        status: 'submitted',
        appliedAt: '2026-09-04',
        rate: 'Program',
        notes: 'Application submitted.',
        href: 'https://ideogram.ai',
      },
      {
        id: 'prog-elevenlabs',
        brand: 'ElevenLabs',
        title: 'Creator / affiliate signup',
        status: 'blocked',
        appliedAt: '2026-09-04',
        rate: '—',
        notes: 'Blocked by captcha — needs Rocky to finish.',
        href: 'https://elevenlabs.io',
      },
      {
        id: 'prog-higgsfield',
        brand: 'Higgsfield',
        title: 'Creator program submit',
        status: 'blocked',
        appliedAt: '2026-09-04',
        rate: '—',
        notes: 'Logged-in submit error — retry when session stable.',
        href: 'https://higgsfield.ai',
      },
    ],
  },
  {
    id: 'billo',
    platform: 'Billo',
    url: 'https://billo.app',
    status: 'blocked_mobile_only',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Creator access is mobile-app only; manage.billo.app is brands-only. Cannot register/apply via browser.',
    jobs: [],
  },
  {
    id: 'insense',
    platform: 'Insense',
    url: 'https://insense.pro',
    status: 'blocked_login_error',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Account appears to exist (signup says user exists) but creator login returns persistent "Something went wrong". Password reset needed; no applies yet.',
    jobs: [],
  },
  {
    id: 'brandbassador',
    platform: 'Brandbassador (Club)',
    url: 'https://club.co',
    status: 'blocked_mobile_only',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes: 'Club/Brandbassador creator portal is mobile-app only — no web apply path.',
    jobs: [],
  },
  {
    id: 'creatorco',
    platform: 'Creator.co',
    url: 'https://www.creator.co',
    status: 'blocked_phone_required',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes: 'Creator.space registration requires phone number — skipped per no-fake-phone rule.',
    jobs: [],
  },
  {
    id: 'opusclip',
    platform: 'OpusClip Affiliate',
    url: 'https://affiliates.opus.pro',
    status: 'registered',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      '2026-09-06: Partner program registration completed (OTP login). Dashboard live for Rocky Veen / rockyveen.com.',
    jobs: [],
  },
  {
    id: 'influenster',
    platform: 'Influenster',
    url: 'https://www.influenster.com',
    status: 'registered_needs_mobile',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Registered 2026-09-06 (task 229c26b6); name Rocky Veen set. Profile/campaigns blocked by mobile-app-only modal.',
    jobs: [],
  },
  {
    id: 'soona-trend',
    platform: 'soona (ex-Trend)',
    url: 'https://soona.co',
    status: 'registered_needs_trial_video',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Logged in; IG @rockyveen + rockyveen.com saved. Marketplace still locked until trial brief video upload.',
    jobs: [],
  },
  {
    id: 'skeepers',
    platform: 'Skeepers',
    url: 'https://skeepers.io',
    status: 'registered_needs_phone',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Task f48c4abc finished: email confirmed + logged in; name/site saved. Profile Update blocked — phone required. Consumer campaigns sold out; Influencer campaigns need IG/TikTok OAuth. 0 applies.',
    jobs: [],
  },
  {
    id: 'flexoffers',
    platform: 'FlexOffers',
    url: 'https://www.flexoffers.com',
    status: 'registered_needs_phone',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Email verified 2026-09-06 (code 297062, task 602f0b96) after tight same-session OTP. Onboarding Company Info requires Mobile Phone — stopped per no-fake-phone rule (e50a6251). Website https://rockyveen.com available to fill. 0 offers joined until phone.',
    jobs: [],
  },
  {
    id: 'admitad',
    platform: 'Admitad (Mitgo ID)',
    url: 'https://www.admitad.com',
    status: 'registered_needs_adspace',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Email confirmed + login OK (84e3bfa7). Website + IG (@rockyveen) adspaces created and submitted (e4eaecf7). Status Not reviewed — cannot join catalog until Active (1–3 business days). No phone/tax/card asked.',
    jobs: [],
  },
  {
    id: 'shopify-collabs',
    platform: 'Shopify Collabs',
    url: 'https://www.shopify.com/collabs',
    status: 'blocked_captcha',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes: 'Task f5b853d8 finished failed: Too Many Requests + persistent hCaptcha on accounts.shopify.com. Needs manual captcha.',
    jobs: [],
  },
  {
    id: 'cj',
    platform: 'CJ Affiliate',
    url: 'https://www.cj.com',
    status: 'blocked_captcha',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes: 'Publisher signup blocked by persistent visual reCAPTCHA 2026-09-06; needs manual captcha.',
    jobs: [],
  },
  {
    id: 'statusphere',
    platform: 'Statusphere',
    url: 'https://www.joinstatus.com',
    status: 'registered_waitlisted',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Task 271c9224 finished: logged in (verified). Waitlisted. Partial profile (name/bio/site/@rockyveen/interests). Save blocked without street + phone. Photo upload errored.',
    jobs: [],
  },
  {
    id: 'partnerize',
    platform: 'Partnerize / Ascend',
    url: 'https://join.partnerize.com',
    status: 'blocked_captcha',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes: 'Signup form filled 2026-09-06 but blocked by hCaptcha; needs manual solve.',
    jobs: [],
  },
  {
    id: 'rewardful',
    platform: 'Rewardful (Friends of Rewardful)',
    url: 'https://www.rewardful.com',
    status: 'registered',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Friends of Rewardful confirmed + dashboard OK (ab78929a). Affiliate link https://www.rewardful.com/?via=rocky. Business Profile/payouts need mobile 2FA — phone skipped.',
    jobs: [],
  },
  {
    id: 'tapfiliate',
    platform: 'Tapfiliate',
    url: 'https://tapfiliate.com',
    status: 'registered',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes: 'Publisher account created + onboarding finished 2026-09-06 (phone/tax/card skipped). Marketplace program browse available.',
    jobs: [],
  },
  {
    id: 'digistore24',
    platform: 'Digistore24',
    url: 'https://www.digistore24.com',
    status: 'registered_applying',
    username: 'rockyveenaffiliate',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Email confirmed + login OK 2026-09-06 (b7d8de29). Joined 10 marketplace products without phone/tax/card. Goolux + KNX Wetterstation pending manual approval. Ignore any earlier invented phone/address.',
    jobs: [
      {
        id: 'ds-funnelcockpit',
        brand: 'FunnelCockpit',
        title: 'Digistore24 affiliate join',
        status: 'submitted',
        appliedAt: '2026-09-06',
        rate: 'Affiliate',
        notes: 'Joined marketplace — ready to promote.',
        href: 'https://www.digistore24-app.com/app/en/affiliate/account/marketplace/all',
      },
      {
        id: 'ds-vifugo',
        brand: 'vifugo',
        title: 'Digistore24 affiliate join',
        status: 'submitted',
        appliedAt: '2026-09-06',
        rate: 'Affiliate',
        notes: 'Joined; welcome email received with partner link.',
        href: 'https://www.digistore24-app.com/app/en/affiliate/account/marketplace/all',
      },
      {
        id: 'ds-tubemagic',
        brand: 'Tube Magic',
        title: 'Digistore24 affiliate join',
        status: 'submitted',
        appliedAt: '2026-09-06',
        rate: 'Affiliate',
        notes: 'Joined marketplace.',
        href: 'https://www.digistore24-app.com/app/en/affiliate/account/marketplace/all',
      },
      {
        id: 'ds-batch-saas',
        brand: 'Digistore24 SaaS batch',
        title: 'Member area / Q-Mailings / Kreativ.Management / Torsten Jaeger / Handlettering / KNX / SPRACHSOFTWARE',
        status: 'submitted',
        appliedAt: '2026-09-06',
        rate: 'Affiliate',
        notes: '7 additional products joined in same session (b7d8de29).',
        href: 'https://www.digistore24-app.com/app/en/affiliate/account/marketplace/all',
      },
    ],
  },
  {
    id: 'refersion',
    platform: 'Refersion',
    url: 'https://www.refersion.com',
    status: 'registered_needs_payout_setup',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Email confirm + login 2FA OK 2026-09-06 (code 723060, task cbb3bfe1). Landed on Unified Payments onboarding — skipped phone/tax/card per rules. Marketplace applies may need payout setup later. 0 brand programs applied yet.',
    jobs: [],
  },
  {
    id: 'rakuten',
    platform: 'Rakuten Advertising',
    url: 'https://rakutenadvertising.com',
    status: 'pending_email_activate',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Publisher signup submitted (e72a8c6a). Activation email 09:50; activate task 962860b9 navigating long JWT link. Stop if phone/tax/SSN/card required.',
    jobs: [],
  },
  {
    id: 'firstpromoter',
    platform: 'FirstPromoter',
    url: 'https://www.firstpromoter.com',
    status: 'registered_needs_2fa',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Email confirmed 2026-09-06; admin 2FA still blocked — latest code attempts rejected/expired. Need one fresh code used immediately without requesting extras.',
    jobs: [],
  },
]

/** Back-compat alias used by older imports */
export const registrations = platforms.map((p) => ({
  ...p,
  jobsApplied: p.jobs.filter((j) =>
    ['applied', 'pitched', 'submitted', 'won'].includes(j.status),
  ).length,
}))

export const jobApplyQueue = [
  {
    platform: 'Flinque',
    action: 'Keep applying open AI/SaaS campaigns',
    priority: 1,
  },
  {
    platform: 'Collabstr',
    action: 'After you add CC + Go Live — mass apply jobs',
    priority: 2,
  },
  {
    platform: 'Intellifluence',
    action: 'Upload photo + apply campaigns',
    priority: 3,
  },
  {
    platform: 'Contra',
    action: 'Bid open AI/SaaS projects (onboarding done)',
    priority: 4,
  },
  {
    platform: 'soona',
    action: 'Bypass job-types modal → upload IG photo → submit app',
    priority: 5,
  },
  {
    platform: 'UGCjob',
    action: 'Finish OTP + apply open briefs',
    priority: 6,
  },
  {
    platform: 'CreatorReady',
    action: 'Finish verify + apply briefs',
    priority: 7,
  },
  {
    platform: 'JoinBrands',
    action: 'Password reset / login, then apply',
    priority: 8,
  },
]

export function appStats(list = platforms) {
  const allJobs = list.flatMap((p) => p.jobs)
  const applied = allJobs.filter((j) =>
    ['applied', 'pitched', 'submitted', 'won'].includes(j.status),
  )
  const activePlatforms = list.filter(
    (p) =>
      p.status.includes('registered') ||
      p.status.includes('applying') ||
      p.status === 'already_registered',
  )
  const needsRocky = list.filter(
    (p) =>
      p.status.includes('needs_') ||
      p.status.includes('pending_') ||
      p.jobs.some((j) => j.status === 'blocked' || j.status === 'needs_action'),
  )
  const blocked = list.filter(
    (p) =>
      p.status.includes('blocked') ||
      p.status === 'unavailable',
  )
  return {
    platforms: list.length,
    activePlatforms: activePlatforms.length,
    jobsTracked: allJobs.length,
    jobsApplied: applied.length,
    won: allJobs.filter((j) => j.status === 'won').length,
    needsRocky: needsRocky.length,
    blocked: blocked.length,
  }
}

export function statusLabel(status) {
  return String(status || '')
    .replaceAll('_', ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function platformTone(status) {
  if (status.includes('applying') || status === 'registered') return 'ok'
  if (status.includes('needs') || status.includes('pending') || status === 'already_registered')
    return 'warn'
  if (status.includes('blocked') || status === 'unavailable') return 'danger'
  return 'neutral'
}

export function jobTone(status) {
  if (status === 'won') return 'ok'
  if (['applied', 'pitched', 'submitted'].includes(status)) return 'teal'
  if (['queued', 'needs_action'].includes(status)) return 'warn'
  if (['blocked', 'lost'].includes(status)) return 'danger'
  return 'neutral'
}

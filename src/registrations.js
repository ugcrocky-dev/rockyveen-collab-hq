/** Applications HQ — platforms + nested jobs
 * Email: collabs@rockyveen.com
 * Shared password (new accounts): RockyCollabs2026!Veen
 * Prefer email signup — skip Instagram OAuth platforms
 * Profile photo: /assets/rockyveen-ig.jpg
 * Public photo mirror: https://n.uguu.se/sCJDngwj.jpg
 */

export const sharedCreds =     {
    id: 'flexoffers',
    platform: 'FlexOffers',
    url: 'https://www.flexoffers.com',
    status: 'pending_email_verify',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes:
      'Passcode 101957 from 09:15 verify email; browser task c505bccf entering code + joining AI/SaaS offers (no phone/tax/card).',
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
      'Mitgo ID + ad space OK. Welcome email “your next 5 steps” received 2026-09-06 09:17 — account live; still waiting moderation before program applies.',
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
    notes: 'Signup hit Cloudflare/hCaptcha + rate limit / Too Many Requests; retry later.',
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
    status: 'pending_email_verify',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      'Creator application started 2026-09-06 (task 41a2bb97 registered Rocky Veen). Verify-email mail received; task 3663d8d2 opening verify link. Prior waitlist note: profile save may still need street + phone after verify.',
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
    notes: 'Friends of Rewardful email confirmed + dashboard access OK 2026-09-06.',
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
    status: 'blocked_captcha',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'affiliate',
    notes: 'Affiliate signup blocked by Digistore24 anti-bot captcha (REGCAP) 2026-09-06.',
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
      'Task 794c821e finished failed: signup form filled (collabs@rockyveen.com / rockyveen_collabs / rockyveen.com) but Sign up stayed disabled behind hCaptcha.',
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

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
    id: 'statusphere',
    platform: 'Statusphere',
    url: 'https://www.joinstatus.com',
    status: 'registered_waitlisted',
    username: 'collabs@rockyveen.com',
    oauthRequired: false,
    photoUploaded: false,
    category: 'marketplace',
    notes:
      '2026-09-09 ~15:28 poll-statusphere-rakuten: Gmail (inbox+spam) — no NEW verify/unlock after:2026/09/08. Still only waitlist @12:00 UTC 2026-09-06 + verify @08:40. Remain registered_waitlisted. No phone/street invention. Next poll ~17:28 Sep 9.',
    jobs: [],
  },
]

export function jobTone(status) {
  if (status === 'won') return 'ok'
  return 'neutral'
}

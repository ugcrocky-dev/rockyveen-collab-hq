import './style.css'
import {
  followUps,
  pastPartners,
  pipeline,
  pitches,
  playbook,
  profile,
  targets,
  todayActions,
} from './data.js'
import {
  appStats,
  jobApplyQueue,
  jobTone,
  platforms,
  platformTone,
  sharedCreds,
  statusLabel,
} from './registrations.js'

const completed = new Set(
  JSON.parse(localStorage.getItem('rv-collab-done') || '[]'),
)
let activePitch = 'higgsfield'

function saveDone() {
  localStorage.setItem('rv-collab-done', JSON.stringify([...completed]))
}

function renderActions() {
  return todayActions
    .map((a) => {
      const done = completed.has(a.id)
      return `
      <article class="row ${done ? 'is-done' : ''}" data-action="${a.id}">
        <div class="row-meta">
          <span class="prio prio-${a.priority.toLowerCase()}">${a.priority}</span>
          <span class="eta">${a.eta}</span>
          <span class="status status-${a.status}">${a.status}</span>
        </div>
        <div class="row-body">
          <h3>${a.title}</h3>
          <p>${a.detail}</p>
          <div class="row-actions">
            ${
              a.href
                ? `<a class="btn btn-ghost" href="${a.href}" target="_blank" rel="noopener">Open</a>`
                : ''
            }
            <button type="button" class="btn ${done ? 'btn-muted' : 'btn-solid'}" data-toggle="${a.id}">
              ${done ? 'Done' : 'Mark done'}
            </button>
          </div>
        </div>
      </article>`
    })
    .join('')
}

function renderTargets() {
  return targets
    .map(
      (t) => `
    <article class="target">
      <div class="target-top">
        <div>
          <h3>${t.brand}</h3>
          <p class="muted">${t.category}</p>
        </div>
        <div class="fit" style="--fit:${t.fit}">
          <span>${t.fit}</span>
          <small>fit</small>
        </div>
      </div>
      <p>${t.why}</p>
      <dl class="target-meta">
        <div><dt>Channel</dt><dd>${t.channel}</dd></div>
        <div><dt>Next</dt><dd>${t.action}</dd></div>
        <div><dt>Follow-up</dt><dd>${t.followUp}</dd></div>
      </dl>
      <div class="row-actions">
        <a class="btn btn-ghost" href="${t.href}" target="_blank" rel="noopener">Go</a>
        <button type="button" class="btn btn-solid" data-pitch="${t.pitchId}">Load pitch</button>
      </div>
    </article>`,
    )
    .join('')
}

function renderPitch(id) {
  const pitch = pitches[id]
  if (!pitch) return '<p class="muted">Select a target to load a pitch.</p>'
  return `
    <div class="pitch-head">
      <p class="eyebrow">Ready to send from ${profile.email}</p>
      <h3>${pitch.subject}</h3>
    </div>
    <pre class="pitch-body" id="pitch-text">${escapeHtml(pitch.body)}</pre>
    <div class="row-actions">
      <button type="button" class="btn btn-solid" id="copy-pitch">Copy pitch</button>
      <a class="btn btn-ghost" href="mailto:?subject=${encodeURIComponent(pitch.subject)}&body=${encodeURIComponent(pitch.body)}">Open mail client</a>
    </div>
  `
}

function escapeHtml(str) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

let appFilter = localStorage.getItem('rv-app-filter') || 'all'
const expandedPlatforms = new Set(
  JSON.parse(localStorage.getItem('rv-app-expanded') || '["flinque","direct-programs"]'),
)

function saveExpanded() {
  localStorage.setItem('rv-app-expanded', JSON.stringify([...expandedPlatforms]))
}

function filteredPlatforms() {
  if (appFilter === 'all') return platforms
  if (appFilter === 'active') {
    return platforms.filter(
      (p) =>
        p.status.includes('registered') ||
        p.status.includes('applying') ||
        p.status === 'already_registered' ||
        p.jobs.length > 0,
    )
  }
  if (appFilter === 'applied') {
    return platforms.filter((p) =>
      p.jobs.some((j) =>
        ['applied', 'pitched', 'submitted', 'won'].includes(j.status),
      ),
    )
  }
  if (appFilter === 'needs') {
    return platforms.filter(
      (p) =>
        p.status.includes('needs') ||
        p.status.includes('pending') ||
        p.jobs.some((j) => ['blocked', 'needs_action'].includes(j.status)),
    )
  }
  if (appFilter === 'blocked') {
    return platforms.filter(
      (p) => p.status.includes('blocked') || p.status === 'unavailable',
    )
  }
  return platforms
}

function renderJobs(jobs) {
  if (!jobs.length) {
    return `<p class="muted job-empty">No jobs applied on this site yet.</p>`
  }
  return `
    <ul class="job-list">
      ${jobs
        .map(
          (j) => `
        <li class="job-item tone-${jobTone(j.status)}">
          <div class="job-main">
            <div class="job-title-row">
              <strong>${escapeHtml(j.brand)}</strong>
              <span class="job-chip">${escapeHtml(statusLabel(j.status))}</span>
            </div>
            <p class="job-title">${escapeHtml(j.title)}</p>
            <p class="job-notes">${escapeHtml(j.notes || '')}</p>
          </div>
          <dl class="job-meta">
            <div><dt>Applied</dt><dd>${escapeHtml(j.appliedAt || '—')}</dd></div>
            <div><dt>Rate</dt><dd>${escapeHtml(j.rate || '—')}</dd></div>
          </dl>
          ${
            j.href
              ? `<a class="btn btn-ghost btn-sm" href="${j.href}" target="_blank" rel="noopener">Open</a>`
              : ''
          }
        </li>`,
        )
        .join('')}
    </ul>`
}

function renderApplications() {
  const stats = appStats()
  const list = filteredPlatforms()
  return `
    <div class="app-stats">
      <div><strong>${stats.activePlatforms}</strong><span>Active sites</span></div>
      <div><strong>${stats.jobsApplied}</strong><span>Jobs applied</span></div>
      <div><strong>${stats.won}</strong><span>Won / accepted</span></div>
      <div><strong>${stats.needsRocky}</strong><span>Needs you</span></div>
      <div><strong>${stats.blocked}</strong><span>Blocked / skip</span></div>
    </div>

    <div class="filter-bar" role="tablist" aria-label="Filter applications">
      ${[
        ['all', 'All sites'],
        ['active', 'Active'],
        ['applied', 'With jobs'],
        ['needs', 'Needs you'],
        ['blocked', 'Blocked'],
      ]
        .map(
          ([id, label]) => `
        <button type="button" class="filter-chip ${appFilter === id ? 'is-active' : ''}" data-filter="${id}">
          ${label}
        </button>`,
        )
        .join('')}
    </div>

    <div class="platform-stack">
      ${list
        .map((p) => {
          const open = expandedPlatforms.has(p.id)
          const appliedCount = p.jobs.filter((j) =>
            ['applied', 'pitched', 'submitted', 'won'].includes(j.status),
          ).length
          return `
          <article class="platform-card tone-${platformTone(p.status)} ${open ? 'is-open' : ''}">
            <button type="button" class="platform-head" data-expand="${p.id}" aria-expanded="${open}">
              <div class="platform-identity">
                <h3>${escapeHtml(p.platform)}</h3>
                <p class="muted">${escapeHtml(statusLabel(p.status))}${
                  p.oauthRequired ? ' · OAuth' : ''
                } · ${escapeHtml(p.category)}</p>
              </div>
              <div class="platform-kpis">
                <span><strong>${appliedCount}</strong> applied</span>
                <span><strong>${p.jobs.length}</strong> tracked</span>
                <span class="chev" aria-hidden="true">${open ? '−' : '+'}</span>
              </div>
            </button>
            <div class="platform-body" ${open ? '' : 'hidden'}>
              <p>${escapeHtml(p.notes)}</p>
              <dl class="target-meta">
                <div><dt>Login</dt><dd>${escapeHtml(p.username || '—')}</dd></div>
                <div><dt>Photo</dt><dd>${
                  p.photoUploaded
                    ? 'uploaded'
                    : sharedCreds.photoReady
                      ? 'ready'
                      : 'missing'
                }</dd></div>
                <div><dt>Email</dt><dd>${escapeHtml(sharedCreds.email)}</dd></div>
              </dl>
              <div class="row-actions">
                <a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">Open site</a>
              </div>
              <div class="jobs-wrap">
                <p class="eyebrow">Jobs on this site</p>
                ${renderJobs(p.jobs)}
              </div>
            </div>
          </article>`
        })
        .join('')}
    </div>

    <div class="queue-strip">
      <p class="eyebrow">Keep applying</p>
      <div class="queue-grid">
        ${jobApplyQueue
          .map(
            (j) => `
          <div class="queue-item">
            <span class="queue-num">${j.priority}</span>
            <div>
              <strong>${escapeHtml(j.platform)}</strong>
              <p>${escapeHtml(j.action)}</p>
            </div>
          </div>`,
          )
          .join('')}
      </div>
    </div>`
}

function render() {
  const doneCount = todayActions.filter((a) => completed.has(a.id)).length

  document.querySelector('#app').innerHTML = `
    <div class="atmosphere" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>

    <header class="top">
      <a class="brand" href="${profile.site}" target="_blank" rel="noopener">
        <span class="brand-mark">RV</span>
        <span class="brand-name">Rocky Veen</span>
      </a>
      <nav class="nav">
        <a href="#applications">Apps</a>
        <a href="#pipeline">Pipeline</a>
        <a href="#today">Today</a>
        <a href="#targets">Targets</a>
        <a href="#playbook">Playbook</a>
      </nav>
      <a class="btn btn-solid" href="${profile.instagram}" target="_blank" rel="noopener">@rockyveen</a>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Collab HQ</p>
          <h1>Rocky Veen</h1>
          <p class="lede">
            Track every marketplace, every job applied, and keep the outreach machine running.
          </p>
          <div class="cta-group">
            <a class="btn btn-solid" href="#applications">Open Applications Tracker</a>
            <a class="btn btn-ghost" href="${profile.site}" target="_blank" rel="noopener">Media kit</a>
          </div>
        </div>
      </section>

      <section class="section snapshot" aria-label="Creator snapshot">
        <ul class="stat-rail">
          <li><strong>${profile.stats.ig}</strong><span>Instagram</span></li>
          <li><strong>${profile.stats.views}</strong><span>Monthly views</span></li>
          <li><strong>${profile.stats.er}</strong><span>Engagement</span></li>
          <li><strong>${profile.stats.reelViews}</strong><span>Avg reel views</span></li>
        </ul>
      </section>

      <section class="panel alert ok" id="inbox">
        <div>
          <p class="eyebrow">Inbox · ${profile.email}</p>
          <h2>Connected — outreach live</h2>
          <p>
            Scanned your inbox and sent replies/pitches across Lovart, TicNote, Flove.AI,
            PLAUD, CapCut, Dreamina, Anker, Dreame, Mayvora, Higgsfield, Runway, Luma, and ElevenLabs.
            Highest-priority win right now: <strong>film the TicNote draft by Sep 10</strong> and lock Lovart once Amy sends access.
          </p>
        </div>
        <div class="rates">
          ${profile.rates
            .map(
              (r) =>
                `<div><strong>${r.price}</strong><span>${r.name}</span><small>${r.note}</small></div>`,
            )
            .join('')}
        </div>
      </section>

      <section id="applications" class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Applications HQ · ${sharedCreds.email}</p>
            <h2>Sites & jobs tracker</h2>
          </div>
          <p class="progress">${appStats().jobsApplied} applied across ${appStats().platforms} sites</p>
        </div>
        ${renderApplications()}
      </section>

      <section id="pipeline" class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Live deals</p>
            <h2>Collab pipeline</h2>
          </div>
          <p class="muted">${pipeline.length} active threads</p>
        </div>
        <div class="target-grid">
          ${pipeline
            .map(
              (p) => `
            <article class="target">
              <div class="target-top">
                <div>
                  <h3>${p.brand}</h3>
                  <p class="muted">${p.status} · ${p.value}</p>
                </div>
              </div>
              <p>${p.note}</p>
              <dl class="target-meta">
                <div><dt>Next</dt><dd>${p.next}</dd></div>
              </dl>
            </article>`,
            )
            .join('')}
        </div>
      </section>

      <section id="today" class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Do this next</p>
            <h2>Today’s collab queue</h2>
          </div>
          <p class="progress">${doneCount}/${todayActions.length} complete</p>
        </div>
        <div class="stack" id="action-list">
          ${renderActions()}
        </div>
      </section>

      <section id="targets" class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Outside email</p>
            <h2>High-fit brands to pitch</h2>
          </div>
          <p class="muted">Ranked for AI / SaaS / tech fit with @rockyveen</p>
        </div>
        <div class="target-grid">
          ${renderTargets()}
        </div>
      </section>

      <section id="pitches" class="section split">
        <div>
          <p class="eyebrow">Outreach</p>
          <h2>Pitch & follow-up</h2>
          <p class="muted">
            Copy a pitch, send from ${profile.email}, then run the cadence below.
            Once Gmail is connected, I can drop these as drafts and follow up for you.
          </p>
          <ol class="cadence">
            ${followUps.map((f) => `<li><strong>${f.day}</strong> ${f.action}</li>`).join('')}
          </ol>
        </div>
        <div class="pitch-panel" id="pitch-panel">
          ${renderPitch(activePitch)}
        </div>
      </section>

      <section id="playbook" class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Operating system</p>
            <h2>How to get more collabs</h2>
          </div>
        </div>
        <div class="play-grid">
          ${playbook
            .map(
              (p, i) => `
            <article class="play">
              <span class="num">0${i + 1}</span>
              <h3>${p.title}</h3>
              <p>${p.text}</p>
            </article>`,
            )
            .join('')}
        </div>
        <div class="partners">
          <p class="eyebrow">Trusted logos to lead with</p>
          <p class="partner-line">${pastPartners.join(' · ')}</p>
        </div>
      </section>
    </main>

    <footer class="foot">
      <div>
        <strong>Rocky Veen Collab HQ</strong>
        <p>Built for ${profile.email} · IG/TikTok ${profile.handle}</p>
      </div>
      <div class="foot-links">
        <a href="${profile.site}" target="_blank" rel="noopener">Website</a>
        <a href="${profile.instagram}" target="_blank" rel="noopener">Instagram</a>
        <a href="${profile.tiktok}" target="_blank" rel="noopener">TikTok</a>
      </div>
    </footer>
  `

  bindEvents()
}

function bindEvents() {
  document.querySelectorAll('[data-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-toggle')
      if (completed.has(id)) completed.delete(id)
      else completed.add(id)
      saveDone()
      render()
      document.querySelector('#today')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  document.querySelectorAll('[data-pitch]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activePitch = btn.getAttribute('data-pitch')
      const panel = document.querySelector('#pitch-panel')
      if (panel) panel.innerHTML = renderPitch(activePitch)
      bindPitchCopy()
      document.querySelector('#pitches')?.scrollIntoView({ behavior: 'smooth' })
    })
  })

  document.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      appFilter = btn.getAttribute('data-filter') || 'all'
      localStorage.setItem('rv-app-filter', appFilter)
      render()
      document.querySelector('#applications')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  document.querySelectorAll('[data-expand]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-expand')
      if (expandedPlatforms.has(id)) expandedPlatforms.delete(id)
      else expandedPlatforms.add(id)
      saveExpanded()
      render()
      document.querySelector('#applications')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  bindPitchCopy()
}

function bindPitchCopy() {
  const copyBtn = document.querySelector('#copy-pitch')
  if (!copyBtn) return
  copyBtn.addEventListener('click', async () => {
    const text = pitches[activePitch]?.body || ''
    try {
      await navigator.clipboard.writeText(text)
      copyBtn.textContent = 'Copied'
      setTimeout(() => {
        copyBtn.textContent = 'Copy pitch'
      }, 1600)
    } catch {
      copyBtn.textContent = 'Copy failed'
    }
  })
}

render()

requestAnimationFrame(() => {
  document.body.classList.add('is-ready')
})

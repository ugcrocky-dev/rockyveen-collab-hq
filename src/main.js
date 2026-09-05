import './style.css'
import {
  followUps,
  pastPartners,
  pitches,
  playbook,
  profile,
  targets,
  todayActions,
} from './data.js'

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
        <a href="#today">Today</a>
        <a href="#targets">Targets</a>
        <a href="#pitches">Pitches</a>
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
            Your daily operating system to land more AI, SaaS, and tech brand collabs.
          </p>
          <div class="cta-group">
            <a class="btn btn-solid" href="#today">Start today’s queue</a>
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

      <section class="panel alert" id="inbox">
        <div>
          <p class="eyebrow">Inbox · ${profile.email}</p>
          <h2>Gmail not connected yet</h2>
          <p>
            I don’t have access to <strong>collabs@rockyveen.com</strong> until you authorize it.
            (A different Gmail was already linked in Composio — we did not scan that.)
            Open the connect link from this Cursor agent chat, sign in as
            <strong>collabs@rockyveen.com</strong>, then reply “connected” so I can scan,
            draft replies, and send pitches from your inbox.
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

/* ============================================================
   script.js  —  DO NOT EDIT
   Reads data.js and renders everything dynamically.
   ============================================================ */

/* ── 1. Particle canvas background ─────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('canvas-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x:   Math.random() * W,
      y:   Math.random() * H,
      r:   Math.random() * 1.6 + 0.4,
      vx:  (Math.random() - 0.5) * 0.35,
      vy:  (Math.random() - 0.5) * 0.35,
      a:   Math.random() * 0.55 + 0.1
    };
  }

  function init() {
    particles = Array.from({ length: 80 }, createParticle);
  }

  function drawHexagonGrid() {
    /* Subtle hex accent nodes at grid intersections */
    ctx.save();
    ctx.strokeStyle = 'rgba(45,107,255,0.06)';
    ctx.lineWidth = 1;
    const size = 80, cols = Math.ceil(W / size) + 1, rows = Math.ceil(H / size) + 1;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * size + (r % 2 === 0 ? 0 : size / 2);
        const y = r * size * 0.866;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79,139,255,0.12)';
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawHexagonGrid();

    /* Connect nearby particles */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(45,107,255,${0.07 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(127,179,255,${p.a})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    requestAnimationFrame(animate);
  }

  resize();
  init();
  animate();
  window.addEventListener('resize', () => { resize(); });
})();

/* ── 2. Navigation ─────────────────────────────────────────── */
(function buildNav() {
  const sections = ['hero', 'about', 'story', 'achievements', 'projects', 'leadership', 'goals'];
  const labels   = ['Home', 'About', 'Story', 'Achievements', 'Projects', 'Leadership', 'Goals'];

  const ul = document.getElementById('nav-links');
  sections.forEach((id, i) => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href        = `#${id}`;
    a.textContent = labels[i];
    a.dataset.section = id;
    li.appendChild(a);
    ul.appendChild(li);
  });

  /* Active link on scroll */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('active', a.dataset.section === e.target.id);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-h')} 0px 0px 0px` });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  /* Mobile toggle */
  const toggle = document.getElementById('nav-toggle');
  const navUl  = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    const open = navUl.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  navUl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navUl.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  /* Update brand */
  document.getElementById('nav-brand').innerHTML =
    `<span>${(STUDENT.name || 'PORTFOLIO').split(' ')[0].toUpperCase()}</span>.dev`;
})();

/* ── 3. Hero ───────────────────────────────────────────────── */
(function buildHero() {
  document.getElementById('hero-name').textContent    = STUDENT.name       || '[Student Name Here]';
  document.getElementById('hero-tagline').textContent = STUDENT.tagline    || '';
  document.getElementById('hero-school').textContent  = STUDENT.school     || '';
  document.title = `${STUDENT.name || 'Portfolio'} — Student Portfolio`;
  const desc = document.getElementById('page-desc');
  if (desc) desc.content = `${STUDENT.name} — Technology Portfolio`;
})();

/* ── 4. About ──────────────────────────────────────────────── */
(function buildAbout() {
  document.getElementById('about-name').textContent   = STUDENT.name       || '[Student Name Here]';
  document.getElementById('about-school').textContent = STUDENT.school     || '[School Name Here]';
  document.getElementById('about-aspiration-text').textContent = STUDENT.aspiration || '[Career Aspiration Here]';

  /* Profile photo */
  const wrap = document.getElementById('about-photo-wrap');
  if (STUDENT.profilePhoto && STUDENT.profilePhoto !== 'images/profile-placeholder.svg') {
    const img = document.createElement('img');
    img.src   = STUDENT.profilePhoto;
    img.alt   = STUDENT.name;
    img.className = 'about-photo';
    wrap.appendChild(img);
  } else {
    /* Check localStorage for admin-uploaded photo */
    const stored = localStorage.getItem('admin_photo_profile');
    if (stored) {
      const img = document.createElement('img');
      img.src   = stored;
      img.alt   = STUDENT.name;
      img.className = 'about-photo';
      wrap.appendChild(img);
    } else {
      wrap.innerHTML = `
        <div class="about-photo-placeholder">
          <span class="placeholder-icon">🖼</span>
          <span>Add your profile photo to<br><code>images/profile-placeholder.svg</code><br>or via the Admin panel</span>
        </div>`;
    }
  }

  /* Tags */
  const tags = ['Cybersecurity', 'Python', 'Problem Solver', 'Lifelong Learner'];
  const tagRow = document.getElementById('about-tags');
  tags.forEach(t => {
    const span = document.createElement('span');
    span.className   = 'tag';
    span.textContent = t;
    tagRow.appendChild(span);
  });

  /* Links */
  const linksWrap = document.getElementById('about-links');
  const linkData = [
    { label: '✉ Email',    href: STUDENT.email,    placeholder: '[your.email@example.com]' },
    { label: '⌨ GitHub',   href: STUDENT.github,   placeholder: '[https://github.com/...]' },
    { label: '💼 LinkedIn', href: STUDENT.linkedin, placeholder: '[https://linkedin.com/...]' }
  ];
  linkData.forEach(l => {
    if (l.href && l.href !== l.placeholder) {
      const a = document.createElement('a');
      a.href      = l.href.startsWith('http') ? l.href : `mailto:${l.href}`;
      a.textContent = l.label;
      a.className = 'btn-secondary';
      a.style.fontSize = '0.75rem';
      a.style.padding  = '8px 16px';
      linksWrap.appendChild(a);
    }
  });
})();

/* ── 5. Personal Story ─────────────────────────────────────── */
(function buildStory() {
  const container = document.getElementById('story-paragraphs');
  (STUDENT.story || []).forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'story-paragraph reveal';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.textContent = p;
    container.appendChild(div);
  });
})();

/* ── 6. Achievements ───────────────────────────────────────── */
(function buildAchievements() {
  const grid   = document.getElementById('achievements-grid');
  const filter = document.getElementById('achievements-filter');

  /* Collect unique categories */
  const categories = ['All', ...new Set(ACHIEVEMENTS.map(a => a.category))];

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className   = `filter-btn${cat === 'All' ? ' active' : ''}`;
    btn.textContent = cat;
    btn.setAttribute('aria-pressed', cat === 'All' ? 'true' : 'false');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      filterAchievements(cat);
    });
    filter.appendChild(btn);
  });

  function filterAchievements(cat) {
    document.querySelectorAll('.achievement-card').forEach(card => {
      const show = cat === 'All' || card.dataset.category === cat;
      card.style.display = show ? '' : 'none';
    });
  }

  ACHIEVEMENTS.forEach((a, i) => {
    const colour = (CATEGORY_COLOURS && CATEGORY_COLOURS[a.category]) || 'var(--blue)';
    const card   = document.createElement('div');
    card.className      = 'glass-card achievement-card reveal';
    card.dataset.index  = i;
    card.dataset.category = a.category;
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.style.transitionDelay = `${(i % 3) * 0.08}s`;
    card.innerHTML = `
      <span class="achievement-card-cat" style="color:${colour};border-color:${colour}33;">${a.category}</span>
      <h3 class="achievement-card-title">${a.title}</h3>
      <p class="achievement-card-org">${a.organisation}</p>
      <p class="achievement-card-date">${a.date}</p>
      <div class="achievement-card-cta">View Details <span>→</span></div>
    `;

    card.addEventListener('click',  () => openAchievementModal(i));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openAchievementModal(i); });
    grid.appendChild(card);
  });
})();

/* ── 7. Achievement Modal ──────────────────────────────────── */
function openAchievementModal(index) {
  const a      = ACHIEVEMENTS[index];
  const colour = (CATEGORY_COLOURS && CATEGORY_COLOURS[a.category]) || 'var(--blue)';
  const content = document.getElementById('achievement-modal-content');

  /* Check localStorage for admin-uploaded images */
  const storedImg  = localStorage.getItem(`admin_photo_achievement_${index}`);
  const storedCert = localStorage.getItem(`admin_photo_certificate_${index}`);
  const imgSrc     = storedImg  || a.imagePath;
  const certSrc    = storedCert || a.certificateImagePath;

  content.innerHTML = `
    <div class="modal-cat-row">
      <span class="achievement-card-cat" style="color:${colour};border-color:${colour}33;">${a.category}</span>
    </div>
    <h2 class="modal-title" id="modal-title-text">${a.title}</h2>
    <div class="modal-meta">
      <span class="modal-meta-item">📅 <strong>${a.date}</strong></span>
      <span class="modal-meta-item">🏛 <strong>${a.organisation}</strong></span>
    </div>

    <p class="modal-section-label">About this Achievement</p>
    <p class="modal-text">${a.description}</p>

        ${a.reflection ? `
    <p class="modal-section-label">My Reflection</p>
    <p class="modal-text">${a.reflection}</p>
    ` : ''}

    ${a.learningOutcome ? `
    <p class="modal-section-label">Learning Outcome</p>
    <p class="modal-text">${a.learningOutcome}</p>
    ` : ''}

    <div class="modal-images ${(imgSrc && certSrc) ? '' : 'single'}">
      ${imgSrc ? `
      <div>
        <p class="modal-img-label">Achievement Photo</p>
        <div class="modal-img-wrap" id="modal-img-ach">
          <img src="${imgSrc}" alt="${a.title} photo" loading="lazy" />
        </div>
      </div>` : ''}
      ${certSrc ? `
      <div>
        <p class="modal-img-label">Certificate</p>
        <div class="modal-img-wrap" id="modal-img-cert">
          <img src="${certSrc}" alt="${a.title} certificate" loading="lazy" />
        </div>
      </div>` : ''}
      ${(!imgSrc && !certSrc) ? `
      <div>
        <div class="modal-img-wrap">
          <div class="modal-img-placeholder">
            <span class="ph-icon">🖼</span>
            <span>Add your photo here.<br>See data.js → imagePath / certificateImagePath</span>
          </div>
        </div>
      </div>` : ''}
    </div>
  `;

  /* Lightbox on image click */
  ['modal-img-ach', 'modal-img-cert'].forEach(id => {
    const wrap = document.getElementById(id);
    if (!wrap) return;
    const img = wrap.querySelector('img');
    if (img) {
      wrap.addEventListener('click', () => openLightbox(img.src));
    }
  });

  document.getElementById('achievement-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('achievement-modal-close').addEventListener('click', closeAchievementModal);
document.getElementById('achievement-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('achievement-modal')) closeAchievementModal();
});

function closeAchievementModal() {
  document.getElementById('achievement-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── 8. Projects ───────────────────────────────────────────── */
(function buildProjects() {
  const grid = document.getElementById('projects-grid');
  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card project-card reveal';
    card.setAttribute('tabindex', '0');
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="project-card-body">
        <p class="project-num">PROJECT // ${String(i + 1).padStart(2, '0')}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-cat">${p.category}</p>
        <div class="project-tech-row">
          ${(p.technologiesUsed || []).map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
        <p class="project-snippet">${p.problem}</p>
      </div>
      <div class="project-arrow">→</div>
    `;
    card.addEventListener('click',   () => openProjectModal(i));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProjectModal(i); });
    grid.appendChild(card);
  });
})();

/* ── 9. Project Modal ──────────────────────────────────────── */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function openProjectModal(index) {
  const p       = PROJECTS[index];
  const content = document.getElementById('project-modal-content');
  const storedImg = localStorage.getItem(`admin_photo_project_${index}`);
  const imgSrc  = storedImg || p.imagePath;

  content.innerHTML = `
    <span class="achievement-card-cat" style="margin-bottom:14px;display:inline-block;">${p.category}</span>
    <h2 class="modal-title" id="project-modal-title">${p.title}</h2>
    <div class="modal-tech-row">
      ${(p.technologiesUsed || []).map(t => `<span class="tech-chip">${t}</span>`).join('')}
    </div>

    <p class="modal-section-label">The Problem</p>
    <p class="modal-text">${p.problem}</p>

    <p class="modal-section-label">My Solution</p>
    <p class="modal-text">${p.solution}</p>

    <p class="modal-section-label">My Role</p>
    <p class="modal-text">${p.myRole}</p>

    <p class="modal-section-label">Development Journey</p>
    <p class="modal-text">${p.journey}</p>

    <p class="modal-section-label">Outcome</p>
    <p class="modal-text">${p.outcome}</p>

    <p class="modal-section-label">Lessons Learned</p>
    <p class="modal-text">${p.lessonsLearned}</p>

    ${imgSrc ? `
    <div class="modal-img-wrap" style="margin-top:24px;max-width:420px;" id="project-modal-img">
      <img src="${imgSrc}" alt="${p.title}" loading="lazy" />
    </div>` : ''}

    ${p.videoLink ? `
    <p class="modal-section-label">Demo Video</p>
    <a href="${p.videoLink}" target="_blank" class="btn-secondary" style="display:inline-flex;margin-top:8px;">▶ Watch Demo</a>` : ''}

    ${p.sourceCode ? `
    <p class="modal-section-label">Source Code</p>
    <pre class="code-block"><code>${escapeHtml(p.sourceCode)}</code></pre>` : ''}
  `;

  const projImg = document.getElementById('project-modal-img');
  if (projImg) {
    const img = projImg.querySelector('img');
    if (img) projImg.addEventListener('click', () => openLightbox(img.src));
  }

  document.getElementById('project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('project-modal-close').addEventListener('click', closeProjectModal);
document.getElementById('project-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('project-modal')) closeProjectModal();
});

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── 10. Leadership ────────────────────────────────────────── */
(function buildLeadership() {
  const grid = document.getElementById('leadership-grid');
  if (!LEADERSHIP || LEADERSHIP.length === 0) {
    grid.innerHTML = `<p style="color:var(--grey-mid);font-size:0.9rem;">Open <code>data.js</code> and add your leadership roles.</p>`;
    return;
  }
  LEADERSHIP.forEach((l, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card leadership-card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <p class="leadership-card-org">${l.organisation}</p>
      <h3 class="leadership-card-role">${l.title}</h3>
      <p class="leadership-card-dur">${l.duration}</p>
      <ul class="leadership-responsibilities">
        ${(l.responsibilities || []).map(r => `<li>${r}</li>`).join('')}
      </ul>
      ${l.impact ? `<div class="leadership-impact"><strong>Impact:</strong> ${l.impact}</div>` : ''}
      ${l.reflection ? `<p class="leadership-reflection">${l.reflection}</p>` : ''}
    `;
    grid.appendChild(card);
  });
})();

/* ── 11. Future Goals ──────────────────────────────────────── */
(function buildGoals() {
  const grid = document.getElementById('goals-grid');
  (STUDENT.futureGoals || []).forEach((g, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card goal-card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <span class="goal-icon">${g.icon}</span>
      <h3 class="goal-title">${g.title}</h3>
      <p class="goal-desc">${g.description}</p>
    `;
    grid.appendChild(card);
  });
})();

/* ── 12. Footer ────────────────────────────────────────────── */
(function buildFooter() {
  document.getElementById('footer-name').textContent   = STUDENT.name   || '';
  document.getElementById('footer-school').textContent = STUDENT.school || '';
  document.getElementById('footer-copy').textContent   =
    `© ${new Date().getFullYear()} ${STUDENT.name || 'Student Portfolio'}. All rights reserved.`;

  const footerLinks = document.getElementById('footer-links');
  const sections = [
    { label:'Home', href:'#hero' }, { label:'About', href:'#about' },
    { label:'Achievements', href:'#achievements' }, { label:'Projects', href:'#projects' },
    { label:'Goals', href:'#goals' }
  ];
  sections.forEach(s => {
    const a = document.createElement('a');
    a.href        = s.href;
    a.textContent = s.label;
    footerLinks.appendChild(a);
  });
})();

/* ── 13. Lightbox ──────────────────────────────────────────── */
function openLightbox(src) {
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src   = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
});

/* ── 14. Escape key closes modals ──────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAchievementModal();
    closeProjectModal();
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* ── 15. Scroll reveal ─────────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Watch for dynamically added reveal elements */
  const mutObs = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  });
  mutObs.observe(document.body, { childList: true, subtree: true });
})();

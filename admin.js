/* ============================================================
   admin.js  —  Admin Login & Image Management
   ============================================================

   ⚠ IMPORTANT: This is a DEMO login system only.
   Credentials are stored in plain text in this file.
   This is NOT secure for production use.
   Real authentication requires a backend server (Node.js,
   Python, PHP, etc.) with proper hashing and sessions.

   ============================================================ */

// ── Demo Credentials ─────────────────────────────────────────
// Change these to whatever you like.
// DO NOT share this file publicly if you put a real password here.
const ADMIN_USERNAME = "Yong En";  // e.g. "student"
const ADMIN_PASSWORD = "Yong En";  // e.g. "portfolio2025"

// ── Session key ───────────────────────────────────────────────
const SESSION_KEY = 'portfolio_admin_session';

/* ── Login Logic ─────────────────────────────────────────── */
const loginScreen = document.getElementById('login-screen');
const dashboard   = document.getElementById('dashboard');
const loginError  = document.getElementById('login-error');

function checkSession() {
  const session = sessionStorage.getItem(SESSION_KEY);
  if (session === 'authenticated') {
    showDashboard();
  }
}

function showDashboard() {
  loginScreen.classList.add('hidden');
  dashboard.classList.remove('hidden');
  buildUploadSections();
}

document.getElementById('login-btn').addEventListener('click', attemptLogin);

/* Allow pressing Enter to submit */
['username', 'password'].forEach(id => {
  document.getElementById(id).addEventListener('keydown', e => {
    if (e.key === 'Enter') attemptLogin();
  });
});

function attemptLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    /* ── Correct credentials ── */
    sessionStorage.setItem(SESSION_KEY, 'authenticated');
    loginError.textContent = '';
    showDashboard();
  } else {
    /* ── Incorrect credentials ── */
    loginError.textContent = 'Incorrect username or password.';
    document.getElementById('password').value = '';
  }
}

document.getElementById('logout-btn').addEventListener('click', () => {
  sessionStorage.removeItem(SESSION_KEY);
  dashboard.classList.add('hidden');
  loginScreen.classList.remove('hidden');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});

/* ── Build Upload Sections ──────────────────────────────────── */
function buildUploadSections() {
  const container = document.getElementById('upload-sections');
  container.innerHTML = '';

  const sections = [
    {
      key:   'profile',
      label: 'Profile Photo',
      sub:   'Your main profile photo shown in the About section.',
      slots: [{ key: 'profile', label: 'Profile Photo' }]
    },
    {
      key:   'achievement',
      label: 'Achievement Photos',
      sub:   'One photo per achievement. Shown in the achievement modal.',
      slots: (ACHIEVEMENTS || []).map((a, i) => ({
        key:   `achievement_${i}`,
        label: a.title.substring(0, 40) + (a.title.length > 40 ? '…' : '')
      }))
    },
    {
      key:   'certificate',
      label: 'Certificates',
      sub:   'Certificate images (JPG, PNG, WEBP). Shown in achievement modals.',
      slots: (ACHIEVEMENTS || []).map((a, i) => ({
        key:   `certificate_${i}`,
        label: a.title.substring(0, 40) + (a.title.length > 40 ? '…' : '')
      }))
    },
    {
      key:   'project',
      label: 'Project Screenshots',
      sub:   'Screenshot or photo for each coding project.',
      slots: (PROJECTS || []).map((p, i) => ({
        key:   `project_${i}`,
        label: p.title
      }))
    },
    {
      key:   'leadership',
      label: 'Leadership Photos',
      sub:   'Photos related to your leadership roles.',
      slots: (LEADERSHIP || []).map((l, i) => ({
        key:   `leadership_${i}`,
        label: l.title
      }))
    }
  ];

  sections.forEach(s => {
    const section = document.createElement('div');
    section.className = 'glass-card upload-section';
    section.innerHTML = `
      <h2 class="upload-section-title">${s.label}</h2>
      <p class="upload-section-sub">${s.sub}</p>
      <div class="upload-grid" id="grid-${s.key}"></div>
    `;
    container.appendChild(section);

    const grid = section.querySelector(`#grid-${s.key}`);
    s.slots.forEach(slot => buildSlot(grid, slot.key, slot.label));
  });
}

/* ── Build a single upload slot ─────────────────────────────── */
function buildSlot(grid, key, label) {
  const storageKey = `admin_photo_${key}`;
  const existing   = localStorage.getItem(storageKey);

  const slot = document.createElement('div');
  slot.className    = 'upload-slot';
  slot.title        = `Upload: ${label}`;

  if (existing) {
    renderSlotWithImage(slot, storageKey, label, existing);
  } else {
    renderSlotEmpty(slot, storageKey, label);
  }

  grid.appendChild(slot);
}

function renderSlotEmpty(slot, storageKey, label) {
  slot.innerHTML = `
    <span class="upload-slot-icon">📁</span>
    <span class="upload-slot-label">${label}</span>
    <span style="font-size:0.6rem;color:var(--grey-mid);">Click to upload</span>
  `;
  slot.addEventListener('click', () => triggerUpload(slot, storageKey, label));
}

function renderSlotWithImage(slot, storageKey, label, src) {
  slot.innerHTML = `
    <img src="${src}" alt="${label}" />
    <div class="slot-overlay">
      <span>📁 Replace</span>
    </div>
    <button class="slot-remove" title="Remove image">✕</button>
  `;
  slot.querySelector('.slot-remove').addEventListener('click', e => {
    e.stopPropagation();
    if (confirm(`Remove image for "${label}"?`)) {
      localStorage.removeItem(storageKey);
      renderSlotEmpty(slot, storageKey, label);
    }
  });
  slot.addEventListener('click', () => triggerUpload(slot, storageKey, label));
}

/* ── File upload via hidden input ───────────────────────────── */
function triggerUpload(slot, storageKey, label) {
  const input = document.createElement('input');
  input.type   = 'file';
  input.accept = 'image/jpeg,image/jpg,image/png,image/webp';
  input.style.display = 'none';
  document.body.appendChild(input);

  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) { document.body.removeChild(input); return; }

    /* Check file size — warn if over 2MB (localStorage ~5MB total) */
    if (file.size > 2 * 1024 * 1024) {
      alert('File is over 2MB. Please use a smaller image to avoid storage limits.');
      document.body.removeChild(input);
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      const base64 = e.target.result;
      try {
        localStorage.setItem(storageKey, base64);
        renderSlotWithImage(slot, storageKey, label, base64);
      } catch (err) {
        alert('Storage limit reached. Please remove some images first or use smaller files.');
      }
      document.body.removeChild(input);
    };
    reader.readAsDataURL(file);
  });

  input.click();
}

/* ── Check session on page load ─────────────────────────────── */
checkSession();

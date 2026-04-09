
const supabaseClient = window.supabase.createClient(
  "https://nloyzfqhtyiwjquxtybu.supabase.co",
  "sb_publishable_1rAhisqG2DDeH7482CUFmg_TWiSGSPi"
);

async function testConnection() {
  const { data, error } = await supabaseClient
    .from('announcements')
    .select('*');

  console.log("DATA:", data);
  console.log("ERROR:", error);
}

testConnection();
// ─── PLACEHOLDER API ────────────────────────────
// These are placeholder functions — swap with real fetch calls to your backend.

async function apiGet(endpoint) {
  console.log(`[API GET] ${API_BASE}${endpoint}`);
  // 🔧 Uncomment and use when backend is ready:
  // const res = await fetch(`${API_BASE}${endpoint}`);
  // if (!res.ok) throw new Error('API error');
  // return res.json();
  return Promise.resolve(null); // placeholder
}

async function apiPost(endpoint, body) {
  console.log(`[API POST] ${API_BASE}${endpoint}`, body);
  // 🔧 Uncomment and use when backend is ready:
  // const res = await fetch(`${API_BASE}${endpoint}`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(body),
  // });
  // if (!res.ok) throw new Error('API error');
  // return res.json();
  return Promise.resolve({ success: true }); // placeholder
}

// ─── PLACEHOLDER DATA ───────────────────────────
// This data is shown until you connect a real backend.
// Each section has a corresponding API call ready to go.

const DATA = {

//   studentOfMonth: {
//     // GET /api/student-of-month
//     name: "Sophia Rivera",
//     achievement: "Winner – Regional Youth Vocal Championship 2025",
//     month: "June 2025",
//     quote: "Catherine didn't just teach me how to sing — she taught me how to perform with my whole heart. Every lesson pushed me to discover a voice I didn't know I had.",
//     years: "3",
//     competitions: "12",
//     age: "16",
//     photo: null, // 🔧 Set to image URL when available
//     emoji: "🎤"
//   },

  announcements: [
    // GET /api/announcements
    {
      id: 1,
      title: "🎉 Spring Recital Registration Now Open!",
      description: "Registration for our annual Spring Vocal Recital is now open. All current students are welcome to participate. Please contact Catherine to secure your spot. Limited spaces available — don't miss it!",
      tag: "Recital",
      date: "2 days ago",
      pinned: true,
      icon: "📌"
    },
    {
      id: 2,
      title: "Holiday Schedule — Studio Closure",
      description: "The studio will be closed from December 23 to January 2. Regular lessons resume January 3rd. Happy holidays to all our wonderful students and families!",
      tag: "Holiday",
      date: "1 week ago",
      pinned: false,
      icon: "🎄"
    },
    {
      id: 3,
      title: "New Beginner Spots Available – January Intake",
      description: "Catherine is accepting new beginner students starting January. If you or someone you know is interested in starting their vocal journey, now is the perfect time. Book a free 15-minute consultation!",
      tag: "Update",
      date: "2 weeks ago",
      pinned: false,
      icon: "🎵"
    },
    {
      id: 4,
      title: "Congratulations to Our Competition Winners!",
      description: "A huge congratulations to Sophia, Marcus, and Lily for their outstanding performances at the Regional Youth Vocal Championship. We are so proud of every one of you!",
      tag: "Achievement",
      date: "3 weeks ago",
      pinned: false,
      icon: "🏆"
    }
  ],

  events: [
    // GET /api/events
    {
      id: 1,
      title: "Spring Vocal Recital 2025",
      month: "JUN",
      day: "14",
      year: "2025",
      time: "6:00 PM",
      location: "Brampton Arts Centre, Main Hall",
      description: "Our beloved annual Spring Recital showcasing the incredible talent and growth of all our students — from beginners to advanced performers. Families and friends warmly welcome.",
      status: "upcoming",
      image: null
    },
    {
      id: 2,
      title: "Open House & Free Trial Lesson Day",
      month: "MAY",
      day: "10",
      year: "2025",
      time: "10:00 AM – 2:00 PM",
      location: "Catherine's Vocal Studio",
      description: "Bring a friend! Experience a free 15-minute vocal lesson, meet Catherine, and see the studio. Perfect for anyone curious about starting lessons.",
      status: "upcoming",
      image: null
    },
    {
      id: 3,
      title: "Regional Youth Vocal Championship",
      month: "APR",
      day: "5",
      year: "2025",
      time: "All Day",
      location: "Mississauga Convention Centre",
      description: "Our students competed in the Regional Championships. Incredibly proud of everyone who participated — what a memorable day of music and talent!",
      status: "past",
      image: null
    },
    {
      id: 4,
      title: "Winter Holiday Concert 2024",
      month: "DEC",
      day: "18",
      year: "2024",
      time: "7:00 PM",
      location: "Sacred Heart Community Hall, Brampton",
      description: "A magical evening of seasonal classics performed by our studio's students. Thank you to all the families who came out to celebrate!",
      status: "past",
      image: null
    }
  ],

//   featuredStudents: [
//     // GET /api/students/featured
//     { name: "Sophia Rivera", achievement: "Regional Champion 2025", emoji: "🎤" },
//     { name: "Marcus Chen", achievement: "Musical Theatre Lead", emoji: "🎭" },
//     { name: "Lily Thompson", achievement: "RCM Grade 8 Vocals", emoji: "🎵" },
//     { name: "Aisha Patel", achievement: "Toronto Youth Choir", emoji: "🌟" }
//   ],

  testimonials: [
    { text: "Catherine completely transformed my daughter's confidence. She went from barely speaking in class to performing on stage in front of hundreds of people. The results speak for themselves.", name: "Sarah M.", role: "Parent of student (age 11)" },
    { text: "I've taken lessons with many teachers and Catherine is simply exceptional. Her technique, patience, and genuine passion for music make every session worth looking forward to.", name: "James K.", role: "Adult student" },
    { text: "My son has been with Catherine for 3 years now. He recently got the lead role in his school musical — something we never dreamed possible. She's remarkable.", name: "Priya S.", role: "Parent of student (age 14)" },
    { text: "After just 6 months, I can hear the difference in my range and control. Catherine knows exactly how to push you while keeping it fun. Highly recommend to anyone serious about singing.", name: "Emma L.", role: "Teen student" },
    { text: "We drove 40 minutes each way because there was no teacher like Catherine closer to home. Worth every minute. Her passion for her students is unmatched.", name: "David R.", role: "Parent" },
    { text: "As a shy adult who always secretly wanted to sing, Catherine's patience and encouragement changed my life. I actually performed at an open mic last month — never thought I'd do that!", name: "Fatima N.", role: "Adult student" }
  ]
};

// ─── ROUTER ────────────────────────────────────
let currentPage = 'home';

function navigate(page) {
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
  renderPage(page);
  // Update active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = '';
  });
}
function renderPage(page) {
  const app = document.getElementById('app');

  app.style.opacity = 0;

  setTimeout(() => {
    app.innerHTML = '';

    const renderers = {
      home: renderHome,
      about: renderAbout,
      lessons: renderLessons,
      events: renderEvents,
      announcements: renderAnnouncements,
      contact: renderContact
    };

    (renderers[page] || renderHome)();
    initScrollAnimations();

    app.style.opacity = 1;
  }, 200);
}

// ─── NAV SCROLL ────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// ─── SCROLL ANIMATIONS ──────────────────────────
function initScrollAnimations() {
  setTimeout(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
  }, 100);
}

// ─── HELPERS ───────────────────────────────────
function photoOrEmoji(photo, emoji, cls = '') {
  if (photo) return `<img src="${photo}" alt="" class="${cls}" style="width:100%;height:100%;object-fit:cover;"/>`;
  return `<span class="${cls}" style="font-size:80px;opacity:0.5">${emoji}</span>`;
}

// ─── HOME PAGE ─────────────────────────────────
function renderHome() {
  const app = document.getElementById('app');
  app.style.paddingTop = '0';

  // Hero
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="hero-bg">
      <div class="hero-note">♪</div>
      <div class="hero-note">♫</div>
      <div class="hero-note">♩</div>
    </div>
    <div class="hero-content">
      <div class="hero-eyebrow">Vocal Coaching · All Ages · 20+ Years</div>
      <h1 class="hero-title">
        Catherine's
        <em>Vocal Studio</em>
      </h1>
      <p class="hero-subtitle">Helping Voices Shine for Over 20 Years</p>
      <div class="hero-actions">
        <button class="btn btn-primary" onclick="navigate('contact')">Book a Lesson</button>
        <button class="btn btn-outline" onclick="navigate('events')">View Upcoming Events</button>
      </div>
    </div>
  `;
  app.appendChild(hero);

  // Trust Strip
  const trust = document.createElement('div');
  trust.className = 'trust-strip';
  trust.innerHTML = `
    <div class="trust-inner">
      <div class="trust-item fade-up"><span class="trust-num">20+</span><div class="trust-label">Years of Experience</div></div>
      <div class="trust-item fade-up"><span class="trust-num">500+</span><div class="trust-label">Students Taught</div></div>
      <div class="trust-item fade-up"><span class="trust-num">All</span><div class="trust-label">Ages Welcome</div></div>
      <div class="trust-item fade-up"><span class="trust-num">1-on-1</span><div class="trust-label">Personalized Coaching</div></div>
    </div>
  `;
  app.appendChild(trust);

  // Student of the Month (fetched from API)
//   renderStudentOfMonth(app);

  // Featured Students Preview
//   const studentsSection = document.createElement('section');
//   studentsSection.className = 'section';
//   studentsSection.innerHTML = `
//     <div class="section-label fade-up">Our Students</div>
//     <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:48px;flex-wrap:wrap;">
//       <div>
//         <h2 class="section-title fade-up">Rising <em>Stars</em></h2>
//         <div class="divider fade-up"></div>
//       </div>
//       <button class="btn btn-outline btn-sm fade-up" onclick="navigate('students')">View All Students</button>
//     </div>
//     <div class="grid-4">
//       ${DATA.featuredStudents.map(s => `
//         <div class="student-card fade-up">
//           <div class="student-photo">${s.emoji}</div>
//           <div class="student-info">
//             <div class="student-name">${s.name}</div>
//             <div class="student-achievement">${s.achievement}</div>
//           </div>
//         </div>
//       `).join('')}
//     </div>
//   `;
//   app.appendChild(studentsSection);

  // Latest Announcement
  renderHomeAnnouncement(app);

  // Upcoming Event
  renderHomeEvent(app);

  // Testimonials
  const testiSection = document.createElement('section');
  testiSection.style.cssText = 'padding:80px 0;overflow:hidden;';
  const doubled = [...DATA.testimonials, ...DATA.testimonials];
  testiSection.innerHTML = `
    <div class="section" style="padding-bottom:48px;">
      <div class="section-label center fade-up">Testimonials</div>
      <h2 class="section-title center fade-up">What <em>Families</em> Say</h2>
      <div class="divider center fade-up"></div>
    </div>
    <div class="testimonials">
      <div class="testimonials-track">
        ${doubled.map(t => `
          <div class="testi-card">
            <div class="testi-stars">★★★★★</div>
            <p class="testi-text">"${t.text}"</p>
            <div class="testi-author">
              <div class="testi-avatar">${t.name[0]}</div>
              <div>
                <div class="testi-name">${t.name}</div>
                <div class="testi-role">${t.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  app.appendChild(testiSection);

  // Final CTA
  const cta = document.createElement('section');
  cta.className = 'cta-section';
  cta.innerHTML = `
    <div class="cta-inner">
      <div class="section-label center fade-up">Start Today</div>
      <h2 class="section-title center fade-up">Ready to Start Your<br/><em>Singing Journey?</em></h2>
      <div class="divider center fade-up"></div>
      <p class="section-sub center fade-up">Whether you're a complete beginner or an experienced performer, Catherine will help you discover and develop your unique voice.</p>
      <div style="display:flex;gap:16px;justify-content:center;margin-top:40px;flex-wrap:wrap;" class="fade-up">
        <button class="btn btn-primary" onclick="navigate('contact')">Book Your First Lesson</button>
        <button class="btn btn-outline" onclick="navigate('lessons')">View Lesson Options</button>
      </div>
    </div>
  `;
  app.appendChild(cta);

  app.style.paddingTop = '';
}

// ─── STUDENT OF THE MONTH (HOME) ───────────────
function renderStudentOfMonth(container) {
  const section = document.createElement('div');
  section.className = 'sotm-section';

  // Loading state
  section.innerHTML = `<div style="max-width:1280px;margin:0 auto;"><div class="sotm-loading"><div class="spinner"></div></div></div>`;
  container.appendChild(section);

  // 🔧 API CALL: GET /api/student-of-month
  // When backend is ready, replace the timeout below with:
  // apiGet('/student-of-month').then(data => { if(data) buildSotm(section, data); else buildSotm(section, DATA.studentOfMonth); });
  setTimeout(() => {
    buildSotm(section, DATA.studentOfMonth);
  }, 600);
}

function buildSotm(section, s) {
  section.innerHTML = `
    <div class="sotm-inner" style="max-width:1280px;margin:0 auto;">

      <div class="sotm-badge-wrap">
        <div class="sotm-photo-frame">
          <div class="sotm-photo">
            ${s.photo
              ? `<img src="${s.photo}" alt="${s.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>`
              : `<span class="sotm-photo-placeholder">${s.emoji || '🎤'}</span>`
            }
          </div>
          <div class="sotm-ring"></div>
          <div class="sotm-ring-2"></div>
          <div class="sotm-star-badge">★</div>
        </div>
        <div class="sotm-month-tag">✦ ${s.month}</div>
      </div>

      <div class="sotm-content">
        <div class="sotm-label">⭐ Student of the Month</div>
        <h2 class="sotm-name">${s.name}</h2>
        <div class="sotm-achievement">${s.achievement}</div>
        <div class="sotm-quote">${s.quote}</div>
        <div class="sotm-stats">
          <div class="sotm-stat">
            <div class="sotm-stat-val">${s.years}</div>
            <div class="sotm-stat-key">Years with Catherine</div>
          </div>
          <div class="sotm-stat">
            <div class="sotm-stat-val">${s.competitions}</div>
            <div class="sotm-stat-key">Competitions Entered</div>
          </div>
          <div class="sotm-stat">
            <div class="sotm-stat-val">${s.age}</div>
            <div class="sotm-stat-key">Years Old</div>
          </div>
        </div>
        
      </div>

    </div>
  `;
}

// ─── HOME ANNOUNCEMENT PREVIEW ─────────────────
function renderHomeAnnouncement(container) {
  const section = document.createElement('section');
  section.className = 'section';
  const ann = DATA.announcements[0]; // Latest announcement
  section.innerHTML = `
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:40px;flex-wrap:wrap;">
      <div>
        <div class="section-label fade-up">Latest News</div>
        <h2 class="section-title fade-up">Latest <em>Announcement</em></h2>
        <div class="divider fade-up"></div>
      </div>
      <button class="btn btn-outline btn-sm fade-up" onclick="navigate('announcements')">See All Announcements</button>
    </div>
    <div class="ann-card pinned fade-up">
      <div class="ann-icon">${ann.icon}</div>
      <div class="ann-body">
        <div class="ann-head">
          <div class="ann-title">${ann.title}</div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span class="pin-badge">📌 Pinned</span>
            <span class="ann-time">${ann.date}</span>
          </div>
        </div>
        <p class="ann-text">${ann.description}</p>
        <span class="ann-tag">${ann.tag}</span>
      </div>
    </div>
  `;
  container.appendChild(section);
}

// ─── HOME EVENT PREVIEW ─────────────────────────
function renderHomeEvent(container) {
  const section = document.createElement('section');
  section.style.cssText = 'padding:0 32px 80px;max-width:1280px;margin:0 auto;';
  const ev = DATA.events.find(e => e.status === 'upcoming');
  if (!ev) return;
  section.innerHTML = `
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:32px;flex-wrap:wrap;">
      <div>
        <div class="section-label fade-up">Next Up</div>
        <h2 class="section-title fade-up">Upcoming <em>Event</em></h2>
        <div class="divider fade-up"></div>
      </div>
      <button class="btn btn-outline btn-sm fade-up" onclick="navigate('events')">View All Events</button>
    </div>
    <div class="event-card fade-up">
      <div class="event-date-block">
        <div class="event-month">${ev.month}</div>
        <div class="event-day">${ev.day}</div>
        <div class="event-year">${ev.year}</div>
      </div>
      <div class="event-body">
        <h3 class="event-title">${ev.title}</h3>
        <div class="event-meta">
          <span>🕐 ${ev.time}</span>
          <span>📍 ${ev.location}</span>
        </div>
        <p class="event-desc">${ev.description}</p>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="event-status status-upcoming">Upcoming</span>
          <button class="btn btn-primary btn-sm" onclick="navigate('contact')">Register Now</button>
        </div>
      </div>
    </div>
  `;
  container.appendChild(section);
}

// ─── ABOUT PAGE ─────────────────────────────────
function renderAbout() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="page-header">
      <div class="section-label">Our Story</div>
      <h1 class="section-title">About <em>Catherine</em></h1>
      <div class="divider center"></div>
      <p class="section-sub center">A lifetime devoted to unlocking the power of the human voice.</p>
    </div>

    <section class="section">
      <div class="about-grid">
        <div class="about-img-frame fade-up">
          <div class="about-img">
  <img src="about.jpeg" alt="Catherine" style="width:100%;height:100%;object-fit:cover;border-radius:4px;" />
</div>
          <div class="about-img-accent"></div>
          <div class="about-img-badge">
            <span>20</span>
            <small>Years Teaching</small>
          </div>
        </div>
        <div class="fade-up">
          <div class="section-label">Her Journey</div>
          <h2 class="section-title" style="font-size:clamp(32px,4vw,52px);">Passionate About Every <em>Voice</em></h2>
          <div class="divider"></div>
          <p style="color:rgba(253,252,248,0.7);line-height:1.9;margin-bottom:24px;">
            Catherine discovered her love for singing at age seven, and has never looked back. After studying classical and contemporary vocal technique at the Wilfrid Laurier University and performing professionally across Canada, she found her true calling: teaching. 
          </p>
          <p style="color:rgba(253,252,248,0.7);line-height:1.9;margin-bottom:32px;">
            For over 20 years, Catherine has dedicated herself to helping students of all ages — from shy 7-year-olds taking their first notes to adults finally pursuing a lifelong dream — discover and develop their unique voices. Her studio has become a place of transformation, confidence, and joy.
          </p>
          <div class="section-label" style="margin-bottom:20px;">Teaching Philosophy</div>
          <ul class="philosophy-list">
            <li>Every voice is unique and deserves to be developed with care and intention</li>
            <li>Technique is the foundation — expression is the goal</li>
            <li>Confidence grows on stage through preparation and encouragement</li>
            <li>Music should bring joy — lessons should feel like a gift, not a chore</li>
            <li>Every student progresses at their own pace — there is no rush</li>
          </ul>
        </div>
      </div>
    </section>

    <section style="background:rgba(201,168,76,0.04);border-top:1px solid rgba(201,168,76,0.12);border-bottom:1px solid rgba(201,168,76,0.12);padding:80px 32px;">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="section-label center fade-up">Highlights</div>
        <h2 class="section-title center fade-up">Achievements & <em>Milestones</em></h2>
        <div class="divider center fade-up"></div>
        <div class="grid-4" style="margin-top:48px;">
          ${[
            { icon: '', val: '500+', label: 'Students Taught' },
            { icon: '', val: '50+', label: 'Student Performances' },
            { icon: '', val: '30+', label: 'Competition Wins' },
            { icon: '', val: '20+', label: 'RCM Certifications' }
          ].map(a => `
            <div class="fade-up" style="text-align:center;padding:32px 20px;background:#111;border:1px solid rgba(255,255,255,0.06);border-radius:4px;">
              <div style="font-size:40px;margin-bottom:16px;">${a.icon}</div>
              <div style="font-family:var(--font-head);font-size:42px;font-weight:900;color:var(--gold);">${a.val}</div>
              <div style="font-size:13px;color:rgba(253,252,248,0.55);text-transform:uppercase;letter-spacing:0.08em;margin-top:8px;">${a.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-label center fade-up">Studio Life</div>
      <h2 class="section-title center fade-up">A Peek <em>Inside</em></h2>
      <div class="divider center fade-up"></div>
      <div class="photo-strip">
        ${['🎤','🎹','🎵','🎭','🎶','🌟','🎙️','🎼'].map(e => `
          <div class="strip-photo fade-up">${e}</div>
        `).join('')}
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-inner">
        <h2 class="section-title center fade-up">Ready to Work with <em>Catherine?</em></h2>
        <div class="divider center fade-up"></div>
        <p class="section-sub center fade-up">Start your journey with a personalized lesson tailored to your voice and goals.</p>
        <div style="display:flex;gap:16px;justify-content:center;margin-top:40px;flex-wrap:wrap;" class="fade-up">
          <button class="btn btn-primary" onclick="navigate('contact')">Book Now</button>
          <button class="btn btn-outline" onclick="navigate('lessons')">View Lessons</button>
        </div>
      </div>
    </section>
  `;
}

// ─── LESSONS PAGE ───────────────────────────────
function renderLessons() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page-header">
      <div class="section-label">What We Offer</div>
      <h1 class="section-title">Vocal <em>Lessons</em></h1>
      <div class="divider center"></div>
      <p class="section-sub center">Tailored coaching for every age, level, and goal — in a warm, encouraging studio environment.</p>
    </div>

    <section class="section">
      <div class="section-label fade-up">Lesson Types</div>
      <h2 class="section-title fade-up">Who We <em>Teach</em></h2>
      <div class="divider fade-up"></div>
      <div class="grid-4" style="margin-top:40px;">
        ${[
          { name: 'Beginner', desc: 'No experience needed. Build breath control, pitch, and confidence from your very first lesson.' },
          { name: 'Intermediate', desc: 'Expand your range, refine your technique, and develop your own artistic voice.' },
          { name: 'Advanced', desc: 'Intensive coaching for singers pursuing competitions, auditions, or professional performance.' },
          { name: 'Kids (Ages 6+)', desc: 'Age-appropriate, fun lessons that build real musical skills while making singing a joy.' }
        ].map(l => `
          <div class="lesson-type-card fade-up">
            <div class="lesson-type-name">${l.name}</div>
            <p class="lesson-type-desc">${l.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section style="background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06);padding:80px 32px;">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="section-label fade-up">Curriculum</div>
        <h2 class="section-title fade-up">What You'll <em>Learn</em></h2>
        <div class="divider fade-up"></div>
        <div class="grid-3" style="margin-top:40px;gap:20px;">
          ${[
            { title: 'Vocal Technique', desc: 'Breathing, posture, resonance, register transitions, and healthy voice production.' },
            { title: 'Performance Skills', desc: 'Stage presence, mic technique, storytelling through song, and managing nerves.' },
            { title: 'Music Theory', desc: 'Reading music, rhythm, scales, and intervals — understanding music makes you a stronger singer.' },
            { title: 'Repertoire', desc: 'From pop to classical, musical theatre to RCM — build a diverse personal song catalogue.' },
            { title: 'Confidence Building', desc: 'A safe environment that pushes students to take risks and believe in their voice.' },
            { title: 'Competition Prep', desc: 'Strategic prep for Kiwanis, RCM exams, auditions, and local competitions.' }
          ].map(i => `
            <div class="lesson-type-card fade-up">
              <div class="lesson-type-name">${i.title}</div>
              <p class="lesson-type-desc">${i.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section style="background:rgba(201,168,76,0.04);border-bottom:1px solid rgba(201,168,76,0.1);padding:80px 32px;">
      <div style="max-width:1280px;margin:0 auto;text-align:center;">
        <div class="section-label center fade-up">The Experience</div>
        <h2 class="section-title center fade-up">What Students <em>Become</em></h2>
        <div class="divider center fade-up"></div>
        <p style="font-size:15px;color:rgba(253,252,248,0.55);font-style:italic;margin-bottom:40px;" class="fade-up">
          Students arrive nervous and unsure — they leave <strong style="color:var(--gold);font-style:normal;">confident, expressive, and unstoppable.</strong>
        </p>
        <div class="grid-3" style="text-align:left;gap:20px;">
          ${[
            { title: 'Confidence on Stage', desc: 'From hesitant to fully present — students become comfortable performing in front of any audience.' },
            { title: 'Strong Technique', desc: 'A healthy, powerful voice built with proper technique that lasts a lifetime.' },
            { title: 'Real Performance Growth', desc: 'From recitals to competitions, measurable progress and real-world experience.' }
          ].map(r => `
            <div class="lesson-type-card fade-up">
              <div class="lesson-type-name">${r.title}</div>
              <p class="lesson-type-desc">${r.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-inner">
        <div class="section-label center fade-up">Start Today</div>
        <h2 class="section-title center fade-up">Book Your <em>First Lesson</em></h2>
        <div class="divider center fade-up"></div>
        <p class="section-sub center fade-up">Not sure where to start? Book a free 15-minute consultation and Catherine will guide you to the right fit.</p>
        <div style="display:flex;gap:16px;justify-content:center;margin-top:40px;flex-wrap:wrap;" class="fade-up">
          <button class="btn btn-primary" onclick="navigate('contact')">Book Now — It's Free to Start</button>
          <button class="btn btn-outline" onclick="navigate('contact')">Contact Catherine</button>
        </div>
      </div>
    </section>
  `;
}

// // ─── STUDENTS PAGE ──────────────────────────────
// function renderStudents() {
//   const app = document.getElementById('app');
//   app.innerHTML = `
//     <div class="page-header">
//       <div class="section-label">Proof & Results</div>
//       <h1 class="section-title">Our <em>Students</em></h1>
//       <div class="divider center"></div>
//       <p class="section-sub center">See what's possible with dedication and the right coaching.</p>
//     </div>

//     <section class="section">
//       <div class="section-label center fade-up">⭐ Student of the Month</div>
//       <h2 class="section-title center fade-up">This Month's <em>Spotlight</em></h2>
//       <div class="divider center fade-up"></div>
//     </section>
//   `;

//   // Reuse Student of the Month component
//   const sotmWrap = document.createElement('div');
//   sotmWrap.className = 'sotm-section';
//   sotmWrap.innerHTML = `<div style="max-width:1280px;margin:0 auto;"><div class="sotm-loading"><div class="spinner"></div></div></div>`;
//   app.appendChild(sotmWrap);
//   setTimeout(() => buildSotm(sotmWrap, DATA.studentOfMonth), 400);

//   app.innerHTML += `
//     <section class="section">
//       <div class="section-label fade-up">Gallery</div>
//       <h2 class="section-title fade-up">Performances & <em>Memories</em></h2>
//       <div class="divider fade-up"></div>
//       <div class="gallery-grid" style="margin-top:40px;">
//         ${[
//           { emoji: '🎤', name: 'Sophia R.', info: 'Regional Champion' },
//           { emoji: '🎭', name: 'Marcus C.', info: 'Musical Theatre' },
//           { emoji: '🎵', name: 'Lily T.', info: 'RCM Grade 8' },
//           { emoji: '🌟', name: 'Aisha P.', info: 'Youth Choir' },
//           { emoji: '🎶', name: 'Noah W.', info: 'Spring Recital' },
//           { emoji: '🎙️', name: 'Emma L.', info: 'Pop Performance' },
//           { emoji: '🎼', name: 'James K.', info: 'Adult Student' },
//           { emoji: '✨', name: 'Mia S.', info: 'Kiwanis Festival' },
//           { emoji: '🏅', name: 'Liam O.', info: 'Competition Winner' },
//         ].map(g => `
//           <div class="gallery-item fade-up">
//             ${g.emoji}
//             <div class="gallery-overlay">
//               <div class="gallery-overlay-name">${g.name}</div>
//               <div class="gallery-overlay-info">${g.info}</div>
//             </div>
//           </div>
//         `).join('')}
//       </div>
//     </section>

//     <section style="background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);padding:80px 32px;">
//       <div style="max-width:1280px;margin:0 auto;">
//         <div class="section-label center fade-up">Featured Students</div>
//         <h2 class="section-title center fade-up">Exceptional <em>Talent</em></h2>
//         <div class="divider center fade-up"></div>
//         <div class="grid-4" style="margin-top:48px;">
//           ${DATA.featuredStudents.map(s => `
//             <div class="student-card fade-up">
//               <div class="student-photo">${s.emoji}</div>
//               <div class="student-info">
//                 <div class="student-name">${s.name}</div>
//                 <div class="student-achievement">${s.achievement}</div>
//               </div>
//             </div>
//           `).join('')}
//         </div>
//       </div>
//     </section>

//     <section class="cta-section">
//       <div class="cta-inner">
//         <h2 class="section-title center fade-up">Join Our <em>Community</em></h2>
//         <div class="divider center fade-up"></div>
//         <p class="section-sub center fade-up">Your child's story could be told here. Book their first lesson today.</p>
//         <div style="margin-top:40px;" class="fade-up">
//           <button class="btn btn-primary" onclick="navigate('contact')">Book a Lesson</button>
//         </div>
//       </div>
//     </section>
//   `;
// }

// ─── EVENTS PAGE ────────────────────────────────
function renderEvents() {
  const app = document.getElementById('app');
  const upcoming = DATA.events.filter(e => e.status === 'upcoming');
  const past = DATA.events.filter(e => e.status === 'past');

  app.innerHTML = `
    <div class="page-header">
      <div class="section-label">What's Happening</div>
      <h1 class="section-title">Events & <em>Recitals</em></h1>
      <div class="divider center"></div>
      <p class="section-sub center">Stay connected with all studio performances, recitals, and special events.</p>
    </div>

    <section class="section">
      <div class="section-label fade-up">🗓️ Coming Up</div>
      <h2 class="section-title fade-up">Upcoming <em>Events</em></h2>
      <div class="divider fade-up"></div>
      <div style="margin-top:40px;">
        ${upcoming.map(ev => renderEventCard(ev)).join('')}
      </div>
    </section>

    <section style="background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);padding:80px 32px;">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="section-label fade-up">Archive</div>
        <h2 class="section-title fade-up">Past <em>Events</em></h2>
        <div class="divider fade-up"></div>
        <div style="margin-top:40px;">
          ${past.map(ev => renderEventCard(ev)).join('')}
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-inner">
        <h2 class="section-title center fade-up">Want to <em>Perform?</em></h2>
        <div class="divider center fade-up"></div>
        <p class="section-sub center fade-up">All studio students are invited to participate in recitals and events. Book a lesson to join our community.</p>
        <div style="margin-top:40px;" class="fade-up">
          <button class="btn btn-primary" onclick="navigate('contact')">Register or Book Now</button>
        </div>
      </div>
    </section>
  `;
}

function renderEventCard(ev) {
  return `
    <div class="event-card fade-up">
      <div class="event-date-block">
        <div class="event-month">${ev.month}</div>
        <div class="event-day">${ev.day}</div>
        <div class="event-year">${ev.year}</div>
      </div>
      <div class="event-body">
        <h3 class="event-title">${ev.title}</h3>
        <div class="event-meta">
          <span>🕐 ${ev.time}</span>
          <span>📍 ${ev.location}</span>
        </div>
        <p class="event-desc">${ev.description}</p>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <span class="event-status status-${ev.status}">${ev.status === 'upcoming' ? 'Upcoming' : 'Past Event'}</span>
          ${ev.status === 'upcoming' ? `<button class="btn btn-primary btn-sm" onclick="navigate('contact')">Register</button>` : ''}
        </div>
      </div>
    </div>
  `;
}

// ─── ANNOUNCEMENTS PAGE ─────────────────────────
function renderAnnouncements() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page-header">
      <div class="section-label">Stay Informed</div>
      <h1 class="section-title">Studio <em>Announcements</em></h1>
      <div class="divider center"></div>
      <p class="section-sub center">All studio news, updates, and important notices — in one place.</p>
    </div>

    <section class="section">
      <div class="section-label fade-up">📢 Pinned</div>
      <h2 class="section-title fade-up">Important <em>Notices</em></h2>
      <div class="divider fade-up"></div>

      <div style="margin-top:40px;">
        ${DATA.announcements.filter(a => a.pinned).map(a => renderAnnCard(a, true)).join('')}
      </div>

      <div style="margin-top:48px;">
        <div class="section-label fade-up">All Updates</div>
        <h3 class="section-title fade-up" style="font-size:clamp(28px,3vw,40px);">Recent <em>Posts</em></h3>
        <div class="divider fade-up"></div>
        <div style="margin-top:32px;">
          ${DATA.announcements.filter(a => !a.pinned).map(a => renderAnnCard(a, false)).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderAnnCard(a, pinned) {
  return `
    <div class="ann-card ${pinned ? 'pinned' : ''} fade-up">
      <div class="ann-icon">${a.icon}</div>
      <div class="ann-body">
        <div class="ann-head">
          <div class="ann-title">${a.title}</div>
          <div style="display:flex;align-items:center;gap:10px;flex-shrink:0;">
            ${pinned ? '<span class="pin-badge">📌 Pinned</span>' : ''}
            <span class="ann-time">${a.date}</span>
          </div>
        </div>
        <p class="ann-text">${a.description}</p>
        <span class="ann-tag">${a.tag}</span>
      </div>
    </div>
  `;
}

// ─── CONTACT PAGE ───────────────────────────────
function renderContact() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page-header">
      <div class="section-label">Get in Touch</div>
      <h1 class="section-title">Contact <em>Catherine</em></h1>
      <div class="divider center"></div>
      <p class="section-sub center">We respond within 24 hours. Let's start your vocal journey.</p>
    </div>

    <section class="section">
      <div class="contact-grid">

        <div class="fade-up">
          <div class="section-label">Reach Us</div>
          <h2 class="section-title" style="font-size:clamp(32px,4vw,48px);">Let's <em>Connect</em></h2>
          <div class="divider"></div>

          <div class="contact-item">
            <div class="contact-ico">📞</div>
            <div>
              <div class="contact-detail-label">Phone</div>
              <div class="contact-detail-val">(705) 716-5392</div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-ico">✉️</div>
            <div>
              <div class="contact-detail-label">Email</div>
              <div class="contact-detail-val">catherine@vocalstudio.ca</div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-ico">📍</div>
            <div>
              <div class="contact-detail-label">Location</div>
              <div class="contact-detail-val">Angus, Ontario, Canada</div>
            </div>
          </div>
          <div class="contact-item" style="border-bottom:none;">
            <div class="contact-ico">🕐</div>
            <div>
              <div class="contact-detail-label">Response Time</div>
              <div class="contact-detail-val">Within 24 hours</div>
            </div>
          </div>

          <div style="margin-top:32px;padding:24px;background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.2);border-radius:4px;">
            <div style="font-size:14px;font-weight:600;color:var(--gold);margin-bottom:8px;">🎁 Free Consultation</div>
            <p style="font-size:14px;color:rgba(253,252,248,0.65);line-height:1.7;">Not sure which lesson type is right for you? Book a free 15-minute phone consultation with Catherine.</p>
          </div>
        </div>

        <div class="fade-up">
          <div id="contactForm" style="background:#111;border:1px solid rgba(255,255,255,0.07);border-radius:4px;padding:40px;">
            <div class="section-label" style="margin-bottom:8px;">Book a Lesson</div>
            <h3 style="font-family:var(--font-head);font-size:28px;font-weight:700;margin-bottom:32px;">Send a <em style="color:var(--gold);">Message</em></h3>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">First Name</label>
                <input id="fName" class="form-input" type="text" placeholder="Jane"/>
              </div>
              <div class="form-group">
                <label class="form-label">Last Name</label>
                <input id="fLast" class="form-input" type="text" placeholder="Doe"/>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input id="fEmail" class="form-input" type="email" placeholder="jane@example.com"/>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input id="fPhone" class="form-input" type="tel" placeholder="(416) 555-0123"/>
            </div>
            <div class="form-group">
              <label class="form-label">Lesson Interest</label>
              <select id="fType" class="form-input" style="appearance:none;">
                <option value="">Select lesson type...</option>
                <option>Beginner Lessons</option>
                <option>Intermediate Lessons</option>
                <option>Advanced Lessons</option>
                <option>Kids Lessons (Age 6+)</option>
                <option>Free 15-min Consultation</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea id="fMsg" class="form-input" placeholder="Tell us a little about yourself or your child, your experience level, and any questions you have..."></textarea>
            </div>

            <div class="form-success" id="formSuccess">
              ✓ Thank you! Catherine will be in touch within 24 hours.
            </div>

            <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px;" onclick="submitContactForm()">
              Send Message →
            </button>
            <p style="font-size:12px;color:rgba(253,252,248,0.35);text-align:center;margin-top:16px;">We respect your privacy. Your information is never shared.</p>
          </div>
        </div>

      </div>
    </section>
  `;
}

// ─── CONTACT FORM SUBMIT ────────────────────────
async function submitContactForm() {
  const first = document.getElementById('fName')?.value?.trim();
  const last  = document.getElementById('fLast')?.value?.trim();
  const email = document.getElementById('fEmail')?.value?.trim();
  const phone = document.getElementById('fPhone')?.value?.trim();
  const type  = document.getElementById('fType')?.value;
  const msg   = document.getElementById('fMsg')?.value?.trim();

  if (!first || !email || !type) {
    alert('Please fill in your name, email, and lesson type.');
    return;
  }

  const btn = document.querySelector('#contactForm .btn-primary');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // ✅ INSERT INTO SUPABASE
  const { error } = await supabaseClient
    .from('contacts')
    .insert([{
      first_name: first,
      last_name: last,
      email: email,
      phone: phone,
      lesson_type: type,
      message: msg
    }]);

  if (error) {
    console.error(error);
    alert('❌ Failed to send message');
    btn.textContent = 'Send Message →';
    btn.disabled = false;
  } else {
    document.getElementById('formSuccess').style.display = 'block';
    btn.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  renderPage('home');

  // Keyboard nav close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Prevent default on all # links
  document.querySelectorAll('a[href="#"]').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });

  // Load announcements from Supabase
  const { data: announcements, error: annErr } = await supabaseClient
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false });

  if (!annErr && announcements?.length) {
    DATA.announcements = announcements.map(a => ({
  id: a.id,
  title: a.title,
  description: a.description,
  tag: "Update",
  date: new Date(a.created_at).toLocaleDateString(),
  pinned: false,
  icon: "📢"
}));
  }

  // Load events from Supabase
  const { data: events, error: evErr } = await supabaseClient
    .from('events')
    .select('*')
    .order('created_at', { ascending: false });

  if (!evErr && events?.length) {
    DATA.events = events.map(e => ({
  id: e.id,
  title: e.title,
  month: new Date(e.date).toLocaleString('default', { month: 'short' }).toUpperCase(),
  day: new Date(e.date).getDate(),
  year: new Date(e.date).getFullYear(),
  time: e.time || "TBD",
  location: e.location || "TBD",
  description: e.description || "",
  status: "upcoming"
}));
  }

  // Re-render with live data
  renderPage('home');
});
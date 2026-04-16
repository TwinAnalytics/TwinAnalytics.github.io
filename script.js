// ── TYPED.JS ─────────────────────────────────────────────────────────────────
new Typed('#typed', {
  strings: [
    'Data Scientist',
    'Turning Data into Decisions',
    'Sports Analyst',
  ],
  typeSpeed: 55,
  backSpeed: 30,
  backDelay: 1800,
  loop: true,
});

// ── MOBILE SIDEBAR TOGGLE ─────────────────────────────────────────────────────
const sidebar     = document.getElementById('sidebar');
const menuToggle  = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close sidebar when a nav link is tapped on mobile
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.remove('open');
    }
  });
});

// ── SCROLLSPY — active nav link ───────────────────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => observer.observe(s));

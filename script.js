/* =============================================
   MG AUTOMECÂNICA — script.js
   ============================================= */

/* --- NAVEGAÇÃO: scroll suave + navbar scrolled --- */
document.addEventListener('DOMContentLoaded', () => {

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav__link');

  /* Navbar muda estilo ao rolar */
  function handleNavScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* Toggle menu mobile */
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  /* Fechar menu ao clicar em link */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* Scroll suave para âncoras */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* --- ANIMAÇÃO FADE-IN AO APARECER (Intersection Observer) --- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        /* Atraso escalonado para elementos irmãos */
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
        const delay = siblings.indexOf(entry.target) * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --- BOTÃO FLUTUANTE WHATSAPP: aparece após scroll --- */
  const whatsappFloat = document.getElementById('whatsappFloat');

  function handleFloatVisibility() {
    if (window.scrollY > 300) {
      whatsappFloat.style.opacity = '1';
      whatsappFloat.style.transform = 'translateY(0)';
      whatsappFloat.style.pointerEvents = 'auto';
    } else {
      whatsappFloat.style.opacity = '0';
      whatsappFloat.style.transform = 'translateY(20px)';
      whatsappFloat.style.pointerEvents = 'none';
    }
  }

  /* Estado inicial */
  whatsappFloat.style.opacity = '0';
  whatsappFloat.style.transform = 'translateY(20px)';
  whatsappFloat.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  whatsappFloat.style.pointerEvents = 'none';

  window.addEventListener('scroll', handleFloatVisibility, { passive: true });
  handleFloatVisibility();

  /* --- HIGHLIGHT DO LINK DE NAVEGAÇÃO ATIVO --- */
  const sections = document.querySelectorAll('section[id]');

  function highlightActiveNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav__link[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.style.color = 'var(--gold)';
        } else {
          link.style.color = '';
        }
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNav, { passive: true });
  highlightActiveNav();

});

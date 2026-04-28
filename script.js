// ================================
// MG AUTOMECÂNICA — SCRIPT.JS
// Foco: conversão + UX + fluidez
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // NAVBAR SCROLL EFFECT
  // ================================
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


  // ================================
  // HAMBURGER MENU (MOBILE)
  // ================================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Fecha menu ao clicar em link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });


  // ================================
  // SCROLL SUAVE INTELIGENTE
  // ================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });


  // ================================
  // REVEAL ON SCROLL (ANIMAÇÃO LEVE)
  // ================================
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // inicial


  // ================================
  // WHATSAPP TRACKING (OPCIONAL FUTURO)
  // ================================
  const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

  whatsappButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Clique no WhatsApp registrado");
      // Aqui depois você pode plugar analytics (Meta Pixel / GA4)
    });
  });


  // ================================
  // OTIMIZAÇÃO MOBILE (UX)
  // ================================
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // reduz animações pesadas se quiser performance extra
    document.body.classList.add("mobile");
  }

});

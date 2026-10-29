document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Móvil
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('active');
    });
  }

  // 2. Animaciones de Revelación (Reveal on Scroll)
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.85) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Ejecutar al cargar la página

  // 3. Cambio de estilo del Header al hacer scroll
  const header = document.querySelector('[data-header]');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. Gestión del Formulario de Contacto (Simulación de envío)
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const nombre = formData.get('nombre');
      const telefono = formData.get('telefono');
      
      // Redirección a WhatsApp con mensaje predefinido
      const message = `Hola KRIPTA, mi nombre es ${nombre}. Mi teléfono es ${telefono}. Me gustaría solicitar más información sobre la gestión de casos.`;
      const whatsappUrl = `https://wa.me/573172791305?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
    });
  }
});

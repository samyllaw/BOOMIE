document.addEventListener('DOMContentLoaded', () => {
  const headline = document.querySelector('.hero__headline');
  if (headline) {
    setTimeout(() => headline.classList.add('visible'), 300);
  }

  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  const reveals = document.querySelectorAll('.service, .contact');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
});

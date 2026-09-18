// Menu mobile
var menuBtn = document.getElementById('mobile-menu-btn');
var mobileNav = document.getElementById('mobile-nav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', function () {
    var isOpen = !mobileNav.hidden;
    mobileNav.hidden = isOpen;
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.hidden = true;
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// FAQ (perguntas frequentes)
document.querySelectorAll('.faq-question').forEach(function (btn) {
  var answer = btn.nextElementSibling;
  var icon = btn.querySelector('svg');
  btn.addEventListener('click', function () {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    if (answer) answer.hidden = isOpen;
    if (icon) icon.style.transform = isOpen ? '' : 'rotate(180deg)';
  });
});

// Carrossel de depoimentos
var prevBtn = document.querySelector('[aria-label="Depoimento anterior"]');
var nextBtn = document.querySelector('[aria-label="Próximo depoimento"]');
var track = document.querySelector('div[style*="scroll-snap-type: x mandatory"]');
if (track && prevBtn && nextBtn) {
  var scrollAmount = function () {
    var card = track.querySelector(':scope > div');
    return card ? card.getBoundingClientRect().width + 24 : 360;
  };
  prevBtn.addEventListener('click', function () {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', function () {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
}

// Areas atendidas: mostrar/ocultar lista completa
var areasToggle = document.getElementById('areas-toggle');
var areasExtra = document.getElementById('areas-extra');
var areasLabel = document.getElementById('areas-toggle-label');
if (areasToggle && areasExtra) {
  areasToggle.addEventListener('click', function (e) {
    e.preventDefault();
    var isOpen = !areasExtra.hidden;
    areasExtra.hidden = isOpen;
    areasToggle.setAttribute('aria-expanded', String(!isOpen));
    if (areasLabel) areasLabel.textContent = isOpen ? 'Ver todas as áreas atendidas' : 'Ver menos';
  });
}

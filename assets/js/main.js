const whatsappNumber = '5577999741169';
const whatsappUrl = message => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = whatsappUrl(link.dataset.whatsapp);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#mobile-menu');
const closeMenu = () => { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); };
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const form = document.querySelector('#quote-form');
const error = document.querySelector('#form-error');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const categories = data.getAll('category');
  const telephone = String(data.get('phone')).replace(/\D/g, '');
  error.textContent = '';
  if (!/^(?:\d{10}|\d{11})$/.test(telephone)) {
    error.textContent = 'Informe um telefone com DDD, com 10 ou 11 dígitos.';
    form.elements.phone.focus(); return;
  }
  if (!categories.length) {
    error.textContent = 'Selecione ao menos uma categoria ou a opção de orientação.';
    form.querySelector('[name="category"]').focus(); return;
  }
  const message = [
    'Olá, equipe ParanáLEM! Vim pelo site e gostaria de um orçamento.',
    `Nome: ${String(data.get('name')).trim()}`,
    `Empresa: ${String(data.get('company')).trim()}`,
    `Telefone: ${String(data.get('phone')).trim()}`,
    `Linha: ${categories.join(', ')}`,
    data.get('quantity') ? `Quantidade: ${data.get('quantity')} peças` : 'Quantidade: a definir (pedido mínimo de 12 peças)',
    data.get('city') ? `Cidade/UF: ${String(data.get('city')).trim()}` : null,
  ].filter(Boolean).join('\n');
  window.location.assign(whatsappUrl(message));
});

// A seleção da vitrine prepara a categoria no formulário, sem enviar dados.
document.querySelectorAll('[data-line]').forEach(button => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-line]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    form.querySelectorAll('[name="category"]').forEach(input => { input.checked = input.value === button.dataset.line; });
    document.querySelector('#contato').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('h1, h2, .hero-intro, .hero-blue, .product-card, .tech-list article, .coverage-title, .faq-list details, .quote-form, .contact-copy, .footer-grid > div').forEach(element => observer.observe(element));
}

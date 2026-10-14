"use strict";
const whatsappUrl = (message) =>
  `https://wa.me/5577999741169?text=${encodeURIComponent(message)}`;
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl(link.dataset.whatsapp);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#mobile-menu");
// Without JavaScript, mobile navigation remains visible.
menu.hidden = true;
menuButton.hidden = false;
const closeMenu = (restoreFocus = false) => {
  menu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  if (restoreFocus) menuButton.focus();
};
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    closeMenu();
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.hidden) closeMenu(true);
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
const form = document.querySelector("#quote-form");
const error = document.querySelector("#form-error");
let activeErrorInput = null;
const showError = (message, input) => {
  activeErrorInput = input;
  error.textContent = message;
  input.setAttribute("aria-invalid", "true");
  const inline = document.createElement("span");
  inline.className = "input-error";
  inline.dataset.fieldError = "true";
  inline.id = `${input.id || input.name}-error`;
  inline.textContent = message;
  const host =
    input.name === "category"
      ? input.closest("fieldset")
      : input.closest("label");
  host.append(inline);
  input.setAttribute("aria-describedby", inline.id);
  input.focus();
};
const clearFieldError = (input) => {
  const inputs =
    input.name === "category"
      ? form.querySelectorAll('[name="category"]')
      : [input];
  inputs.forEach((field) => {
    const errorId = field.getAttribute("aria-describedby");
    if (errorId) document.getElementById(errorId)?.remove();
    field.removeAttribute("aria-invalid");
    field.removeAttribute("aria-describedby");
  });
  if (
    activeErrorInput === input ||
    (input.name === "category" && activeErrorInput?.name === "category")
  ) {
    error.textContent = "";
    activeErrorInput = null;
  }
};
const syncCategorySelection = () => {
  const selected = [...form.querySelectorAll('[name="category"]:checked')];
  const categories = selected.map((input) => input.value);
  document.querySelectorAll("[data-uniform]").forEach((link) => {
    const checked = categories.includes(link.dataset.uniform);
    link.classList.toggle("is-selected", checked);
    if (checked) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
  const summary = document.querySelector("#selection-summary");
  summary.textContent = categories.length
    ? `${categories.length === 1 ? "Linha escolhida" : "Linhas escolhidas"}: ${categories.join(", ")}. Você pode ajustar as opções no formulário.`
    : "";
  summary.hidden = categories.length === 0;
  if (selected.length) clearFieldError(selected[0]);
};
form.addEventListener("input", (event) => {
  if (event.target.name === "category") {
    syncCategorySelection();
    return;
  }
  if (event.target.name === "name" && !event.target.value.trim()) return;
  clearFieldError(event.target);
});
// Parse the decimal spelling exactly; floating point would round long quantities.
const positiveIntegerText = (value) => {
  const match = /^(-?)(\d*)(?:\.(\d+))?(?:e([+-]?\d+))?$/i.exec(value);
  if (!match || match[1] || !(match[2] || match[3])) return null;
  const fraction = match[3] || "";
  let coefficient = (match[2] + fraction).replace(/^0+/, "");
  if (!coefficient) return null;
  const shift = BigInt(match[4] || "0") - BigInt(fraction.length);
  if (shift < 0n) {
    const places = -shift;
    if (places >= BigInt(coefficient.length)) return null;
    const cut = coefficient.length - Number(places);
    if (!/^0+$/.test(coefficient.slice(cut))) return null;
    return coefficient.slice(0, cut);
  }
  // Large exponents stay in exact notation, avoiding an enormous expanded string.
  return shift <= 1000n
    ? coefficient + "0".repeat(Number(shift))
    : `${coefficient}e+${shift}`;
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  error.textContent = "";
  activeErrorInput = null;
  form.querySelectorAll("[data-field-error]").forEach((item) => item.remove());
  form.querySelectorAll("[aria-invalid]").forEach((input) => {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
  });
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const company = String(data.get("company") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const digits = phone.replace(/\D/g, "");
  const quantityInput = form.elements.quantity;
  const quantity = quantityInput.value.trim();
  const normalizedQuantity = quantity ? positiveIntegerText(quantity) : null;
  const city = String(data.get("city") || "").trim();
  const categories = data.getAll("category");
  if (!name) return showError("Informe seu nome.", form.elements.name);
  if (!company)
    return showError("Informe sua empresa ou evento.", form.elements.company);
  if (!/^[\d\s()+.-]+$/.test(phone) || !/^\d{10,11}$/.test(digits))
    return showError(
      "Informe um telefone com DDD, com 10 ou 11 dígitos.",
      form.elements.phone,
    );
  if (!categories.length)
    return showError(
      "Selecione ao menos uma linha ou a opção de orientação.",
      form.querySelector('[name="category"]'),
    );
  if (
    quantityInput.validity.badInput ||
    (quantity && normalizedQuantity === null)
  )
    return showError(
      "Informe uma quantidade em número inteiro positivo ou deixe o campo vazio.",
      form.elements.quantity,
    );
  const message = [
    "Olá, equipe ParanáLEM! Vim pelo site e gostaria de um orçamento.",
    `Nome: ${name}`,
    `Empresa: ${company}`,
    `Telefone: ${phone}`,
    `Linha: ${categories.join(", ")}`,
    quantity
      ? `Quantidade: ${normalizedQuantity} peças`
      : "Quantidade: a definir",
    city ? `Cidade/UF: ${city}` : null,
  ]
    .filter(Boolean)
    .join("\n");
  // The visitor reviews and sends this message in WhatsApp.
  window.location.assign(whatsappUrl(message));
});

// Enable only after the submit handler safely intercepts native submission.
form.querySelector("#quote-controls").disabled = false;
const submitButton = form.querySelector('[type="submit"]');
submitButton.disabled = false;
submitButton.hidden = false;
document.querySelector("#form-unavailable").hidden = true;

// Escolher uma linha na vitrine prepara o orçamento e mantém o link acessível.
document.querySelectorAll("[data-uniform]").forEach((link) => {
  link.addEventListener("click", () => {
    form.querySelectorAll('[name="category"]').forEach((input) => {
      if (input.value === link.dataset.uniform) input.checked = true;
    });
    syncCategorySelection();
  });
});
syncCategorySelection();
// As animações só são aplicadas a conteúdo já visível; uma falha não oculta a página.
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        element.classList.add(
          element.matches("figure, .product-visual")
            ? "enter-photo"
            : element.matches(".brand-detail, .footer-tile")
              ? "enter-side"
              : "enter-up",
        );
        observer.unobserve(element);
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(
      "h1, h2, .hero-description, .hero .button, .hero-location, .hero-mosaic figure, .product-visual, .product-content, .brand-detail, .coverage-copy, .coverage-photo, .faq-list details, .contact-copy, .quote-form, .footer-tile",
    )
    .forEach((element) => observer.observe(element));
}

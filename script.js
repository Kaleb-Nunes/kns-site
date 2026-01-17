// ========= MODAIS (um padrão só) =========
function openModalById(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.setAttribute("aria-hidden", "false");
}

function closeModal(el) {
  el.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-modal]");
  if (openBtn) {
    const id = openBtn.getAttribute("data-modal");
    openModalById(id);
    return;
  }

  const closeBtn = e.target.closest("[data-close]");
  if (closeBtn) {
    const modal = closeBtn.closest(".modal");
    if (modal) closeModal(modal);
    return;
  }

  // clicar fora do box fecha
  const modalBg = e.target.classList.contains("modal") ? e.target : null;
  if (modalBg) closeModal(modalBg);
});

// ESC fecha modal
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const opened = document.querySelector('.modal[aria-hidden="false"]');
  if (opened) closeModal(opened);
});

// ========= FORM -> WHATSAPP =========
function openWhatsAppDiag(event) {
  event.preventDefault();

  const ambiente = document.getElementById("qAmbiente")?.value || "";
  const dor = document.getElementById("qDor")?.value || "";
  const urgencia = document.getElementById("qUrgencia")?.value || "";

  const msg =
    `Olá! Quero um diagnóstico técnico.\n\n` +
    `• Ambiente: ${ambiente}\n` +
    `• Principal dor: ${dor}\n` +
    `• Urgência: ${urgencia}\n\n` +
    `Pode me orientar com os próximos passos?`;

  const phone = "5547988901616";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");

  return false;
}

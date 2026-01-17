// ========== MODAIS ==========

// NOC / SOC
function openModal() {
  document.getElementById("nocModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("nocModal").style.display = "none";
}

// Infraestrutura
function openInfraModal() {
  document.getElementById("infraModal").style.display = "flex";
}
function closeInfraModal() {
  document.getElementById("infraModal").style.display = "none";
}

// Observabilidade
function openObsModal() {
  document.getElementById("obsModal").style.display = "flex";
}
function closeObsModal() {
  document.getElementById("obsModal").style.display = "none";
}

// Consultoria
function openConsModal() {
  document.getElementById("consModal").style.display = "flex";
}
function closeConsModal() {
  document.getElementById("consModal").style.display = "none";
}

// Monitoramento de Links
function openLinksModal() {
  document.getElementById("linksModal").style.display = "flex";
}
function closeLinksModal() {
  document.getElementById("linksModal").style.display = "none";
}

// Gestão de Tráfego
function openTrafegoModal() {
  document.getElementById("trafegoModal").style.display = "flex";
}
function closeTrafegoModal() {
  document.getElementById("trafegoModal").style.display = "none";
}
const elements = document.querySelectorAll(".card, .lista li");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("reveal");
    }
  });
});

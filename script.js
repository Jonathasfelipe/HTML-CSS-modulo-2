document.addEventListener("DOMContentLoaded", () => {
  const galaxy = document.getElementById("galaxy");

  // === ESTRELAS FIXAS E PISCANTES ===
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    if (Math.random() > 0.85) star.classList.add("bright");

    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    galaxy.appendChild(star);
  }

  function createMeteor() {
  const quantidade = Math.floor(Math.random() * 2) + 3; // entre 3 e 4 meteoros

  for (let i = 0; i < quantidade; i++) {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");

    // Tamanho aleatório
    const largura = Math.floor(Math.random() * 40) + 30; // 30px a 70px
    const altura = Math.floor(Math.random() * 2) + 2; // 2px a 4px
    meteor.style.width = `${largura}px`;
    meteor.style.height = `${altura}px`;

    // Posição aleatória no topo
    const top = Math.random() * window.innerHeight * 0.4; // até 40% da altura da tela
    const left = Math.random() * window.innerWidth;
    meteor.style.top = `${top}px`;
    meteor.style.left = `${left}px`;

    // Adiciona ao DOM
    document.getElementById("galaxy").appendChild(meteor);

    // Remove depois da animação
    setTimeout(() => {
      meteor.remove();
    }, 3000);
  }
}

// Lança grupo de meteoros a cada 4 segundos
setInterval(() => {
  createMeteor();
}, 4000);

  // === COMETA HALLEY COM LOOP AUTOMÁTICO ===
  function lançarHalley() {
  const halley = document.getElementById('halley');
  halley.style.animation = 'none';
  halley.offsetHeight;
  halley.style.animation = 'cometaAnimado 14s linear forwards';
}

  function cicloCometaHalley() {
    const tempo = Math.random() * 30000 + 15000; // entre 15s e 45s
    setTimeout(() => {
      lançarHalley();
      cicloCometaHalley();
    }, tempo);
  }

  cicloCometaHalley();
});
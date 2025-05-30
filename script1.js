let transitionProgress = 0; 
let direction = 1; 

function updateColors() {
  // Incremento menor para suavizar
  transitionProgress += direction * (speed / 1000); // dividindo por 1000 para suavizar bem

  if (transitionProgress >= 1) {
    transitionProgress = 1;
    direction = -1;
    updateShape();
  } else if (transitionProgress <= 0) {
    transitionProgress = 0;
    direction = 1;
    updateShape();
  }

  mainArea.style.backgroundColor = interpColorBlackWhite(transitionProgress);
  document.body.style.backgroundColor = interpColorBlackWhite(transitionProgress);
  document.body.style.color = transitionProgress > 0.5 ? '#222' : '#eee';

  const innerFillValue = 1 - transitionProgress;
  shapeBox.style.backgroundColor = interpColorBlackWhite(innerFillValue);

  const shapeFillColor = transitionProgress > 0.5 ? '#000' : '#fff';

  const firstChild = shapeSVG.firstElementChild;
  if(firstChild) {
    firstChild.setAttribute('fill', shapeFillColor);
    firstChild.setAttribute('stroke', 'none');
  }
}

function startAnimation() {
  if(intervalId) clearInterval(intervalId);
  // Agora intervalo fixo em 15ms (~66 FPS) para suavidade máxima
  intervalId = setInterval(updateColors, 15);
}

// Quando mudar a velocidade, só altera o "speed" que é o fator de incremento, sem mexer no intervalo
speedRange.oninput = (e) => {
  speed = parseInt(e.target.value, 10);
};
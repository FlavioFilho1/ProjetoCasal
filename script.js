const button = document.getElementById('start-btn');
const sprites = document.querySelectorAll('.container img');
let currentFrame = 0;
let animationInterval;

function startAnimation() {
  // Evitar múltiplos cliques
  if (animationInterval) return;

  animationInterval = setInterval(() => {
    // Esconde todos os sprites
    sprites.forEach(sprite => sprite.style.display = 'none');

    // Mostra o sprite atual
    sprites[currentFrame].style.display = 'block';

    // Se for o último frame
    if (currentFrame === sprites.length - 1) {
      clearInterval(animationInterval); // Para animação
      animationInterval = null;

      // Redireciona após pequena pausa (opcional)
      setTimeout(() => {
        window.location.href = "Home/home.html";
      }, 600); 
    } else {
      currentFrame++; // Avança para o próximo
    }
  }, 150); // 200ms por frame
}

button.addEventListener('click', startAnimation);


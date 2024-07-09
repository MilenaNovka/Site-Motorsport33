// Joguinho do game

// Criação do objeto do carro
var carro = {
    elemento: document.getElementById('carro'), 
    velocidade: 5, // Velocidade = Pixeis por clique
    x: 10, // Definir onde o carro aparece
    y: 200 // Definir onde o carro aparece
};

// Função para mover o carro
function moverCarro(e) {
    switch(e.keyCode) {
        case 37: // Seta para a esquerda
            carro.x -= carro.velocidade; //Calculo para o carro se movimentar
            break;
        case 38: // Seta para cima
            carro.y -= carro.velocidade; //Calculo para o carro se movimentar
            break;
        case 39: // Seta para a direita
            carro.x += carro.velocidade; //Calculo para o carro se movimentar
            break;
        case 40: // Seta para baixo
            carro.y += carro.velocidade; //Calculo para o carro se movimentar
            break;
    }
    carro.elemento.style.left = carro.x + 'px';
    carro.elemento.style.top = carro.y + 'px';
}

// Adicionando o evento de pressionamento de tecla ao documento
document.addEventListener('keydown', moverCarro);

// Troca de imagem no index

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Tempo para a imagem mudar
}
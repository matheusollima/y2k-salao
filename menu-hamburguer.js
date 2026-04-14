const icon = document.getElementById("menu-hamburguer");

let aberto = false;

// Alterna icone do menu hamburguer e exibe o menu
icon.addEventListener("click", () => {
  aberto = !aberto;
  icon.src = aberto ? "icons/icons8-fechar-janela-50.png" : "icons/icons8-menu-50.png";
  let header = document.getElementsByClassName("header")[0];
  let alturaHeader = header.offsetHeight;
  let menuElementos = document.getElementById("lista-menu-hamburguer");
  menuElementos.style.top = alturaHeader + "px";
  menuElementos.classList.toggle("ativo");
});

function abrirMenu() {}

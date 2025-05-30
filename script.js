setTimeout( ()=>{
    let subtitulo = document.getElementById('subtitulo-home');
    subtitulo.style.opacity = 1;
}, 2000 );



let janela_corte_cabelo = document.getElementById('janela-corte-cabelo')
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal-corte-cabelo");
let fechar = document.querySelector(".fechar");
let body = document.querySelector("body");

janela_corte_cabelo.addEventListener("click", ()=>{
    modal.classList.add("expandir");
    overlay.classList.add("active");
    mostrarFeminino();
    document.body.style.overflowY = "hidden";
    if(overlay.classList.contains("active")){
        overlay.addEventListener("click", () => {
        modal.classList.remove("expandir");
        overlay.classList.remove("active");
        document.body.style.overflowY = "visible";
    
});
    }
});


fechar.addEventListener("click", () => {
    modal.classList.remove("expandir");
    overlay.classList.remove("active");
    document.body.style.overflowY = "visible";
    
});

// ........................... TELA DE SERVIÇOS DE CORTE DE CABELO ........................

const tituloMasculino = "Cortes masculinos";
const tituloFeminino = "Cortes femininos";
const cortesMasculinos = [{nome: "Fade", preco: "R$ 30"}, {nome:"Moicano", preco: "R$ 30"}, {nome: "Degradê", preco: "R$ 30"},{nome: "Razor Part", preco: "R$ 30"}, {nome: "Corte militar", preco : "R$ 30"}];
const cortesFemininos = [{nome: "Chanel", preco: "R$ 30"}, {nome: "Long Bob", preco: "R$ 30"}, {nome: "Pixie", preco: "R$ 30"}, {nome: "Corte em camadas", preco: "R$ 30"}, {nome: "Franja cortininha", preco : "R$ 30"}];
const barra_titulo = document.querySelector(".barra-titulo"); 
const botaoMasculino = document.getElementById('cortesMasculinos');
const botaoFeminino = document.getElementById('cortesFemininos');
function mostrarMasculino(){
 
 botaoMasculino.style.color = "#DA70D6 ";
 botaoFeminino.style.color =    "#00f0ff";
let cortes = document.querySelector(".cortes");
barra_titulo.innerHTML = `<p>${tituloMasculino}</p>`;
 cortes.innerHTML = cortesMasculinos.map(corte=> 
    `
     <div class = "corte" > 
     <p>${corte.nome}</p>
     <p>${corte.preco}</p>
     </div>
     `).join("");

}
function mostrarFeminino(){

 botaoFeminino.style.color = "#DA70D6 ";
  botaoMasculino.style.color = "#00f0ff";
let cortes = document.querySelector(".cortes");
barra_titulo.innerHTML = `<p>${tituloFeminino}</p>`;
  cortes.innerHTML = cortesFemininos.map(corte=> 
    `<div class = "corte" >
     <p>${corte.nome}</p>
     <p>${corte.preco}</p>
     </div>
    `).join("");

}
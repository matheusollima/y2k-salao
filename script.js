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
 let cortes = document.querySelector(".cortes");
 cortes.innerHTML = '';
 botaoMasculino.style.color = "#DA70D6 ";
 botaoFeminino.style.color =    "#00f0ff";
 
 barra_titulo.innerHTML = `<p>${tituloMasculino}</p>`;
 let total = cortesMasculinos.length;
 console.log(total);
 for(i = 0 ; i <total; i++){
   if(i % 2 == 0) {
    const div = document.createElement('div')
    div.classList.add('div-cor01');
    const pNome = document.createElement('p');
    const pPreco = document.createElement('p');
    pNome.textContent = cortesMasculinos[i].nome;
    pPreco.textContent = cortesMasculinos[i].preco;
    div.appendChild(pNome);
    div.appendChild(pPreco);
    cortes.appendChild(div);

   } else {
    const div = document.createElement('div')
    div.classList.add('div-cor02');
    const pNome = document.createElement('p');
    const pPreco = document.createElement('p');
    pNome.textContent = cortesMasculinos[i].nome;
    pPreco.textContent = cortesMasculinos[i].preco;
    div.appendChild(pNome);
    div.appendChild(pPreco);
    cortes.appendChild(div);
   }
 }

}


function mostrarFeminino(){
let cortes = document.querySelector(".cortes");
cortes.innerHTML = '';
botaoFeminino.style.color = "#DA70D6 ";
botaoMasculino.style.color = "#00f0ff";
barra_titulo.innerHTML = `<p>${tituloFeminino}</p>`;
 let total = cortesFemininos.length;
 console.log(total);
 for(i = 0 ; i <total; i++){
   if(i % 2 == 0) {
    const p = document.createElement('p');
    p.classList.add('p-cor01');
    p.textContent = cortesFemininos[i].nome;
    cortes.appendChild(p);
   } else {
    const p = document.createElement('p');
    p.classList.add('p-cor02');
    p.textContent = cortesFemininos[i].nome;
    cortes.appendChild(p);
   }
 }

}


// scroll phone screen

let scrollScreen = document.getElementById('phone-screen');
scrollScreen.scrollTop = 10000;
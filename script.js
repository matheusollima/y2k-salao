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

const cortesMasculinos = ["Fade", "Moicano", "Degradê", "Razor Part", "Corte militar"];
const cortesFemininos = ["Chanel", "Long Bob", "Pixie", "Corte em camadas", "Franja cortininha"];
function mostrarMasculino(){
let cortes = document.querySelector(".cortes");
 cortes.innerHTML = cortesMasculinos.map(p=> `<p>${p}</p>`).join("");

}
function mostrarFeminino(){
let cortes = document.querySelector(".cortes");
 cortes.innerHTML = cortesFemininos.map(p=> `<p>${p}</p>`).join("");

}
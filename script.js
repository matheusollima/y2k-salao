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



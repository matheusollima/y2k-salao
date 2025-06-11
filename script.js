setTimeout(() => {
  let subtitulo = document.getElementById("subtitulo-home");
  subtitulo.style.opacity = 1;
}, 2000);

// scroll phone screen
let scrollScreen = document.getElementById("phone-screen");
scrollScreen.scrollTop = 10000;

// ......................... JANELA MODAL - CORTES DE CABELO ----------

let janelas_servico = document.querySelectorAll(".janela-servico");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("janela-modal");
let fechar = document.querySelector(".fechar");
let body = document.querySelector("body");
let servicos_container = document.querySelector(".servicos-container");
let barra_titulo = document.querySelector(".barra-titulo");
let titulo_servico = document.getElementById("titulo-servico");
let img_servico = document.getElementById('img01');
let tituloMasculino;
let tituloFeminino;
let servicosMasculinos;
let servicosFemininos;

// Adicionar o evento de abrir a janela modal aos botões de serviços
janelas_servico.forEach((botao) => {
  botao.addEventListener("click", (evento) => {
    // Abrir a janela modal
    modal.classList.add("expandir");
    overlay.classList.add("active");
    document.body.style.overflowY = "hidden";

    // Evento clique overlay - para fechar a janela modal ao clicar no overlay
    if (overlay.classList.contains("active")) {
      overlay.addEventListener("click", () => {
        modal.classList.remove("expandir");
        overlay.classList.remove("active");
        servicos_container.innerHTML = "";
        barra_titulo.innerHTML = "";
        tituloMasculino = "";
        tituloFeminino = "";
        servicosMasculinos = "";
        servicosFemininos = "";
        document.body.style.overflowY = "visible";
      });
    }

    // identificar o botão clicado
    const botaoClicado = evento.currentTarget;
    const data_id_botao = botaoClicado.getAttribute("data-id");
    console.log("Botão clicado", data_id_botao);

    switch (data_id_botao) {
      case "corte-cabelo":
        tituloMasculino = "Cortes Masculinos";
        tituloFeminino = "Cortes Femininos";
        img_servico.src = "./imgs/imagens modal/corte-cabelo-modal.jpg";
        titulo_servico.innerText = "Cortes de cabelo ";
        servicosMasculinos = [
          { nome: "Fade", preco: "R$ 30" },
          { nome: "Moicano", preco: "R$ 30" },
          { nome: "Degradê", preco: "R$ 30" },
          { nome: "Razor Part", preco: "R$ 30" },
          { nome: "Corte militar", preco: "R$ 30" },
        ];
        servicosFemininos = [
          { nome: "Chanel", preco: "R$ 30" },
          { nome: "Long Bob", preco: "R$ 30" },
          { nome: "Pixie", preco: "R$ 30" },
          { nome: "Corte em camadas", preco: "R$ 30" },
          { nome: "Franja cortininha", preco: "R$ 30" },
        ];
        mostrarFeminino();

        break;

      case "coloracao":
        tituloFeminino = "Coloração - feminino";
        tituloMasculino = "Coloração - masculino";
        img_servico.src = "./imgs/imagens modal/coloracao-modal.jpg";
        titulo_servico.innerText = "Coloração";
        servicosFemininos = [
          { nome: "Coloração Global", preco: "R$ 180,00" },
          { nome: "Mechas", preco: "R$ 280,00" },
          { nome: "Luzes", preco: "R$ 250,00" },
          { nome: "Balayage", preco: "R$ 320,00" },
          { nome: "Ombré Hair", preco: "R$ 300,00" },
          { nome: "Sombré Hair", preco: "R$ 290,00" },
          { nome: "Babylights", preco: "R$ 350,00" },
          { nome: "Morena Iluminada", preco: "R$ 280,00" },
          { nome: "Cobertura de Brancos", preco: "R$ 150,00" },
          { nome: "Tonalização", preco: "R$ 100,00" },
          { nome: "Descoloração Total", preco: "R$ 230,00" },
          { nome: "Fantasia (Coloração Criativa)", preco: "R$ 350,00" },
        ];

        servicosMasculinos = [
          { nome: "Coloração Global", preco: "R$ 100,00" },
          { nome: "Reflexos", preco: "R$ 120,00" },
          { nome: "Luzes Masculinas", preco: "R$ 130,00" },
          { nome: "Camuflagem de Brancos", preco: "R$ 90,00" },
          { nome: "Platinado Masculino", preco: "R$ 160,00" },
          { nome: "Mechas Estilo “Surfer”", preco: "R$ 140,00" },
          { nome: "Coloração Fantasia", preco: "R$ 170,00" },
          { nome: "Tonalização", preco: "R$ 80,00" },
          { nome: "Descoloração Total", preco: "R$ 150,00" },
          { nome: "Raiz ou Manutenção", preco: "R$ 70,00" },
        ];
        mostrarFeminino();
        break;
      case "tratamentos-capilares":
        tituloFeminino = "Tratamentos - feminino";
        tituloMasculino = "Tratamentos - masculino";
        img_servico.src = "./imgs/imagens modal/tratamento-capilar-modal.jpg";
        titulo_servico.innerText = "Tratamentos capilares";
        servicosFemininos = [
          { nome: "Hidratação Profunda", preco: "R$ 90,00" },
          { nome: "Reconstrução Capilar", preco: "R$ 120,00" },
          { nome: "Nutrição Capilar", preco: "R$ 100,00" },
          { nome: "Cauterização", preco: "R$ 150,00" },
          { nome: "Botox Capilar", preco: "R$ 200,00" },
          { nome: "Selagem Térmica", preco: "R$ 220,00" },
          { nome: "Alisamento / Escova Progressiva", preco: "R$ 300,00" },
          { nome: "Plástica dos Fios", preco: "R$ 280,00" },
          { nome: "Terapia Capilar", preco: "R$ 130,00" },
          { nome: "Cronograma Capilar", preco: "R$ 350,00" }
        ];

        servicosMasculinos = [
          { nome: "Terapia para Queda de Cabelo", preco: "R$ 120,00" },
          { nome: "Fortalecimento Capilar", preco: "R$ 100,00" },
          { nome: "Hidratação Express", preco: "R$ 70,00" },
          { nome: "Controle de Oleosidade", preco: "R$ 80,00" },
          { nome: "Tratamento Anti-Caspa", preco: "R$ 90,00" },
          { nome: "Estimulação do Crescimento", preco: "R$ 150,00" },
          { nome: "Relaxamento Capilar", preco: "R$ 130,00" },
          { nome: "Corte Terapêutico", preco: "R$ 60,00" },
          { nome: "Peeling Capilar", preco: "R$ 100,00" },
          { nome: "Barba e Cabelo - Hidratação Conjunta", preco: "R$ 110,00" }
        ];
        mostrarFeminino();
        break;

      case "alisamentos":
        tituloFeminino = "Tratamentos - feminino";
        tituloMasculino = "Tratamentos - masculino";
        img_servico.src = "./imgs/imagens modal/alisamento-modal.jpg";
        titulo_servico.innerText = "Alisamentos e reduções de volume";
        servicosFemininos = [
          { nome: "Escova Progressiva", preco: "R$ 300,00" },
          { nome: "Botox Capilar", preco: "R$ 200,00" },
          { nome: "Selagem Térmica", preco: "R$ 220,00" },
          { nome: "Plástica dos Fios", preco: "R$ 280,00" },
          { nome: "Alisamento Definitivo", preco: "R$ 400,00" },
          { nome: "Relaxamento Capilar Feminino", preco: "R$ 180,00" },
          { nome: "Escova de Ácido Hialurônico", preco: "R$ 250,00" },
          { nome: "Escova de Carbocisteína", preco: "R$ 240,00" },
          { nome: "Nanoplastia", preco: "R$ 350,00" },
          { nome: "Taninoplastia", preco: "R$ 320,00" }
        ];
        servicosMasculinos = [
          { nome: "Relaxamento Capilar Masculino", preco: "R$ 130,00" },
          { nome: "Botox Capilar", preco: "R$ 150,00" },
          { nome: "Selagem Térmica", preco: "R$ 160,00" },
          { nome: "Plástica Capilar", preco: "R$ 180,00" },
          { nome: "Alisamento com Pomada Térmica", preco: "R$ 90,00" },
          { nome: "Escova Progressiva Masculina", preco: "R$ 200,00" },
          { nome: "Defrisagem", preco: "R$ 120,00" },
          { nome: "Redução de Volume com Queratina", preco: "R$ 140,00" },
          { nome: "Nanoplastia", preco: "R$ 250,00" },
          { nome: "Alisamento Temporário", preco: "R$ 100,00" }
        ];
        mostrarFeminino();
        break;
    }
  });
});

// Evento clique para fechar a janela modal pelo botão X
fechar.addEventListener("click", () => {
  modal.classList.remove("expandir");
  overlay.classList.remove("active");
  barra_titulo.innerHTML = "";
  servicos_container.innerHTML = "";
  tituloMasculino = "";
  tituloFeminino = "";
  document.body.style.overflowY = "visible";
});

// ........................... TELA DE SERVIÇOS - PHONE SCREEN ........................

const botaoMasculino = document.getElementById("cortesMasculinos");
const botaoFeminino = document.getElementById("cortesFemininos");

function listar_servicos(lista_servicos, servicos_container) {
  const total = lista_servicos.length;
  for (i = 0; i < total; i++) {
    if (i % 2 == 0) {
      const div = document.createElement("div");
      div.classList.add("div-cor01");
      const pNome = document.createElement("p");
      const pPreco = document.createElement("p");
      pNome.textContent = lista_servicos[i].nome;
      pPreco.textContent = lista_servicos[i].preco;
      div.appendChild(pNome);
      div.appendChild(pPreco);
      servicos_container.appendChild(div);
    } else {
      const div = document.createElement("div");
      div.classList.add("div-cor02");
      const pNome = document.createElement("p");
      const pPreco = document.createElement("p");
      pNome.textContent = lista_servicos[i].nome;
      pPreco.textContent = lista_servicos[i].preco;
      div.appendChild(pNome);
      div.appendChild(pPreco);
      servicos_container.appendChild(div);
    }
  }

  // Definir o tamanho dos elementos na tela
  // const phone_screen = servicos_container;
  // const estilo = window.getComputedStyle(phone_screen);
  // const phone_screen_altura = estilo.height;
  // console.log("altura da phone screen", phone_screen_altura);
  // document.querySelectorAll(".div-cor01").forEach((el) => {
  //   el.style.height = `calc(${phone_screen_altura}/${total})`;
  // });
  // document.querySelectorAll(".div-cor02").forEach((el) => {
  //   el.style.height = `calc(${phone_screen_altura}/${total})`;
  // });


  
}

function mostrarMasculino() {
  servicos_container.innerHTML = "";
  botaoMasculino.style.color = "#DA70D6 ";
  botaoFeminino.style.color = "#00f0ff";
  barra_titulo.innerHTML = `<p>${tituloMasculino}</p>`;
  listar_servicos(servicosMasculinos, servicos_container);
}

function mostrarFeminino() {
  servicos_container.innerHTML = "";
  botaoFeminino.style.color = "#DA70D6 ";
  botaoMasculino.style.color = "#00f0ff";
  barra_titulo.innerHTML = `<p>${tituloFeminino}</p>`;
  listar_servicos(servicosFemininos, servicos_container);
}



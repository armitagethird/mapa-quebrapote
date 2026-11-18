const mapa = document.getElementById("mapa");
const titulo = document.getElementById("titulo-mapa");
const lista = document.getElementById("lugares");
const filtros = document.getElementById("filtros");

// Mostra um ponto no Google Maps embutido (não precisa de chave de API)
function mostrarNoMapa(lat, lng, zoom, nome) {
  mapa.src =
    "https://maps.google.com/maps?q=" +
    lat + "," + lng +
    "&z=" + zoom + "&output=embed";
  titulo.textContent = nome;
}

function linkComoChegar(lat, lng) {
  return "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + lng;
}

mostrarNoMapa(CENTRO_DO_MAPA.lat, CENTRO_DO_MAPA.lng, CENTRO_DO_MAPA.zoom, "Bairro Quebra-Pote");

// Cria um item na lista para cada lugar
const itens = PONTOS.map((ponto) => {
  const item = document.createElement("li");
  item.tabIndex = 0;
  item.innerHTML = `
    <span class="tipo">${ponto.tipo}</span>
    <div class="nome">${ponto.nome}</div>
    ${ponto.endereco ? `<p class="detalhe">📍 ${ponto.endereco}</p>` : ""}
    ${ponto.horario ? `<p class="detalhe">🕒 ${ponto.horario}</p>` : ""}
    ${ponto.telefone ? `<p class="detalhe">📞 ${ponto.telefone}</p>` : ""}
    ${ponto.servicos ? `<p class="detalhe">${ponto.servicos}</p>` : ""}
    <div class="acoes">
      <button type="button" class="ver">Ver no mapa</button>
      <a class="chegar" href="${linkComoChegar(ponto.lat, ponto.lng)}" target="_blank" rel="noopener">Como chegar</a>
    </div>
  `;

  const abrir = () => {
    mostrarNoMapa(ponto.lat, ponto.lng, 18, ponto.nome);
    lista.querySelectorAll("li").forEach((li) => li.classList.remove("selecionado"));
    item.classList.add("selecionado");
    mapa.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  item.querySelector(".ver").addEventListener("click", abrir);
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") abrir();
  });

  lista.appendChild(item);
  return { ponto, item };
});

// Botões de filtro por tipo
const tipos = ["Todos", ...new Set(PONTOS.map((p) => p.tipo))];

tipos.forEach((tipo) => {
  const botao = document.createElement("button");
  botao.type = "button";
  botao.textContent = tipo;
  if (tipo === "Todos") botao.classList.add("ativo");

  botao.addEventListener("click", () => {
    filtros.querySelectorAll("button").forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    itens.forEach(({ ponto, item }) => {
      item.style.display = tipo === "Todos" || ponto.tipo === tipo ? "" : "none";
    });
  });

  filtros.appendChild(botao);
});

// Compartilhar: WhatsApp e QR code apontam para o endereço desta página
const endereco = window.location.href;
document.getElementById("whatsapp").href =
  "https://wa.me/?text=" +
  encodeURIComponent("Mapa dos serviços do Quebra-Pote: " + endereco);
document.getElementById("qrcode").src =
  "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
  encodeURIComponent(endereco);

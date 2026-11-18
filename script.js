// Monta o mapa
const mapa = L.map("mapa").setView(CENTRO_DO_MAPA, 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; colaboradores do OpenStreetMap"
}).addTo(mapa);

const lista = document.getElementById("lugares");
const filtros = document.getElementById("filtros");
const marcadores = [];

function textoPopup(ponto) {
  let html = `<strong>${ponto.nome}</strong><br>`;
  html += `<em>${ponto.tipo}</em><br>`;
  if (ponto.endereco) html += `📍 ${ponto.endereco}<br>`;
  if (ponto.horario) html += `🕒 ${ponto.horario}<br>`;
  if (ponto.servicos) html += `${ponto.servicos}<br>`;
  html += `<a href="https://www.google.com/maps/dir/?api=1&destination=${ponto.lat},${ponto.lng}" target="_blank" rel="noopener">Como chegar</a>`;
  if (ponto.aproximado) html += `<br><small>Localização aproximada</small>`;
  return html;
}

// Cria um marcador e um item de lista para cada lugar
PONTOS.forEach((ponto) => {
  const marcador = L.marker([ponto.lat, ponto.lng])
    .addTo(mapa)
    .bindPopup(textoPopup(ponto));

  const item = document.createElement("li");
  item.tabIndex = 0;
  item.dataset.tipo = ponto.tipo;
  item.innerHTML = `
    <span class="tipo">${ponto.tipo}</span>
    <div class="nome">${ponto.nome}</div>
    ${ponto.endereco ? `<p class="detalhe">📍 ${ponto.endereco}</p>` : ""}
    ${ponto.horario ? `<p class="detalhe">🕒 ${ponto.horario}</p>` : ""}
    ${ponto.servicos ? `<p class="detalhe">${ponto.servicos}</p>` : ""}
    ${ponto.aproximado ? `<p class="aviso">Localização aproximada</p>` : ""}
  `;

  const abrir = () => {
    mapa.flyTo([ponto.lat, ponto.lng], 17);
    marcador.openPopup();
    document.getElementById("mapa").scrollIntoView({ behavior: "smooth" });
  };
  item.addEventListener("click", abrir);
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") abrir();
  });

  lista.appendChild(item);
  marcadores.push({ ponto, marcador, item });
});

// Ajusta o zoom para mostrar todos os lugares
if (PONTOS.length > 1) {
  const grupo = L.featureGroup(marcadores.map((m) => m.marcador));
  mapa.fitBounds(grupo.getBounds().pad(0.3));
}

// Botões de filtro por tipo
const tipos = ["Todos", ...new Set(PONTOS.map((p) => p.tipo))];

tipos.forEach((tipo) => {
  const botao = document.createElement("button");
  botao.textContent = tipo;
  if (tipo === "Todos") botao.classList.add("ativo");

  botao.addEventListener("click", () => {
    filtros.querySelectorAll("button").forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    marcadores.forEach(({ ponto, marcador, item }) => {
      const mostrar = tipo === "Todos" || ponto.tipo === tipo;
      item.style.display = mostrar ? "" : "none";
      if (mostrar) marcador.addTo(mapa);
      else mapa.removeLayer(marcador);
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

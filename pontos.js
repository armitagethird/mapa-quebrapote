// LUGARES DO MAPA
// Para adicionar ou corrigir um lugar, edite esta lista.
//
// Como pegar as coordenadas certas:
// 1. Abra o Google Maps e ache o lugar.
// 2. Clique com o botão direito em cima dele (no celular, segure o dedo).
// 3. Clique nos números que aparecem (ex.: -2.6833, -44.2167). Eles são copiados.
// 4. Cole em lat e lng abaixo e mude "aproximado" para false.
//
// ATENÇÃO: as coordenadas abaixo são APROXIMADAS. Confira cada uma antes de publicar.

const CENTRO_DO_MAPA = [-2.6833, -44.2167];

const PONTOS = [
  {
    nome: "Escola Casa Familiar Rural",
    tipo: "Escola",
    endereco: "Estrada do Quebra-Pote, 1000",
    horario: "Segunda a sexta (confirmar horário)",
    servicos: "Escola municipal com formação voltada para a zona rural",
    lat: -2.6800,
    lng: -44.2150,
    aproximado: true
  },
  {
    nome: "Posto de Saúde do Quebra-Pote",
    tipo: "Saúde",
    endereco: "Confirmar endereço",
    horario: "Segunda a sexta, 7h às 17h (confirmar)",
    servicos: "Atendimento básico de saúde (confirmar serviços: consultas, vacinação etc.)",
    lat: -2.6850,
    lng: -44.2180,
    aproximado: true
  }
];

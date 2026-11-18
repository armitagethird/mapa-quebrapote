// LUGARES DO MAPA
// Para adicionar um lugar, copie um bloco { ... } e preencha.
//
// lat e lng são as coordenadas do lugar. Para pegar:
// 1. Abra o lugar no Google Maps.
// 2. Clique com o botão direito em cima do pino (no celular, segure o dedo).
// 3. Clique nos números que aparecem (ex.: -2.6923, -44.2156). Eles são copiados.
// 4. O primeiro número é lat, o segundo é lng.

const CENTRO_DO_MAPA = { lat: -2.6975, lng: -44.2240, zoom: 15 };

const PONTOS = [
  {
    nome: "Centro de Saúde Quebra Pote",
    tipo: "Saúde",
    endereco: "Praça do Cemitério, s/n – Quebra Pote",
    horario: "Segunda a sexta, 7h às 18h · Sábado, 7h às 13h",
    telefone: "",
    servicos: "Consultas, pré-natal, enfermagem e preventivo, teleconsultas com especialistas, coleta de exames, ultrassom, odontologia, vacinação, curativos e farmácia básica",
    lat: -2.6923504,
    lng: -44.2156105
  },
  {
    nome: "UEB Prof. Rosilda Cordeiro",
    tipo: "Escola",
    endereco: "Rua do Passeio, 100 – Quebra Pote",
    horario: "",
    telefone: "",
    servicos: "Escola municipal de ensino fundamental, com quadra coberta e entrada acessível",
    lat: -2.696444,
    lng: -44.2178212
  },
  {
    nome: "UEB Meus Amiguinhos",
    tipo: "Escola",
    endereco: "Praça da Igreja, 100 – Quebra Pote",
    horario: "",
    telefone: "(98) 98179-3467 / (98) 3241-2104",
    servicos: "Escola municipal",
    lat: -2.698047,
    lng: -44.22342
  },
  {
    nome: "Escola Casa Familiar Rural (CFR Quebra-Pote)",
    tipo: "Escola",
    endereco: "Estrada do Quebra-Pote, 1000 – Vila Maranhão",
    horario: "",
    telefone: "",
    servicos: "Ensino com pedagogia da alternância, área de plantação para atividades práticas e quadra poliesportiva",
    lat: -2.7036459,
    lng: -44.2397109
  }
];

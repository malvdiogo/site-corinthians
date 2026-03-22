/* ===========================================================
   SCRIPT.JS - Site Sport Club Corinthians Paulista
   Renderiza jogadores dinamicamente, modal com biografia,
   escalacao interativa com campo CSS.
   =========================================================== */

/* -------------------------------------------------------
   ARRAY DE JOGADORES
   Para adicionar mais jogadores, basta incluir um novo objeto
   no array abaixo seguindo a mesma estrutura.
   ------------------------------------------------------- */
const players = [
  // === GOLEIROS ===
  {
    id: 1, number: 1, name: "Hugo Souza", position: "Goleiro", group: "GOL",
    photo: "jogadores/hugosouza.png", // Deixe vazio para usar placeholder, ou coloque URL da imagem
    age: 27, height: "1.99m", nationality: "Brasileiro",
    youthClub: "Flamengo",
    bio: "Goleiro titular do Corinthians, conhecido por suas defesas decisivas e lideranca dentro de campo. Revelado pelo Flamengo, chegou ao Timao e rapidamente se tornou idolo da torcida.",
    isNewSigning: false
  },
  {
    id: 2, number: 40, name: "Felipe longo", position: "Goleiro", group: "GOL",
    photo: "jogadores/felipelongo.png",
    age: 21, height: "1.89m", nationality: "Brasileiro",
    youthClub: "Corinthians",
    bio: "Goleiro revelado nas categorias de base do Corinthians. Reserva confiavel e preparado para assumir quando necessario.",
    isNewSigning: false
  },
  {
    id: 3, number: 51, name: "kaue", position: "Goleiro", group: "GOL",
    photo: "jogadores/kaue.png",
    age: 22, height: "1.90m", nationality: "Brasileiro",
    youthClub: "Corinthians",
    bio: "Goleiro revelado nas categorias de base do Corinthians. Reserva confiavel e preparado para assumir quando necessario.",
    isNewSigning: false
  },

  // === DEFENSORES ===
  {
    id: 4, number: 2, name: "Matheuzinho", position: "Lateral Direito", group: "DEF",
    photo: "jogadores/matheuzinho.png",
    age: 25, height: "1.71m", nationality: "Brasileiro",
    youthClub: "Flamengo",
    bio: "Lateral ofensivo com boa velocidade e cruzamento preciso. Destaca-se pela entrega tatica e capacidade de apoio ao ataque.",
    isNewSigning: false
  },
  {
    id: 5, number: 21, name: "matheus bidu", position: "lateral esquerdo", group: "DEF",
    photo: "jogadores/bidu.png",
    age: 26, height: "1.72m", nationality: "Brasileiro",
    youthClub: "guarani",
    bio: "Lateral ofensivo com boa velocidade e cruzamento preciso.",
    isNewSigning: false
  },
  {
    id: 6, number: 3, name: "Gabriel Paulista", position: "Zagueiro", group: "DEF",
    photo: "jogadores/gabrielpaulista.png",
    age: 35, height: "1.87m", nationality: "Brasileiro",
    youthClub: "Vitoria",
    bio: "Zagueiro experiente com passagem por grandes clubes europeus como Arsenal e Valencia. Traz lideranca e solidez defensiva ao elenco corintiano.",
    isNewSigning: false
  },
  {
    id: 7, number: 5, name: "Andre Ramalho", position: "Zagueiro", group: "DEF",
    photo: "jogadores/andreramalho.png",
    age: 32, height: "1.85m", nationality: "Brasileiro",
    youthClub: "Sao Paulo",
    bio: "Zagueiro com vasta experiencia internacional, tendo atuado no futebol holandes e alemao. Forte no jogo aereo e na saida de bola.",
    isNewSigning: false
  },
  {
    id: 8, number: 13, name: "gustavo henrique", position: "Zagueiro", group: "DEF",
    photo: "jogadores/gustavohenrique.png",
    age: 32, height: "1.95m", nationality: "Brasileiro",
    youthClub: "Tokushima Vortis",
    bio: "Zagueiro alto e forte no jogo aereo. Destaca-se pela marcacao firme e presenca nas jogadas de bola parada.",
    isNewSigning: false
  },
  {
    id: 9, number: 46, name: "Hugo", position: "Lateral Esquerdo", group: "DEF",
    photo: "jogadores/hugo.png",
    age: 28, height: "1.79m", nationality: "Brasileiro",
    youthClub: "CRB",
    bio: "Lateral esquerdo com boa tecnica e capacidade defensiva. Agrega ao sistema tatico com sua versatilidade.",
    isNewSigning: false
  },
  {
    id: 10, number: 26, name: "fabrizio angileri", position: "Lateral Esquerdo", group: "DEF",
    photo: "jogadores/angileri.png",
    age: 32, height: "1.85m", nationality: "argentina",
    youthClub: "godoy cruz",
    bio: "atua com forte apoio ofensivo e itensidade pelos lados do campo",
    isNewSigning: false
  },
  {
    id: 11, number: 4, name: "joão pedro tchoca", position: "zagueiro", group: "DEF",
    photo: "jogadores/tchoca.png",
    age: 22, height: "1.92m", nationality: "brasileiro",
    youthClub: "corinthians",
    bio: "conhecido pela versatilidade e boa saida de bola ",
    isNewSigning: false
  },
  {
    id: 12, number: 20, name: "Pedro Milans", position: "lateral direito", group: "DEF",
    photo: "jogadores/pedromilans.png",
    age: 23, height: "1.71m", nationality: "Uruguaio",
    youthClub: "penarol",
    bio: "lateral uruguaio com bom posicionamento e finalizacao. Jovem promessa que chega para disputar posicao na ala.",
    isNewSigning: false
  },

  // === MEIO-CAMPISTAS ===
  {
    id: 13, number: 14, name: "raniele", position: "Volante", group: "MEI",
    photo: "jogadores/raniele.png",
    age: 29, height: "1.84m", nationality: "brasileiro",
    youthClub: "taubaté",
    bio: "Volante com forte marcacao e capacidade de recuperacao de bola. Importante peca no sistema defensivo do meio-campo.",
    isNewSigning: false
  },
  {
    id: 14, number: 35, name: "Charles", position: "Volante", group: "MEI",
    photo: "jogadores/charles.png",
    age: 29, height: "1.87m", nationality: "Brasileiro",
    youthClub: "Internacional",
    bio: "Volante tecnico e combativo. Responsavel pela transicao defesa-ataque com passes precisos e boa visao de jogo.",
    isNewSigning: false
  },
  {
    id: 15, number: 8, name: "Rodrigo Garro", position: "Meia", group: "MEI",
    photo: "jogadores/garro.png",
    age: 28, height: "1.74m", nationality: "Argentino",
    youthClub: "Instituto Cordoba",
    bio: "Meia armador habilidoso com excelente passe longo e chute de fora da area. Cerebro criativo do time corintiano.",
    isNewSigning: false
  },
  {
    id: 16, number: 23, name: "Matheus Pereira", position: "Meia", group: "MEI",
    photo: "jogadores/matheus pereira.png",
    age: 28, height: "1.81m", nationality: "Brasileiro",
    youthClub: "corinthians",
    bio: "Meia habilidoso com passagem pelo barcelona. Conhecido pela sua visao de jogo e capacidade de criar jogadas decisivas.",
    isNewSigning: false
  },
  {
    id: 17, number: 77, name: "Jesse Lingard", position: "Meia Atacante", group: "MEI",
    photo: "jogadores/lingard.png",
    age: 33, height: "1.74m", nationality: "Ingles",
    youthClub: "Manchester United",
    bio: "Meia-atacante ingles revelado pelo Manchester United, com passagens pelo West Ham e Nottingham Forest. Traz experiencia da Premier League e versatilidade ao elenco.",
    isNewSigning: true
  },
  {
    id: 18, number: 52, name: "Zakaria Labyad", position: "Meia", group: "MEI",
    photo: "jogadores/zakarialabyad.png",
    age: 33, height: "1.73m", nationality: "Marroquino",
    youthClub: "PSV Eindhoven",
    bio: "Meia marroquino com excelente tecnica, revelado pelo PSV e com passagem pelo Ajax. Jogador criativo que pode atuar em diversas posicoes do meio-campo ofensivo.",
    isNewSigning: false
  },
  {
    id: 19, number: 49, name: "Andre luiz", position: "volate", group: "MEI",
    photo: "jogadores/andre.png",
    age: 19, height: "1.81m", nationality: "Brasileiro",
    youthClub: "corinthians",
    bio: "cria do terrao que se destaca pela forca fisica e presenca ofensiva",
    isNewSigning: false
  },
  {
    id: 20, number: 19, name: "andré carrilo", position: "meia", group: "MEI",
    photo: "jogadores/carrilo.png",
    age: 34, height: "1.80m", nationality: "peru",
    youthClub: "alianza lima",
    bio: "conhecido pelo auto controle de bola dribe e atuacão pelas pontas",
    isNewSigning: false
  },
  {
    id: 21, number: 7, name: "breno bidon", position: "meia", group: "MEI",
    photo: "jogadores/brenobidon.png",
    age: 21, height: "1.79m", nationality: "brasileiro",
    youthClub: "corinthians",
    bio: "destaque da base, conhecido pela visão de jogo e qualidade de passe",
    isNewSigning: false
  },
  {
    id: 22, number: 29, name: "allan", position: "volante", group: "MEI",
    photo: "jogadores/allan.png",
    age: 29, height: "1.72m", nationality: "brasileiro",
    youthClub: "fluminense",
    bio: "se destaca pela marcação e intesidade",
    isNewSigning: false
  },

  // === ATACANTES ===
  {
    id: 23, number: 9, name: "Yuri Alberto", position: "Centroavante", group: "ATA",
    photo: "jogadores/yurialberto.png",
    age: 25, height: "1.83m", nationality: "Brasileiro",
    youthClub: "Santos",
    bio: "Centroavante artilheiro do Corinthians. Rapido, tecnico e com excelente faro de gol. Um dos principais nomes do ataque corintiano.",
    isNewSigning: false
  },
  {
    id: 24, number: 18, name: "pedro raul", position: "centroavante", group: "ATA",
    photo: "jogadores/pedroraul.png",
    age: 29, height: "1.91m", nationality: "brasileiro",
    youthClub: "botafogo",
    bio: "Atacante conhecido por forca fisica e presenca de area.",
    isNewSigning: false
  },
  {
    id: 25, number: 56, name: "gui negão", position: "centroavante", group: "ATA",
    photo: "jogadores/guinegão.png",
    age: 19, height: "1.79m", nationality: "brasileiro",
    youthClub: "corinthians",
    bio: "Atacante conhecida pela forca fisica e velocidade",
    isNewSigning: false
  },
  {
    id: 26, number: 37, name: "Kaio Cesar", position: "Ponta Direita", group: "ATA",
    photo: "jogadores/kaiocesar.png",
    age: 22, height: "1.68m", nationality: "Brasileiro",
    youthClub: "curitiba",
    bio: "Atacante jovem e veloz que atua pelas pontas. Destaca-se pelo drible e pela capacidade de desequilibrar em jogadas individuais.",
    isNewSigning: false
  },
  {
    id: 27, number: 11, name: "vitinho", position: "Ponta Esquerda", group: "ATA",
    photo: "jogadores/vitinho.png",
    age: 32, height: "1.78m", nationality: "Brasileiro",
    youthClub: "botafogo",
    bio: "Atacante veloz e habilidoso. Tem passagem pela arabia e busca retomar o alto nivel no Corinthians.",
    isNewSigning: false
  },
  {
    id: 28, number: 31, name: "kayke ferrari", position: "ponta esquerda", group: "ATA",
    photo: "jogadores/kayke.png",
    age: 21, height: "1.79m", nationality: "brasileiro",
    youthClub: "corinthians",
    bio: "conhecido por sua versatilidade e seu enorme potencial",
    isNewSigning: false
  },
  {
    id: 29, number: 10, name: "Memphis Depay", position: "centroavante", group: "ATA",
    photo: "jogadores/memphis.png",
    age: 32, height: "1.76m", nationality: "Holandes",
    youthClub: "PSV Eindhoven",
    bio: "Jogador versatil com passagens por Manchester United, Lyon e Barcelona. Estrela internacional que traz qualidade tecnica excepcional.",
    isNewSigning: false
  },
  {
    id: 30, number: 61, name: "dieguinho", position: "ponta direita", group: "ATA",
    photo: "jogadores/dieguinho.png",
    age: 18, height: "1.70m", nationality: "brasileiro",
    youthClub: "corinthians",
    bio: "conhecida pela tecnica, mobilidade e seu enorme potencial",
    isNewSigning: false
  },
];

/* -------------------------------------------------------
   FORMACOES DISPONIVEIS
   Cada formacao define as posicoes (x, y em %) no campo.
   ------------------------------------------------------- */
const formations = {
  '4-3-3': {
    label: '4-3-3',
    slots: [
      { id: 'gk', label: 'GOL', x: 50, y: 90 },
      { id: 'rb', label: 'LD', x: 85, y: 72 },
      { id: 'cb1', label: 'ZAG', x: 62, y: 75 },
      { id: 'cb2', label: 'ZAG', x: 38, y: 75 },
      { id: 'lb', label: 'LE', x: 15, y: 72 },
      { id: 'cm1', label: 'VOL', x: 65, y: 52 },
      { id: 'cm2', label: 'MEI', x: 50, y: 45 },
      { id: 'cm3', label: 'VOL', x: 35, y: 52 },
      { id: 'rw', label: 'PD', x: 80, y: 25 },
      { id: 'st', label: 'CA', x: 50, y: 18 },
      { id: 'lw', label: 'PE', x: 20, y: 25 },
    ],
  },
  '4-4-2': {
    label: '4-4-2',
    slots: [
      { id: 'gk', label: 'GOL', x: 50, y: 90 },
      { id: 'rb', label: 'LD', x: 85, y: 72 },
      { id: 'cb1', label: 'ZAG', x: 62, y: 75 },
      { id: 'cb2', label: 'ZAG', x: 38, y: 75 },
      { id: 'lb', label: 'LE', x: 15, y: 72 },
      { id: 'rm', label: 'MD', x: 82, y: 48 },
      { id: 'cm1', label: 'VOL', x: 60, y: 52 },
      { id: 'cm2', label: 'VOL', x: 40, y: 52 },
      { id: 'lm', label: 'ME', x: 18, y: 48 },
      { id: 'st1', label: 'ATA', x: 60, y: 22 },
      { id: 'st2', label: 'ATA', x: 40, y: 22 },
    ],
  },
  '3-5-2': {
    label: '3-5-2',
    slots: [
      { id: 'gk', label: 'GOL', x: 50, y: 90 },
      { id: 'cb1', label: 'ZAG', x: 70, y: 75 },
      { id: 'cb2', label: 'ZAG', x: 50, y: 78 },
      { id: 'cb3', label: 'ZAG', x: 30, y: 75 },
      { id: 'rwb', label: 'ALD', x: 85, y: 52 },
      { id: 'cm1', label: 'VOL', x: 62, y: 55 },
      { id: 'cm2', label: 'MEI', x: 50, y: 45 },
      { id: 'cm3', label: 'VOL', x: 38, y: 55 },
      { id: 'lwb', label: 'ALE', x: 15, y: 52 },
      { id: 'st1', label: 'ATA', x: 60, y: 20 },
      { id: 'st2', label: 'ATA', x: 40, y: 20 },
    ],
  },
  '4-2-3-1': {
    label: '4-2-3-1',
    slots: [
      { id: 'gk', label: 'GOL', x: 50, y: 90 },
      { id: 'rb', label: 'LD', x: 85, y: 72 },
      { id: 'cb1', label: 'ZAG', x: 62, y: 75 },
      { id: 'cb2', label: 'ZAG', x: 38, y: 75 },
      { id: 'lb', label: 'LE', x: 15, y: 72 },
      { id: 'dm1', label: 'VOL', x: 62, y: 56 },
      { id: 'dm2', label: 'VOL', x: 38, y: 56 },
      { id: 'ram', label: 'PD', x: 78, y: 36 },
      { id: 'cam', label: 'MEI', x: 50, y: 38 },
      { id: 'lam', label: 'PE', x: 22, y: 36 },
      { id: 'st', label: 'CA', x: 50, y: 18 },
    ],
  },
};

/* -------------------------------------------------------
   CORES POR GRUPO (para indicadores visuais)
   ------------------------------------------------------- */
const groupColors = {
  GOL: '#f59e0b',
  DEF: '#3b82f6',
  MEI: '#10b981',
  ATA: '#ef4444',
};

/* -------------------------------------------------------
   UTILITARIOS
   ------------------------------------------------------- */

// Gera SVG de camisa do Corinthians (branca com detalhes pretos)
function jerseySvg(number) {
  const n = (number ?? '') + '';
  return `
    <svg viewBox="0 0 60 70" width="50" height="56" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,.4));" aria-hidden="true">
      <path d="M15 22 L10 17 L2 25 L8 50 L8 65 L52 65 L52 50 L58 25 L50 17 L45 22 Q37 28 30 28 Q23 28 15 22Z"
            fill="white" stroke="black" stroke-width="1.5" />
      <path d="M10 17 L2 25 L8 35 L15 27Z" fill="black" />
      <path d="M50 17 L58 25 L52 35 L45 27Z" fill="black" />
      <text x="30" y="52" text-anchor="middle" font-size="17" font-weight="900" fill="black">${n}</text>
    </svg>`;
}

// Gera SVG de silhueta (placeholder de foto)
function placeholderSvg(size) {
  return `
    <svg viewBox="0 0 100 100" width="${size}" height="${size}" class="card-placeholder" aria-hidden="true">
      <circle cx="50" cy="35" r="18" fill="rgba(255,255,255,0.15)" />
      <ellipse cx="50" cy="85" rx="30" ry="22" fill="rgba(255,255,255,0.12)" />
    </svg>`;
}

// Gera SVG de avatar pequeno (para o picker)
function avatarSvg(fill) {
  return `
    <svg viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
      <circle cx="20" cy="14" r="8" fill="${fill}" opacity="0.6" />
      <path d="M8 38 Q8 26 20 24 Q32 26 32 38" fill="${fill}" opacity="0.6" />
    </svg>`;
}

// SVG de "+" para slots vazios
function plusSvg() {
  return `
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <line x1="12" y1="4" x2="12" y2="20" stroke="rgba(255,255,255,0.6)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="4" y1="12" x2="20" y2="12" stroke="rgba(255,255,255,0.6)" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`;
}

/* -------------------------------------------------------
   ELENCO - FILTROS E CARDS
   ------------------------------------------------------- */
const squadState = { filter: 'ALL' };

// Grupos de filtro
const positionGroups = [
  { key: 'ALL', label: 'Todos' },
  { key: 'GOL', label: 'Goleiros' },
  { key: 'DEF', label: 'Defensores' },
  { key: 'MEI', label: 'Meio-Campo' },
  { key: 'ATA', label: 'Atacantes' },
];

// Renderiza botoes de filtro
function renderSquadFilters() {
  const wrap = document.getElementById('squadFilters');
  if (!wrap) return;
  wrap.innerHTML = '';

  positionGroups.forEach(function(g) {
    var count = g.key === 'ALL'
      ? players.length
      : players.filter(function(p) { return p.group === g.key; }).length;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-btn' + (squadState.filter === g.key ? ' active' : '');
    btn.innerHTML = g.label + '<span class="count">' + count + '</span>';
    btn.addEventListener('click', function() {
      squadState.filter = g.key;
      renderSquadFilters();
      renderSquadGrid();
    });
    wrap.appendChild(btn);
  });
}

// Renderiza um card de jogador
function renderPlayerCard(player) {
  var card = document.createElement('div');
  card.className = 'player-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', 'Ver detalhes de ' + player.name);

  var photoHTML = player.photo
    ? '<img src="' + player.photo + '" alt="' + player.name + '" />'
    : placeholderSvg(80);

  var badgeHTML = player.isNewSigning
    ? '<div class="card-badge">NOVO</div>'
    : '';

  var dotColor = groupColors[player.group] || '#999';

  card.innerHTML =
    badgeHTML +
    '<div class="card-number">' + player.number + '</div>' +
    '<div class="card-photo">' + photoHTML + '</div>' +
    '<div class="card-info">' +
      '<div class="card-name">' + player.name + '</div>' +
      '<div class="card-position">' +
        '<span class="dot" style="background:' + dotColor + '"></span>' +
        player.position +
      '</div>' +
    '</div>';

  // Abre modal ao clicar
  card.addEventListener('click', function() { openModal(player); });
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') openModal(player);
  });

  return card;
}

// Renderiza a grid completa de jogadores
function renderSquadGrid() {
  var grid = document.getElementById('squadGrid');
  if (!grid) return;
  grid.innerHTML = '';

  var filtered = squadState.filter === 'ALL'
    ? players
    : players.filter(function(p) { return p.group === squadState.filter; });

  filtered.forEach(function(player) {
    grid.appendChild(renderPlayerCard(player));
  });
}

/* -------------------------------------------------------
   MODAL DO JOGADOR
   ------------------------------------------------------- */
function openModal(player) {
  var modal = document.getElementById('playerModal');
  if (!modal) return;

  // Preenche dados
  document.getElementById('modalName').textContent = player.name;
  document.getElementById('modalPosition').textContent = player.position;
  document.getElementById('modalAge').textContent = player.age + ' anos';
  document.getElementById('modalHeight').textContent = player.height;
  document.getElementById('modalNationality').textContent = player.nationality;
  document.getElementById('modalYouthClub').textContent = player.youthClub;
  document.getElementById('modalBio').textContent = player.bio;

  // Foto
  var photoEl = document.getElementById('modalPhoto');
  if (player.photo) {
    photoEl.src = player.photo;
    photoEl.style.display = 'block';
  } else {
    photoEl.src = '';
    photoEl.style.display = 'none';
    // Adiciona placeholder
    var wrap = document.querySelector('.modal-photo-wrap');
    var existing = wrap.querySelector('.modal-placeholder');
    if (existing) existing.remove();
    var ph = document.createElement('div');
    ph.className = 'modal-placeholder';
    ph.innerHTML = placeholderSvg(60);
    wrap.appendChild(ph);
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var modal = document.getElementById('playerModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Remove placeholder se existir
  var ph = document.querySelector('.modal-placeholder');
  if (ph) ph.remove();
}

/* -------------------------------------------------------
   ESCALACAO INTERATIVA
   ------------------------------------------------------- */
var lineupState = {
  formation: '4-3-3',
  selectedSlot: null,
  assignments: {} // { slotId: playerId }
};

// Reseta atribuicoes ao trocar formacao
function resetSlotsForFormation() {
  lineupState.assignments = {};
  lineupState.selectedSlot = null;
}

// Retorna IDs dos jogadores ja escalados
function assignedPlayerIds() {
  return Object.values(lineupState.assignments);
}

// Filtra jogadores disponiveis para o picker
function getPickerPlayers(searchTerm) {
  var assigned = assignedPlayerIds();
  var term = (searchTerm || '').toLowerCase();

  return players.filter(function(p) {
    if (assigned.indexOf(p.id) !== -1) return false;
    if (term && p.name.toLowerCase().indexOf(term) === -1) return false;
    return true;
  });
}

// Renderiza botoes de formacao
function renderFormationButtons() {
  var wrap = document.getElementById('formationButtons');
  if (!wrap) return;
  wrap.innerHTML = '';

  Object.keys(formations).forEach(function(key) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'formation-btn' + (lineupState.formation === key ? ' active' : '');
    btn.textContent = formations[key].label;
    btn.addEventListener('click', function() {
      lineupState.formation = key;
      resetSlotsForFormation();
      renderFormationButtons();
      renderFieldSlots();
      renderPicker();
    });
    wrap.appendChild(btn);
  });
}

// Renderiza slots no campo
function renderFieldSlots() {
  var layer = document.getElementById('slotsLayer');
  if (!layer) return;
  layer.innerHTML = '';

  var currentFormation = formations[lineupState.formation];
  if (!currentFormation) return;

  currentFormation.slots.forEach(function(slot) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'slot-btn';
    btn.style.left = slot.x + '%';
    btn.style.top = slot.y + '%';

    var assignedPlayerId = lineupState.assignments[slot.id];
    var assignedPlayer = assignedPlayerId
      ? players.find(function(p) { return p.id === assignedPlayerId; })
      : null;

    if (assignedPlayer) {
      // Slot preenchido: mostra camisa e nome
      btn.innerHTML =
        '<div class="slot-filled">' +
          '<div class="jersey-wrap">' + jerseySvg(assignedPlayer.number) + '</div>' +
          '<div class="namechip">' + assignedPlayer.name.split(' ').pop() + '</div>' +
          '<div class="remove-x">x</div>' +
        '</div>';

      btn.addEventListener('click', function(e) {
        // Se clicou no X, remove o jogador
        if (e.target.classList.contains('remove-x')) {
          delete lineupState.assignments[slot.id];
          renderFieldSlots();
          renderPicker();
          return;
        }
        // Senao, seleciona para trocar
        lineupState.selectedSlot = slot.id;
        renderFieldSlots();
        renderPicker();
      });
    } else {
      // Slot vazio
      if (lineupState.selectedSlot === slot.id) {
        btn.classList.add('selected');
      }
      btn.innerHTML =
        '<div class="slot-empty">' +
          '<div class="slot-plus">' + plusSvg() + '</div>' +
          '<div class="slot-label">' + slot.label + '</div>' +
        '</div>';

      btn.addEventListener('click', function() {
        lineupState.selectedSlot = slot.id;
        renderFieldSlots();
        renderPicker();
        // Foca no campo de busca
        var search = document.getElementById('playerSearch');
        if (search) search.focus();
      });
    }

    layer.appendChild(btn);
  });
}

// Renderiza lista de jogadores no picker lateral
function renderPicker() {
  var title = document.getElementById('pickerTitle');
  var list = document.getElementById('playerPickerList');
  var empty = document.getElementById('pickerEmpty');
  var search = document.getElementById('playerSearch');
  if (!list) return;

  if (!lineupState.selectedSlot) {
    if (title) title.textContent = 'Selecione uma posicao no campo';
    list.innerHTML = '';
    empty.style.display = 'block';
    empty.textContent = 'Clique em um slot no campo para comecar';
    return;
  }

  // Mostra qual posicao esta sendo preenchida
  var currentFormation = formations[lineupState.formation];
  var currentSlot = currentFormation.slots.find(function(s) { return s.id === lineupState.selectedSlot; });
  if (title) title.textContent = 'Escolha: ' + (currentSlot ? currentSlot.label : '');

  var searchTerm = search ? search.value : '';
  var available = getPickerPlayers(searchTerm);

  list.innerHTML = '';
  empty.style.display = available.length === 0 ? 'block' : 'none';
  if (available.length === 0) {
    empty.textContent = searchTerm ? 'Nenhum jogador encontrado' : 'Todos os jogadores ja foram escalados';
  }

  available.forEach(function(player) {
    var card = document.createElement('button');
    card.type = 'button';
    card.className = 'picker-card';

    var dotColor = groupColors[player.group] || '#999';

    card.innerHTML =
      '<div class="picker-avatar">' + avatarSvg(dotColor) + '</div>' +
      '<div class="picker-info">' +
        '<p class="picker-name">' + player.name + '</p>' +
        '<p class="picker-pos">' + player.position + ' | #' + player.number + '</p>' +
      '</div>';

    card.addEventListener('click', function() {
      // Atribui jogador ao slot selecionado
      lineupState.assignments[lineupState.selectedSlot] = player.id;
      lineupState.selectedSlot = null;
      if (search) search.value = '';
      renderFieldSlots();
      renderPicker();
    });

    list.appendChild(card);
  });
}

// Limpa toda a escalacao
function clearAllLineup() {
  lineupState.assignments = {};
  lineupState.selectedSlot = null;
  var search = document.getElementById('playerSearch');
  if (search) search.value = '';
  renderFieldSlots();
  renderPicker();
}

/* -------------------------------------------------------
   HEADER - SCROLL E HAMBURGER
   ------------------------------------------------------- */
function setupHeader() {
  var header = document.getElementById('header');
  var hamburger = document.getElementById('hamburgerBtn');
  var nav = document.getElementById('mainNav');

  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // Fecha menu ao clicar em link
    nav.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }
}

/* -------------------------------------------------------
   INICIALIZACAO
   ------------------------------------------------------- */
function init() {
  // Header
  setupHeader();

  // Elenco
  renderSquadFilters();
  renderSquadGrid();

  // Modal - fechar
  var closeBtn = document.getElementById('closeModal');
  var backdrop = document.getElementById('modalBackdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Fechar modal com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // Escalacao
  renderFormationButtons();
  renderFieldSlots();
  renderPicker();

  // Busca no picker
  var searchInput = document.getElementById('playerSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      renderPicker();
    });
  }

  // Botao limpar tudo
  var clearBtn = document.getElementById('btnClearAll');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearAllLineup);
  }
}

// Executa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);

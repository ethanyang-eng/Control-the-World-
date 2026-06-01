const COUNTRIES = [
  {
    id: "usa",
    name: "United States",
    capital: "Washington, D.C.",
    color: "#3f8cff",
    x: 245,
    y: 286,
    path: "M118 238 C154 214 220 213 268 225 C309 235 344 257 359 284 C342 306 310 326 267 333 C216 340 166 322 132 292 C118 276 111 256 118 238 Z",
    money: 520,
    troops: 190,
    factories: 11,
    research: 0,
    stateNames: ["Pacific", "Rockies", "Texas", "Midwest", "Great Lakes", "Atlantic", "Southeast"],
    statePoints: [[164, 270], [214, 252], [235, 313], [265, 279], [302, 255], [332, 284], [304, 315]],
    stateLines: ["M190 225 L205 331", "M235 225 L243 337", "M281 237 L274 329", "M318 253 L300 333", "M132 292 L352 284", "M210 318 L292 236"],
    neighbors: ["canada", "mexico", "unitedKingdom", "france", "japan"]
  },
  {
    id: "canada",
    name: "Canada",
    capital: "Ottawa",
    color: "#56d8a0",
    x: 250,
    y: 157,
    path: "M83 93 C139 63 225 47 310 62 C379 75 431 112 446 151 C421 184 360 202 295 195 C247 190 212 203 163 198 C108 191 81 161 83 93 Z",
    money: 360,
    troops: 120,
    factories: 7,
    research: 0,
    stateNames: ["Yukon", "Prairies", "British Columbia", "Ontario", "Quebec", "Atlantic", "Hudson", "North"],
    statePoints: [[134, 122], [197, 131], [168, 176], [275, 178], [338, 166], [397, 155], [270, 113], [345, 101]],
    stateLines: ["M148 72 L151 197", "M214 55 L215 200", "M282 59 L277 199", "M345 78 L330 191", "M101 155 L431 151", "M184 93 L379 187", "M267 62 L244 196"],
    neighbors: ["usa", "unitedKingdom", "russia"]
  },
  {
    id: "mexico",
    name: "Mexico",
    capital: "Mexico City",
    color: "#debf53",
    x: 262,
    y: 377,
    path: "M197 334 C236 342 286 342 327 360 C362 379 380 411 364 440 C335 430 311 410 276 399 C241 388 214 374 197 334 Z",
    money: 250,
    troops: 100,
    factories: 5,
    research: 0,
    stateNames: ["Sonora", "Central", "Yucatan"],
    statePoints: [[228, 355], [281, 381], [343, 417]],
    stateLines: ["M255 339 L247 394", "M305 355 L286 417"],
    neighbors: ["usa", "brazil"]
  },
  {
    id: "brazil",
    name: "Brazil",
    capital: "Brasilia",
    color: "#6ee66f",
    x: 417,
    y: 472,
    path: "M383 386 C430 388 483 421 508 465 C510 516 471 559 421 581 C376 560 344 514 347 461 C352 428 362 403 383 386 Z",
    money: 330,
    troops: 140,
    factories: 6,
    research: 0,
    stateNames: ["Amazonas", "Bahia", "Brasilia", "Sao Paulo", "South"],
    statePoints: [[397, 427], [466, 456], [422, 478], [435, 532], [392, 542]],
    stateLines: ["M377 397 L456 571", "M346 461 L507 466", "M363 522 L490 514", "M429 390 L421 579"],
    neighbors: ["mexico", "france", "southAfrica"]
  },
  {
    id: "unitedKingdom",
    name: "United Kingdom",
    capital: "London",
    color: "#d76bff",
    x: 532,
    y: 226,
    path: "M510 188 C529 177 552 181 563 199 C553 219 565 237 570 255 C556 274 536 285 517 267 C506 251 493 233 500 212 C504 203 503 194 510 188 Z",
    money: 380,
    troops: 115,
    factories: 8,
    research: 0,
    stateNames: ["Scotland", "North England", "London"],
    statePoints: [[535, 202], [530, 236], [548, 263]],
    stateLines: ["M504 219 L565 220", "M507 247 L570 246"],
    neighbors: ["usa", "canada", "france", "germany"]
  },
  {
    id: "france",
    name: "France",
    capital: "Paris",
    color: "#56c7ff",
    x: 584,
    y: 319,
    path: "M529 286 C555 267 594 265 625 288 C639 319 624 358 587 389 C552 381 523 357 518 325 C517 309 520 296 529 286 Z",
    money: 390,
    troops: 130,
    factories: 8,
    research: 0,
    stateNames: ["Normandy", "Paris", "Bordeaux", "Lyon", "Provence"],
    statePoints: [[550, 295], [585, 314], [552, 353], [604, 350], [588, 376]],
    stateLines: ["M536 287 L607 383", "M520 327 L633 319", "M575 267 L573 390", "M527 357 L625 292"],
    neighbors: ["unitedKingdom", "germany", "spain", "italy", "brazil", "usa"]
  },
  {
    id: "spain",
    name: "Spain",
    capital: "Madrid",
    color: "#ffb44f",
    x: 539,
    y: 413,
    path: "M477 386 C514 374 562 375 604 410 C590 443 562 463 512 456 C478 449 459 425 477 386 Z",
    money: 270,
    troops: 105,
    factories: 5,
    research: 0,
    stateNames: ["Madrid", "Catalonia", "Andalusia"],
    statePoints: [[523, 414], [573, 409], [524, 446]],
    stateLines: ["M536 377 L527 458", "M477 421 L600 416"],
    neighbors: ["france", "egypt"]
  },
  {
    id: "germany",
    name: "Germany",
    capital: "Berlin",
    color: "#fff06a",
    x: 664,
    y: 295,
    path: "M633 244 C657 233 687 239 711 268 C721 300 707 336 665 361 C632 351 615 324 622 289 C624 271 625 254 633 244 Z",
    money: 430,
    troops: 145,
    factories: 9,
    research: 0,
    stateNames: ["Rhineland", "Bavaria", "Saxony", "Berlin"],
    statePoints: [[644, 286], [658, 339], [690, 314], [676, 264]],
    stateLines: ["M661 238 L660 360", "M623 305 L715 303", "M635 247 L702 341"],
    neighbors: ["france", "unitedKingdom", "italy", "poland", "russia"]
  },
  {
    id: "poland",
    name: "Poland",
    capital: "Warsaw",
    color: "#ff7f8f",
    x: 739,
    y: 302,
    path: "M702 258 C725 249 765 251 796 287 C793 315 775 341 731 340 C704 329 696 294 702 258 Z",
    money: 255,
    troops: 118,
    factories: 5,
    research: 0,
    stateNames: ["Poznan", "Warsaw", "Krakow"],
    statePoints: [[723, 287], [757, 292], [743, 329]],
    stateLines: ["M743 252 L742 340", "M704 307 L789 305"],
    neighbors: ["germany", "russia", "turkey"]
  },
  {
    id: "italy",
    name: "Italy",
    capital: "Rome",
    color: "#7df2c6",
    x: 666,
    y: 397,
    path: "M632 350 C665 351 693 374 700 408 C718 431 744 455 729 486 C704 486 690 448 667 424 C646 404 635 378 632 350 Z",
    money: 285,
    troops: 110,
    factories: 5,
    research: 0,
    stateNames: ["Milan", "Rome", "Naples"],
    statePoints: [[662, 370], [681, 417], [716, 461]],
    stateLines: ["M639 386 L704 392", "M662 423 L731 448"],
    neighbors: ["france", "germany", "turkey", "egypt"]
  },
  {
    id: "russia",
    name: "Russia",
    capital: "Moscow",
    color: "#ff645e",
    x: 906,
    y: 205,
    path: "M735 112 C812 78 917 74 1037 88 C1117 99 1163 147 1158 225 C1126 260 1087 296 1001 287 C943 282 903 303 859 334 C806 323 751 287 729 222 C713 176 714 136 735 112 Z",
    money: 470,
    troops: 220,
    factories: 10,
    research: 0,
    stateNames: ["Karelia", "Moscow", "Volga", "Urals", "West Siberia", "Siberia", "Far East", "Caucasus", "Baltic", "Arctic"],
    statePoints: [[782, 142], [850, 202], [845, 271], [925, 239], [986, 180], [1058, 174], [1113, 226], [945, 293], [770, 218], [944, 112]],
    stateLines: ["M792 86 L778 315", "M857 80 L846 333", "M930 78 L923 303", "M1008 86 L1001 291", "M1084 111 L1065 285", "M724 201 L1156 215", "M766 269 L1090 125", "M808 113 L1037 291", "M921 80 L858 333"],
    neighbors: ["canada", "germany", "poland", "turkey", "iran", "china", "japan"]
  },
  {
    id: "turkey",
    name: "Turkey",
    capital: "Ankara",
    color: "#ff8f4a",
    x: 769,
    y: 422,
    path: "M707 382 C758 371 811 377 854 404 C836 428 802 443 748 435 C721 430 704 413 707 382 Z",
    money: 275,
    troops: 125,
    factories: 5,
    research: 0,
    stateNames: ["Istanbul", "Ankara", "Anatolia"],
    statePoints: [[733, 397], [774, 411], [822, 421]],
    stateLines: ["M752 377 L742 436", "M797 381 L789 440"],
    neighbors: ["italy", "poland", "russia", "egypt", "iran"]
  },
  {
    id: "egypt",
    name: "Egypt",
    capital: "Cairo",
    color: "#d9b06e",
    x: 711,
    y: 495,
    path: "M659 459 C689 450 729 452 762 505 C755 536 730 560 684 545 C663 524 654 493 659 459 Z",
    money: 230,
    troops: 100,
    factories: 4,
    research: 0,
    stateNames: ["Cairo", "Nile", "Sinai"],
    statePoints: [[699, 479], [701, 526], [741, 506]],
    stateLines: ["M715 452 L701 548", "M660 503 L766 505"],
    neighbors: ["spain", "italy", "turkey", "iran", "southAfrica"]
  },
  {
    id: "iran",
    name: "Iran",
    capital: "Tehran",
    color: "#b7e163",
    x: 855,
    y: 459,
    path: "M810 411 C847 391 904 401 947 451 C931 488 897 512 847 502 C815 492 791 459 810 411 Z",
    money: 260,
    troops: 128,
    factories: 5,
    research: 0,
    stateNames: ["Tehran", "Isfahan", "Shiraz", "Mashhad"],
    statePoints: [[849, 431], [858, 466], [838, 493], [908, 457]],
    stateLines: ["M855 399 L852 506", "M811 460 L943 455", "M813 413 L920 502"],
    neighbors: ["turkey", "egypt", "russia", "india", "china"]
  },
  {
    id: "india",
    name: "India",
    capital: "New Delhi",
    color: "#ff9dcb",
    x: 944,
    y: 499,
    path: "M913 431 C946 427 986 449 1008 507 C1000 545 975 584 940 587 C910 553 888 501 895 462 C899 448 904 438 913 431 Z",
    money: 400,
    troops: 200,
    factories: 8,
    research: 0,
    stateNames: ["Delhi", "Bengal", "Deccan", "Mumbai", "Tamil"],
    statePoints: [[934, 454], [979, 487], [949, 526], [912, 500], [956, 570]],
    stateLines: ["M942 431 L943 587", "M895 497 L1007 504", "M914 431 L984 565", "M894 462 L1003 527"],
    neighbors: ["iran", "china"]
  },
  {
    id: "china",
    name: "China",
    capital: "Beijing",
    color: "#ffcc41",
    x: 1028,
    y: 397,
    path: "M948 319 C1001 293 1062 297 1126 339 C1144 382 1135 433 1081 488 C1032 480 983 465 947 425 C923 399 922 351 948 319 Z",
    money: 500,
    troops: 230,
    factories: 11,
    research: 0,
    stateNames: ["Beijing", "Shanghai", "Sichuan", "Guangdong", "Xinjiang", "Manchuria"],
    statePoints: [[1032, 340], [1085, 414], [1006, 419], [1051, 463], [958, 373], [1093, 350]],
    stateLines: ["M1015 300 L1003 474", "M1070 308 L1056 482", "M930 396 L1136 397", "M956 326 L1083 487", "M1109 339 L954 425"],
    neighbors: ["russia", "iran", "india", "japan", "australia"]
  },
  {
    id: "japan",
    name: "Japan",
    capital: "Tokyo",
    color: "#f3f0f0",
    x: 1160,
    y: 380,
    path: "M1138 313 C1162 323 1174 349 1172 386 C1191 414 1193 441 1172 466 C1153 449 1141 414 1132 370 C1129 345 1130 325 1138 313 Z",
    money: 375,
    troops: 105,
    factories: 8,
    research: 0,
    stateNames: ["Hokkaido", "Honshu", "Kyushu"],
    statePoints: [[1154, 337], [1160, 390], [1172, 445]],
    stateLines: ["M1134 363 L1173 361", "M1139 421 L1187 420"],
    neighbors: ["usa", "russia", "china", "australia"]
  },
  {
    id: "australia",
    name: "Australia",
    capital: "Canberra",
    color: "#c98bff",
    x: 1051,
    y: 548,
    path: "M967 518 C1036 493 1107 506 1154 539 C1146 586 1102 608 1023 603 C981 599 950 570 967 518 Z",
    money: 290,
    troops: 90,
    factories: 5,
    research: 0,
    stateNames: ["Western", "Queensland", "New South", "Victoria"],
    statePoints: [[1005, 550], [1094, 540], [1081, 580], [1022, 591]],
    stateLines: ["M1035 503 L1028 603", "M968 560 L1150 560", "M1080 511 L1074 604"],
    neighbors: ["china", "japan", "southAfrica"]
  },
  {
    id: "southAfrica",
    name: "South Africa",
    capital: "Pretoria",
    color: "#78dff2",
    x: 682,
    y: 581,
    path: "M610 535 C650 519 704 523 747 565 C727 600 692 616 638 611 C615 594 604 565 610 535 Z",
    money: 230,
    troops: 95,
    factories: 4,
    research: 0,
    stateNames: ["Cape", "Pretoria", "Natal"],
    statePoints: [[650, 587], [682, 548], [719, 575]],
    stateLines: ["M665 524 L661 613", "M614 571 L744 571"],
    neighbors: ["egypt", "brazil", "australia"]
  }
];

const UPGRADES = [
  {
    id: "industrialFoundations",
    branch: "Physical",
    name: "Industrial Foundations",
    icon: "▦",
    cost: 160,
    description: "Factory income +25%. New factories cost less."
  },
  {
    id: "urbanHousing",
    branch: "Physical",
    name: "Urban Housing",
    icon: "⌂",
    cost: 140,
    description: "Housing supports larger regiments and stronger recruitment."
  },
  {
    id: "mechanizedColumns",
    branch: "Combat",
    name: "Mechanized Columns",
    icon: "▰",
    cost: 220,
    description: "Attacking regiments hit 25% harder and push faster."
  },
  {
    id: "fieldHospitals",
    branch: "Combat",
    name: "Field Hospitals",
    icon: "+",
    cost: 180,
    description: "Regiments take fewer casualties and recover more each tick."
  },
  {
    id: "supplyDepots",
    branch: "Logistics",
    name: "Supply Depots",
    icon: "▣",
    cost: 200,
    description: "Defending states hold longer and frontline losses are reduced."
  },
  {
    id: "airRecon",
    branch: "Logistics",
    name: "Air Recon",
    icon: "⌁",
    cost: 170,
    description: "Attacks gain better progress and enemy states are easier to break."
  },
  {
    id: "warEconomy",
    branch: "National",
    name: "War Economy",
    icon: "$",
    cost: 260,
    requires: "industrialFoundations",
    description: "Factory income +15% and recruitment costs less."
  },
  {
    id: "centralCommand",
    branch: "National",
    name: "Central Command",
    icon: "★",
    cost: 240,
    requires: "mechanizedColumns",
    description: "National morale rises and each regiment gains more capacity."
  }
];

const state = {
  countries: new Map(),
  states: new Map(),
  playerId: null,
  selectedStateId: null,
  elapsed: 0,
  frontlines: [],
  log: [],
  upgradeModalOpen: false,
  timer: null
};

const els = {
  countrySelect: document.querySelector("#countrySelect"),
  countryGrid: document.querySelector("#countryGrid"),
  game: document.querySelector("#game"),
  worldMap: document.querySelector("#worldMap"),
  playerName: document.querySelector("#playerName"),
  countryLayer: document.querySelector("#countryLayer"),
  routesLayer: document.querySelector("#routesLayer"),
  troopLayer: document.querySelector("#troopLayer"),
  frontlineLayer: document.querySelector("#frontlineLayer"),
  selectedName: document.querySelector("#selectedName"),
  selectedMeta: document.querySelector("#selectedMeta"),
  moneyChip: document.querySelector("#moneyChip"),
  troopChip: document.querySelector("#troopChip"),
  factoryChip: document.querySelector("#factoryChip"),
  researchChip: document.querySelector("#researchChip"),
  timeChip: document.querySelector("#timeChip"),
  statusText: document.querySelector("#statusText"),
  leaderboard: document.querySelector("#leaderboard"),
  logEntries: document.querySelector("#logEntries"),
  buildBtn: document.querySelector("#buildBtn"),
  housingBtn: document.querySelector("#housingBtn"),
  recruitBtn: document.querySelector("#recruitBtn"),
  researchBtn: document.querySelector("#researchBtn"),
  declareBtn: document.querySelector("#declareBtn"),
  attackBtn: document.querySelector("#attackBtn"),
  upgradeModal: document.querySelector("#upgradeModal"),
  upgradeGrid: document.querySelector("#upgradeGrid"),
  closeUpgradeBtn: document.querySelector("#closeUpgradeBtn")
};

function init() {
  renderCountrySelection();
  bindControls();
}

function renderCountrySelection() {
  els.countryGrid.innerHTML = COUNTRIES.map((country) => `
    <button class="country-card" style="--country-color: ${country.color}" data-country="${country.id}">
      <svg class="mini-map" viewBox="0 0 1200 620" aria-hidden="true">
        <path class="mini-land" d="${country.path}"></path>
      </svg>
      <strong>${country.name}</strong>
      <span>${country.capital} · ${country.stateNames.length} states · ${country.troops}k troops</span>
    </button>
  `).join("");

  els.countryGrid.querySelectorAll("[data-country]").forEach((button) => {
    button.addEventListener("click", () => startGame(button.dataset.country));
  });
}

function startGame(playerId) {
  state.playerId = playerId;
  state.elapsed = 0;
  state.frontlines = [];
  state.log = [];
  state.upgradeModalOpen = false;
  state.countries = new Map();
  state.states = new Map();

  COUNTRIES.forEach((country) => {
    state.countries.set(country.id, {
      ...country,
      morale: 1,
      wars: new Set(),
      upgrades: new Set(),
      aiMood: country.id === playerId ? "player" : pickMood(country)
    });

    const states = createStatesForCountry(country);
    states.forEach((province) => state.states.set(province.id, province));
  });

  buildStateNeighbors();
  seedRegiments();
  state.selectedStateId = firstOwnedState(playerId)?.id ?? null;

  addLog(`${getCountry(playerId).name} enters the campaign.`);
  els.countrySelect.classList.add("is-hidden");
  els.game.classList.remove("is-hidden");
  drawStaticMap();
  render();

  clearInterval(state.timer);
  state.timer = setInterval(tick, 1000);
}

function createStatesForCountry(country) {
  const factoryShares = splitNumber(country.factories, country.stateNames.length);
  const housingShares = country.stateNames.map((_, index) => index % 3 === 0 ? 2 : 1);

  return country.stateNames.map((name, index) => {
    const [x, y] = country.statePoints[index];
    return {
      id: `${country.id}-${index}`,
      countryId: country.id,
      name,
      owner: country.id,
      x,
      y,
      factories: factoryShares[index],
      housing: housingShares[index],
      neighbors: [],
      regiment: null
    };
  });
}

function splitNumber(total, parts) {
  const base = Math.floor(total / parts);
  let remainder = total % parts;
  return Array.from({ length: parts }, () => {
    const value = base + (remainder > 0 ? 1 : 0);
    remainder -= 1;
    return value;
  });
}

function seedRegiments() {
  state.countries.forEach((country) => {
    const provinces = statesForCountry(country.id);
    const count = Math.max(1, Math.min(provinces.length, Math.ceil(country.troops / 48)));
    const strengthShares = splitNumber(country.troops, count);
    provinces.slice(0, count).forEach((province, index) => {
      province.regiment = {
        owner: country.id,
        strength: strengthShares[index]
      };
    });
  });
}

function buildStateNeighbors() {
  state.countries.forEach((country) => {
    const provinces = statesForCountry(country.id);
    provinces.forEach((province, index) => {
      if (provinces[index - 1]) province.neighbors.push(provinces[index - 1].id);
      if (provinces[index + 1]) province.neighbors.push(provinces[index + 1].id);

      const nearest = provinces
        .filter((candidate) => candidate.id !== province.id)
        .sort((a, b) => distance(province, a) - distance(province, b))[0];
      if (nearest && province.neighbors.includes(nearest.id) === false) {
        province.neighbors.push(nearest.id);
      }
    });
  });

  state.countries.forEach((country) => {
    country.neighbors.forEach((neighborId) => {
      const from = nearestStateBetween(country.id, neighborId);
      const to = nearestStateBetween(neighborId, country.id);
      if (!from || !to) return;
      if (from.neighbors.includes(to.id) === false) from.neighbors.push(to.id);
      if (to.neighbors.includes(from.id) === false) to.neighbors.push(from.id);
    });
  });
}

function pickMood(country) {
  if (country.factories >= 9 || country.troops >= 200) return "major";
  if (country.troops >= 125) return "hawk";
  return "builder";
}

function bindControls() {
  els.buildBtn.addEventListener("click", buildIndustry);
  els.housingBtn.addEventListener("click", buildHousing);
  els.recruitBtn.addEventListener("click", recruitTroops);
  els.researchBtn.addEventListener("click", openUpgrades);
  els.declareBtn.addEventListener("click", declareWarOnSelected);
  els.attackBtn.addEventListener("click", attackSelected);
  els.closeUpgradeBtn.addEventListener("click", closeUpgrades);
  els.upgradeModal.addEventListener("click", (event) => {
    if (event.target === els.upgradeModal) closeUpgrades();
  });
  els.upgradeGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-upgrade]");
    if (!button) return;
    purchaseUpgrade(button.dataset.upgrade);
  });
}

function drawStaticMap() {
  const routePairs = new Set();
  const routeMarkup = [];

  state.countries.forEach((country) => {
    country.neighbors.forEach((neighborId) => {
      const key = [country.id, neighborId].sort().join("-");
      if (routePairs.has(key)) return;
      routePairs.add(key);
      const neighbor = getCountry(neighborId);
      routeMarkup.push(`<line class="route" x1="${country.x}" y1="${country.y}" x2="${neighbor.x}" y2="${neighbor.y}"></line>`);
    });
  });

  const clips = [...state.countries.values()].map((country) => `
    <clipPath id="clip-${country.id}">
      <path d="${country.path}"></path>
    </clipPath>
  `).join("");

  els.routesLayer.innerHTML = routeMarkup.join("");
  els.countryLayer.innerHTML = `
    <defs>${clips}</defs>
    ${[...state.countries.values()].map((country) => renderCountryMarkup(country)).join("")}
  `;

  els.countryLayer.querySelectorAll("[data-country-hit]").forEach((group) => {
    group.addEventListener("click", (event) => {
      const countryId = group.dataset.countryHit;
      const point = svgPoint(event);
      state.selectedStateId = nearestStateInCountry(countryId, point.x, point.y)?.id ?? firstState(countryId)?.id;
      render();
    });
    group.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      state.selectedStateId = firstState(group.dataset.countryHit)?.id ?? null;
      render();
    });
  });

  els.countryLayer.querySelectorAll("[data-state]").forEach((shape) => {
    shape.addEventListener("click", (event) => {
      event.stopPropagation();
      state.selectedStateId = shape.dataset.state;
      render();
    });
  });
}

function renderCountryMarkup(country) {
  const provinces = statesForCountry(country.id);
  const statePatches = provinces.map((province) => `
    <circle class="state-control" data-state="${province.id}" cx="${province.x}" cy="${province.y}" r="${statePatchRadius(country)}"></circle>
  `).join("");

  const stateLines = country.stateLines.map((line) => `
    <path class="state-line" d="${line}"></path>
  `).join("");

  return `
    <g class="country-hit" data-country-hit="${country.id}" role="button" tabindex="0" aria-label="${country.name}">
      <path class="country-land" id="country-${country.id}" d="${country.path}"></path>
      <ellipse class="hit-zone" cx="${country.x}" cy="${country.y}" rx="${hitRadius(country).x}" ry="${hitRadius(country).y}"></ellipse>
      <g clip-path="url(#clip-${country.id})">
        ${statePatches}
        ${stateLines}
      </g>
      <path class="country-border" d="${country.path}"></path>
      <text class="country-label" x="${country.x}" y="${country.y - 34}">${shortName(country.name)}</text>
    </g>
  `;
}

function tick() {
  if (!state.playerId) return;
  state.elapsed += 1;

  state.countries.forEach((country) => {
    const provinces = ownedStates(country.id);
    const factoryIncome = provinces.reduce((sum, province) => sum + province.factories, 0);
    const housingIncome = provinces.reduce((sum, province) => sum + province.housing, 0);
    country.money += factoryIncome * (country.id === state.playerId ? 5 : 4) * incomeMultiplier(country) + housingIncome * housingIncomeMultiplier(country);
    country.morale = Math.min(1.15, country.morale + 0.006);

    provinces.forEach((province) => {
      if (!province.regiment || province.regiment.owner !== country.id) return;
      const cap = regimentCap(province, country);
      province.regiment.strength = Math.min(cap, province.regiment.strength + province.factories * recoveryMultiplier(country) * 0.35 + province.housing * 0.22);
    });
  });

  resolveFrontlines();

  if (state.elapsed % 4 === 0) {
    runAiTurn();
  }

  render();
}

function buildIndustry() {
  const player = getCountry(state.playerId);
  const province = selectedState();
  if (!canBuildOn(province)) {
    setStatus("Select one of your states before building industry.");
    return;
  }
  if (player.money < factoryCost(player)) {
    setStatus(`You need $${factoryCost(player)} to build more industry.`);
    return;
  }
  player.money -= factoryCost(player);
  province.factories += 1;
  addLog(`${player.name} built a factory in ${province.name}.`);
  render();
}

function buildHousing() {
  const player = getCountry(state.playerId);
  const province = selectedState();
  if (!canBuildOn(province)) {
    setStatus("Select one of your states before building housing.");
    return;
  }
  if (player.money < 110) {
    setStatus("You need $110 to build housing.");
    return;
  }
  player.money -= 110;
  province.housing += 1;
  addLog(`${player.name} built housing in ${province.name}.`);
  render();
}

function recruitTroops() {
  const player = getCountry(state.playerId);
  const province = selectedState();
  if (!canBuildOn(province)) {
    setStatus("Select one of your states before recruiting.");
    return;
  }
  if (province.regiment) {
    setStatus(`${province.name} already has a regiment. One regiment can occupy a state at a time.`);
    return;
  }
  if (player.money < 90) {
    setStatus(`You need $${recruitCost(player)} to recruit a regiment.`);
    return;
  }
  player.money -= recruitCost(player);
  province.regiment = {
    owner: state.playerId,
    strength: 32 + province.housing * (hasUpgrade(player, "urbanHousing") ? 12 : 8) + upgradeCount(player) * 3
  };
  addLog(`${player.name} raised a regiment in ${province.name}.`);
  render();
}

function openUpgrades() {
  state.upgradeModalOpen = true;
  renderUpgrades();
  els.upgradeModal.classList.remove("is-hidden");
}

function closeUpgrades() {
  state.upgradeModalOpen = false;
  els.upgradeModal.classList.add("is-hidden");
}

function purchaseUpgrade(upgradeId) {
  const player = getCountry(state.playerId);
  const upgrade = UPGRADES.find((candidate) => candidate.id === upgradeId);
  if (!player || !upgrade) return;
  if (hasUpgrade(player, upgrade.id)) {
    setStatus(`${upgrade.name} is already acquired.`);
    return;
  }
  if (upgrade.requires && !hasUpgrade(player, upgrade.requires)) {
    setStatus(`${upgrade.name} requires ${UPGRADES.find((candidate) => candidate.id === upgrade.requires)?.name}.`);
    return;
  }
  if (player.money < upgrade.cost) {
    setStatus(`You need $${upgrade.cost} for ${upgrade.name}.`);
    return;
  }
  player.money -= upgrade.cost;
  player.upgrades.add(upgrade.id);
  player.research = upgradeCount(player);
  if (upgrade.id === "centralCommand") player.morale += 0.1;
  addLog(`${player.name} acquired ${upgrade.name}.`);
  renderUpgrades();
  render();
}

function renderUpgrades() {
  const player = getCountry(state.playerId);
  if (!player) return;

  const branches = [...new Set(UPGRADES.map((upgrade) => upgrade.branch))];
  els.upgradeGrid.innerHTML = branches.map((branch) => `
    <section class="upgrade-branch">
      <p class="eyebrow">${branch}</p>
      <div class="upgrade-column">
        ${UPGRADES.filter((upgrade) => upgrade.branch === branch).map((upgrade) => renderUpgradeButton(player, upgrade)).join("")}
      </div>
    </section>
  `).join("");
}

function renderUpgradeButton(player, upgrade) {
  const acquired = hasUpgrade(player, upgrade.id);
  const locked = Boolean(upgrade.requires && !hasUpgrade(player, upgrade.requires));
  const affordable = player.money >= upgrade.cost;
  const classes = ["upgrade-node", acquired ? "is-acquired" : "", locked ? "is-locked" : ""].filter(Boolean).join(" ");
  return `
    <button class="${classes}" data-upgrade="${upgrade.id}" type="button" ${acquired || locked || !affordable ? "disabled" : ""}>
      <span class="upgrade-icon">${upgrade.icon}</span>
      <strong>${upgrade.name}</strong>
      <small>${acquired ? "Acquired" : locked ? "Locked" : `$${upgrade.cost}`}</small>
      <em>${upgrade.description}</em>
    </button>
  `;
}

function attackSelected() {
  const target = selectedState();
  if (!target || target.owner === state.playerId) {
    setStatus("Select an enemy state on the map, then press Attack.");
    return;
  }

  if (!isAtWar(state.playerId, target.owner)) {
    setStatus(`Declare war on ${getCountry(target.owner)?.name ?? "this country"} before attacking.`);
    return;
  }

  const source = bestSourceState(target, state.playerId);
  if (!source) {
    setStatus(`${target.name} is not connected to a ready regiment.`);
    return;
  }

  launchFrontline(source.id, target.id, true);
  render();
}

function declareWarOnSelected() {
  const target = selectedState();
  if (!target || target.owner === state.playerId) {
    setStatus("Select an enemy state before declaring war.");
    return;
  }
  declareWar(state.playerId, target.owner, true);
  render();
}

function declareWar(attackerId, defenderId, isPlayerAction = false) {
  if (!attackerId || !defenderId || attackerId === defenderId || isAtWar(attackerId, defenderId)) return false;
  const attacker = getCountry(attackerId);
  const defender = getCountry(defenderId);
  if (!attacker || !defender) return false;
  attacker.wars.add(defenderId);
  defender.wars.add(attackerId);
  addLog(`${attacker.name} declared war on ${defender.name}.`);
  if (isPlayerAction) setStatus(`War declared on ${defender.name}. Select a border state and attack when ready.`);
  return true;
}

function launchFrontline(fromStateId, toStateId, isPlayerAction = false) {
  const from = getState(fromStateId);
  const to = getState(toStateId);
  if (!from || !to || !from.regiment || from.regiment.owner === to.owner) return false;
  if (state.frontlines.some((front) => front.toStateId === toStateId || front.fromStateId === fromStateId)) return false;

  const attacker = getCountry(from.regiment.owner);
  const defender = getCountry(to.owner);
  if (!isAtWar(attacker.id, defender.id)) {
    declareWar(attacker.id, defender.id);
  }
  const committed = from.regiment.strength;
  from.regiment = null;
  state.frontlines.push({
    id: `${fromStateId}-${toStateId}-${Date.now()}-${Math.random()}`,
    attackerId: attacker.id,
    defenderId: defender.id,
    fromStateId,
    toStateId,
    committed,
    progress: 0
  });

  addLog(`${attacker.name} sent a ${Math.round(committed)}k regiment from ${from.name} toward ${to.name}.`);
  if (isPlayerAction) setStatus(`Attack underway: ${from.name} to ${to.name}.`);
  return true;
}

function resolveFrontlines() {
  const remaining = [];

  state.frontlines.forEach((frontline) => {
    const attacker = getCountry(frontline.attackerId);
    const defender = getCountry(frontline.defenderId);
    const from = getState(frontline.fromStateId);
    const to = getState(frontline.toStateId);
    if (!attacker || !defender || !from || !to) return;

    const defendingRegiment = to.regiment?.owner === to.owner ? to.regiment.strength : 18;
    const attackPower = frontline.committed * attackMultiplier(attacker) * attacker.morale;
    const defensePower = (defendingRegiment * defender.morale + to.factories * 8 + to.housing * 3) * defenseMultiplier(defender);
    frontline.progress += attackSpeedBonus(attacker) + (attackPower - defensePower) / 25;
    frontline.committed = Math.max(3, frontline.committed - Math.max(0.8, defensePower * casualtyMultiplier(attacker)));

    if (to.regiment) {
      to.regiment.strength = Math.max(0, to.regiment.strength - Math.max(1.4, attackPower * 0.04));
      if (to.regiment.strength <= 4) {
        to.regiment = null;
      }
    }

    if (frontline.progress >= 100) {
      captureState(attacker, to, frontline);
      return;
    }

    if (frontline.progress < -24 || frontline.committed < 7) {
      if (!from.regiment) {
        from.regiment = {
          owner: frontline.attackerId,
          strength: frontline.committed * 0.55
        };
      }
      addLog(`${attacker.name}'s assault on ${to.name} broke apart.`);
      return;
    }

    remaining.push(frontline);
  });

  state.frontlines = remaining;
}

function captureState(attacker, province, frontline) {
  const previousOwner = getCountry(province.owner);
  province.owner = attacker.id;
  province.regiment = {
    owner: attacker.id,
    strength: Math.max(16, frontline.committed * 0.7)
  };
  attacker.money += province.factories * 16 + province.housing * 5;
  addLog(`${attacker.name} captured ${province.name} from ${previousOwner?.name ?? "a rival"}.`);

  state.frontlines = state.frontlines.filter((front) => front.toStateId !== province.id && front.fromStateId !== province.id);
}

function runAiTurn() {
  state.countries.forEach((country) => {
    if (country.id === state.playerId || ownedStates(country.id).length === 0) return;

    const provinces = ownedStates(country.id);
    const emptyProvince = provinces.find((province) => !province.regiment);
    const weakestProvince = [...provinces].sort((a, b) => stateStrength(a) - stateStrength(b))[0];

    if (country.money > 190 && (country.aiMood === "builder" || totalTroops(country.id) > 100)) {
      country.money -= 130;
      weakestProvince.factories += 1;
    } else if (country.money > 85 && emptyProvince) {
      country.money -= Math.min(70, recruitCost(country));
      emptyProvince.regiment = {
        owner: country.id,
        strength: 26 + emptyProvince.housing * 6 + upgradeCount(country) * 4
      };
    }

    if (country.money > 220 && country.aiMood === "major") {
      const next = UPGRADES.find((upgrade) => !hasUpgrade(country, upgrade.id) && (!upgrade.requires || hasUpgrade(country, upgrade.requires)));
      if (next && country.money >= next.cost) {
        country.money -= next.cost;
        country.upgrades.add(next.id);
        country.research = upgradeCount(country);
      }
    }

    const target = bestAiTarget(country.id);
    if (!target) return;

    const source = bestSourceState(target, country.id);
    if (!source) return;

    const boldness = country.aiMood === "major" ? 1.05 : country.aiMood === "hawk" ? 0.92 : 0.72;
    if (stateStrength(source) * boldness > stateStrength(target) * 0.75 && Math.random() < 0.48) {
      launchFrontline(source.id, target.id);
    }
  });
}

function render() {
  const player = getCountry(state.playerId);
  const selected = selectedState();
  if (!player) return;

  els.playerName.textContent = `${player.name} command`;
  els.moneyChip.textContent = `$${Math.floor(player.money)}`;
  els.troopChip.textContent = `${Math.floor(totalTroops(player.id))}k troops`;
  els.factoryChip.textContent = `${totalFactories(player.id)} factories`;
  els.researchChip.textContent = `${upgradeCount(player)} upgrades`;
  els.timeChip.textContent = formatTime(state.elapsed);

  renderCountries();
  renderTroops();
  renderFrontlines();
  renderSelected(selected);
  renderLeaderboard();
  renderLog();
  updateButtons(selected);
  if (state.upgradeModalOpen) renderUpgrades();
}

function renderCountries() {
  state.countries.forEach((country) => {
    const land = document.querySelector(`#country-${country.id}`);
    const border = land?.parentElement?.querySelector(".country-border");
    if (!land || !border) return;

    const majorityOwner = majorityOwnerForCountry(country.id);
    const owner = getCountry(majorityOwner) ?? country;
    land.setAttribute("fill", owner.color);
    land.style.opacity = majorityOwner === state.playerId ? "0.92" : "0.70";
    border.classList.toggle("is-player", majorityOwner === state.playerId);
    border.classList.toggle("is-selected", selectedState()?.countryId === country.id);
  });

  state.states.forEach((province) => {
    const patch = document.querySelector(`[data-state="${province.id}"].state-control`);
    if (!patch) return;
    const owner = getCountry(province.owner);
    patch.setAttribute("fill", owner?.color ?? "#ffffff");
    patch.classList.toggle("is-selected-state", province.id === state.selectedStateId);
  });
}

function renderTroops() {
  const occupied = [...state.states.values()].filter((province) => province.regiment);
  els.troopLayer.innerHTML = occupied.map((province) => {
    const owner = getCountry(province.regiment.owner);
    const active = province.id === state.selectedStateId ? " is-selected-regiment" : "";
    return `
      <g class="regiment${active}" data-regiment-state="${province.id}" transform="translate(${province.x} ${province.y})">
        <circle class="regiment-ring" r="12"></circle>
        <circle class="regiment-dot" r="8" fill="${owner?.color ?? "#ffffff"}"></circle>
        <text class="regiment-count" y="25">${Math.round(province.regiment.strength)}</text>
      </g>
    `;
  }).join("");

  els.troopLayer.querySelectorAll("[data-regiment-state]").forEach((regiment) => {
    regiment.addEventListener("click", (event) => {
      event.stopPropagation();
      state.selectedStateId = regiment.dataset.regimentState;
      render();
    });
  });
}

function renderFrontlines() {
  els.frontlineLayer.innerHTML = state.frontlines.map((front) => {
    const from = getState(front.fromStateId);
    const to = getState(front.toStateId);
    if (!from || !to) return "";
    const progress = Math.min(0.95, Math.max(0.05, front.progress / 100));
    const x = from.x + (to.x - from.x) * progress;
    const y = from.y + (to.y - from.y) * progress;
    return `
      <line class="frontline" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"></line>
      <circle class="frontline-pulse" cx="${x}" cy="${y}" r="7"></circle>
    `;
  }).join("");
}

function renderSelected(province) {
  if (!province) {
    els.selectedName.textContent = "Select a state";
    els.selectedMeta.textContent = "Click land or a regiment dot to inspect a state.";
    return;
  }

  const country = getCountry(province.countryId);
  const owner = getCountry(province.owner);
  const relation = province.owner === state.playerId ? "Controlled by you" : `Controlled by ${owner?.name ?? "unknown"}`;
  const regiment = province.regiment ? `${Math.round(province.regiment.strength)}k regiment` : "No regiment";
  els.selectedName.textContent = `${country?.name ?? "Land"}: ${province.name}`;
  els.selectedMeta.textContent = `${relation}. ${regiment}. Factories: ${province.factories}. Housing: ${province.housing}.`;
}

function updateButtons(province) {
  const player = getCountry(state.playerId);
  const canBuild = canBuildOn(province);
  const source = province && province.owner !== state.playerId ? bestSourceState(province, state.playerId) : null;
  const enemyOwner = province && province.owner !== state.playerId ? province.owner : null;
  const atWar = enemyOwner ? isAtWar(state.playerId, enemyOwner) : false;
  const canDeclare = Boolean(enemyOwner && !atWar);
  const canAttack = Boolean(province && enemyOwner && atWar && source);

  els.buildBtn.disabled = !canBuild || player.money < factoryCost(player);
  els.housingBtn.disabled = !canBuild || player.money < 110;
  els.recruitBtn.disabled = !canBuild || player.money < recruitCost(player) || Boolean(province?.regiment);
  els.researchBtn.disabled = !player;
  els.declareBtn.disabled = !canDeclare;
  els.attackBtn.disabled = !canAttack;

  const activePlayerFront = province && state.frontlines.find((front) => {
    return front.attackerId === state.playerId && front.toStateId === province.id;
  });

  if (activePlayerFront) {
    setStatus(`Attack underway against ${province.name}: ${Math.max(0, Math.min(100, Math.round(activePlayerFront.progress)))}% progress.`);
  } else if (province && enemyOwner && !atWar) {
    setStatus(`${province.name} belongs to ${getCountry(enemyOwner)?.name}. Declare war before attacking.`);
  } else if (province && province.owner !== state.playerId && !source) {
    setStatus(`${province.name} is visible, but no adjacent friendly regiment can attack it.`);
  } else if (province && province.owner !== state.playerId) {
    setStatus(`${province.name} is in range. Press Attack selected to send a regiment.`);
  } else if (province) {
    setStatus(`${province.name} is yours. Build factories, build housing, or place a regiment here.`);
  }
}

function renderLeaderboard() {
  const rows = [...state.countries.values()]
    .filter((country) => ownedStates(country.id).length > 0)
    .sort((a, b) => powerScore(b.id) - powerScore(a.id))
    .slice(0, 7);

  els.leaderboard.innerHTML = rows.map((country) => `
    <li>
      <span>${country.name}</span>
      <strong>${Math.round(powerScore(country.id))}</strong>
    </li>
  `).join("");
}

function renderLog() {
  els.logEntries.innerHTML = state.log.slice(-7).reverse().map((entry) => `
    <div class="log-entry">${entry}</div>
  `).join("");
}

function bestAiTarget(countryId) {
  const borderTargets = ownedStates(countryId)
    .flatMap((province) => province.neighbors.map(getState))
    .filter(Boolean)
    .filter((province) => province.owner !== countryId)
    .filter((province) => isAtWar(countryId, province.owner) || Math.random() < 0.18);

  return uniqueById(borderTargets).sort((a, b) => stateStrength(a) - stateStrength(b))[0];
}

function bestSourceState(target, ownerId) {
  const candidates = target.neighbors
    .map(getState)
    .filter(Boolean)
    .filter((province) => province.owner === ownerId && province.regiment && !frontlineUsesState(province.id));

  return candidates.sort((a, b) => stateStrength(b) - stateStrength(a))[0];
}

function canBuildOn(province) {
  return Boolean(province && province.owner === state.playerId);
}

function frontlineUsesState(stateId) {
  return state.frontlines.some((front) => front.fromStateId === stateId || front.toStateId === stateId);
}

function selectedState() {
  return getState(state.selectedStateId);
}

function firstOwnedState(ownerId) {
  return [...state.states.values()].find((province) => province.owner === ownerId);
}

function firstState(countryId) {
  return statesForCountry(countryId)[0];
}

function statesForCountry(countryId) {
  return [...state.states.values()].filter((province) => province.countryId === countryId);
}

function ownedStates(ownerId) {
  return [...state.states.values()].filter((province) => province.owner === ownerId);
}

function nearestStateInCountry(countryId, x, y) {
  return statesForCountry(countryId).sort((a, b) => distancePoint(a, x, y) - distancePoint(b, x, y))[0];
}

function nearestStateBetween(countryId, otherCountryId) {
  const other = getCountry(otherCountryId);
  if (!other) return null;
  return statesForCountry(countryId).sort((a, b) => distancePoint(a, other.x, other.y) - distancePoint(b, other.x, other.y))[0];
}

function majorityOwnerForCountry(countryId) {
  const counts = new Map();
  statesForCountry(countryId).forEach((province) => {
    counts.set(province.owner, (counts.get(province.owner) ?? 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? countryId;
}

function totalTroops(ownerId) {
  return ownedStates(ownerId).reduce((sum, province) => {
    return sum + (province.regiment?.owner === ownerId ? province.regiment.strength : 0);
  }, 0);
}

function totalFactories(ownerId) {
  return ownedStates(ownerId).reduce((sum, province) => sum + province.factories, 0);
}

function totalHousing(ownerId) {
  return ownedStates(ownerId).reduce((sum, province) => sum + province.housing, 0);
}

function regimentCap(province, country) {
  return 36 + province.housing * (hasUpgrade(country, "urbanHousing") ? 22 : 16) + province.factories * 5 + upgradeCount(country) * 4 + (hasUpgrade(country, "centralCommand") ? 14 : 0);
}

function stateStrength(province) {
  return (province.regiment?.strength ?? 0) + province.factories * 5 + province.housing * 2;
}

function powerScore(ownerId) {
  const country = getCountry(ownerId);
  return totalTroops(ownerId) + totalFactories(ownerId) * 32 + totalHousing(ownerId) * 12 + (country?.money ?? 0) * 0.1 + upgradeCount(country) * 35;
}

function isAtWar(countryId, otherId) {
  return Boolean(getCountry(countryId)?.wars?.has(otherId));
}

function hasUpgrade(country, upgradeId) {
  return Boolean(country?.upgrades?.has(upgradeId));
}

function upgradeCount(country) {
  return country?.upgrades?.size ?? 0;
}

function incomeMultiplier(country) {
  return 1 + (hasUpgrade(country, "industrialFoundations") ? 0.25 : 0) + (hasUpgrade(country, "warEconomy") ? 0.15 : 0);
}

function housingIncomeMultiplier(country) {
  return hasUpgrade(country, "urbanHousing") ? 1.25 : 0.8;
}

function recoveryMultiplier(country) {
  return hasUpgrade(country, "fieldHospitals") ? 1.45 : 1;
}

function attackMultiplier(country) {
  return 1 + (hasUpgrade(country, "mechanizedColumns") ? 0.25 : 0) + (hasUpgrade(country, "airRecon") ? 0.1 : 0);
}

function attackSpeedBonus(country) {
  return 8 + (hasUpgrade(country, "mechanizedColumns") ? 2 : 0) + (hasUpgrade(country, "airRecon") ? 1.5 : 0);
}

function defenseMultiplier(country) {
  return hasUpgrade(country, "supplyDepots") ? 1.15 : 1;
}

function casualtyMultiplier(country) {
  return hasUpgrade(country, "fieldHospitals") ? 0.012 : 0.018;
}

function factoryCost(country) {
  return hasUpgrade(country, "industrialFoundations") ? 125 : 160;
}

function recruitCost(country) {
  return hasUpgrade(country, "warEconomy") ? 70 : 90;
}

function uniqueById(items) {
  return [...new Map(items.map((item) => [item.id, item])).values()];
}

function addLog(message) {
  state.log.push(message);
  if (state.log.length > 40) state.log.shift();
}

function setStatus(message) {
  els.statusText.textContent = message;
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainder = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function shortName(name) {
  return name
    .replace("United States", "USA")
    .replace("United Kingdom", "UK")
    .replace("South Africa", "S. Africa");
}

function hitRadius(country) {
  const large = new Set(["russia", "usa", "canada", "china", "brazil", "australia"]);
  const small = new Set(["unitedKingdom", "japan", "italy"]);
  if (large.has(country.id)) return { x: 72, y: 50 };
  if (small.has(country.id)) return { x: 46, y: 38 };
  return { x: 56, y: 42 };
}

function statePatchRadius(country) {
  const large = new Set(["russia", "usa", "canada", "china", "brazil", "australia"]);
  const small = new Set(["unitedKingdom", "japan", "italy", "poland"]);
  if (large.has(country.id)) return 46;
  if (small.has(country.id)) return 28;
  return 34;
}

function svgPoint(event) {
  const point = els.worldMap.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(els.worldMap.getScreenCTM().inverse());
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function distancePoint(a, x, y) {
  return Math.hypot(a.x - x, a.y - y);
}

function getCountry(id) {
  return state.countries.get(id);
}

function getState(id) {
  return state.states.get(id);
}

init();

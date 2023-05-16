const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const fetchCharacters = async () => {
  const response = await fetch(url);
  const characters = await response.json();
  return characters;
};

const normalizeFamilyName = (slicedName) => {
  const familyNamesMap = {
    tar: 'House Targaryen',
    sta: 'House Stark',
    bar: 'House Baratheon',
    lan: 'House Lannister',
    gre: 'House Greyjoy',
    cle: 'House Clegane',
    bae: 'House Baelish',
    sea: 'House Seaworth',
    unk: 'Unknown',
    tyr: 'House Tyrell',
    fre: 'Free Folk',
    tat: 'House Tarth',
    naa: 'House Naathi',
    non: 'None',
    bol: 'House Bolton',
    nah: 'House Naharis',
    lor: 'House Lorathi',
    mor: 'House Mormont',
    spa: 'House Sparrow',
    vip: 'House Viper',
    san: 'House Sand',
    wor: 'House Worm',
    qyb: 'House Qyburn',
    bro: 'House Bronn',
  };

  return familyNamesMap[slicedName];
};

const calculateHouseCounts = (characters) => {
  const houseCount = {};
  let slicedName;

  characters.forEach((character) => {
    if (character.family.startsWith('House')) {
      slicedName = character.family.slice(6).toLowerCase();
    } else {
      slicedName = character.family.toLowerCase();
    }
    slicedName = slicedName.slice(0, 3).toLowerCase();
    const houseName = normalizeFamilyName(slicedName);
    if (houseName) {
      houseCount[houseName] = (houseCount[houseName] || 0) + 1;
    }
  });

  return houseCount;
};

const renderChart = async () => {
  const characters = await fetchCharacters();
  const houseCounts = calculateHouseCounts(characters);

  for (const [key, value] of Object.entries(houseCounts)) {
    if (value === 1) {
      houseCounts.others = (houseCounts.others || 0) + 1;
      delete houseCounts[key];
    }
  }
  const chartLabels = Object.keys(houseCounts);
  const chartData = chartLabels.map((label) => houseCounts[label]);
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Characters in the House',
          data: chartData,
          backgroundColor: backgroundColors.slice(0, chartLabels.length),
          borderColor: borderColors.slice(0, chartLabels.length),
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();

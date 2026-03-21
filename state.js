// ── Single source of truth ──
const characterState = {
  character_name: '',
  race: '',
  occupation: '',
  branch: '',
  branch_element: '',
  bloodline: '',
  team: '',
  faith: '',
  age: '',
  height: '',
  weight: '',
  skin_color: '',
  eye_color: '',
  hair_color: '',
  player_name: '',
  image: null,
  skills: {},
  spells: {},
};

function persistState() {
  try { localStorage.setItem('dnd-character', JSON.stringify(characterState)); } catch(e) {}
}

function updateState(key, value) {
  characterState[key] = value;
  persistState();
}

function setRace(value) {
  characterState.race = value;
  const race = raceCnToEn[value];
  const raceStats = statsByRace[race];

  document.getElementById('race').value = value;

  // Reset bloodline
  characterState.bloodline = '';
  const bloodlineInput = document.getElementById('bloodline');
  bloodlineInput.value = '';
  document.querySelectorAll('#bloodline-dialog > div').forEach(d => d.style.display = 'none');
  const bloodlineOptions = document.querySelector(`#bloodline-dialog > .${race}`);
  if (bloodlineOptions) {
    bloodlineOptions.style.display = 'block';
    bloodlineInput.disabled = false;
    bloodlineInput.placeholder = '选择';
    bloodlineInput.parentElement.classList.remove('disabled');
  } else {
    bloodlineInput.disabled = true;
    bloodlineInput.placeholder = '';
    bloodlineInput.parentElement.classList.add('disabled');
  }

  // Check if current occupation is still valid for new race
  const occupationInput = document.getElementById('occupation');
  occupationInput.disabled = false;
  occupationInput.placeholder = '选择';
  occupationInput.parentElement.classList.remove('disabled');
  const currentOcc = occupationCnToEn[characterState.occupation];
  if (!currentOcc || !raceStats.occupations.includes(currentOcc)) {
    characterState.occupation = '';
    characterState.branch = '';
    characterState.branch_element = '';
    occupationInput.value = '';
    resetOccupationSideEffects();
    returnToOccupationOptions();
  } else if (typeof occupationsMetadata[currentOcc].attributes === 'function') {
    setOccupationAttributes(occupationsMetadata[currentOcc].attributes);
  }
  createOccupationOptions(raceStats.occupations, occupationInput);

  // Set ranges for age/height/weight, clear if out of bounds
  ['age', 'height', 'weight'].forEach(field => {
    const el = document.getElementById(field);
    const range = raceStats[field];
    el.min = range.min;
    el.max = range.max;
    el.placeholder = `输入${range.min}~${range.max}`;
    const val = parseInt(el.value);
    if (val && (val < range.min || val > range.max)) {
      el.value = '';
      characterState[field] = '';
    }
  });

  document.getElementById('speed').value = raceStats.speed;

  // Race skills on page4
  const skillsHtml = document.querySelector(`#race-dialog .card.${race} .accordion.skill .accordion-content`)?.innerHTML;
  if (skillsHtml) document.querySelector('.page4 .race-skills').innerHTML = skillsHtml;

  persistState();
}

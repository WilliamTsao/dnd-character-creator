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

function setOccupation(value) {
  resetOccupationSideEffects();
  characterState.occupation = value;
  characterState.branch = '';
  characterState.branch_element = '';
  characterState.team = '';
  characterState.faith = '';

  const occupationInput = document.getElementById('occupation');
  occupationInput.value = value;

  const occEN = occupationCnToEn[value];
  const occupation = occupationsMetadata[occEN];

  if (occupation.restrictions?.team) {
    document.querySelectorAll('.team-dialog-tile-container .tile').forEach(tile => {
      tile.style.display = occupation.restrictions.team.find(k => tile.classList.contains(k)) ? 'flex' : 'none';
    });
  }

  setOccupationAttributes(occupation.attributes);

  const hpGrowth = occupation.basics.find(({key}) => key === '生命成长').intValue;
  document.getElementById('hp-growth').value = hpGrowth;

  setAbilities(occupation.abilities);
  persistState();
}

function setBranch(value, element) {
  resetOccupationSideEffects();
  characterState.branch = value;
  characterState.branch_element = element || '';
  characterState.team = '';
  characterState.faith = '';

  const occEN = occupationCnToEn[characterState.occupation];
  const occupation = occupationsMetadata[occEN];
  document.getElementById('occupation').value = `${characterState.occupation}(${element || value})`;

  const branch = occupation.branches.find(b => b.value === value);
  if (!branch) return;

  if (branch.restrictions) {
    if (branch.restrictions.faith) {
      const faithInput = document.getElementById('faith');
      characterState.faith = deityMetadata[branch.restrictions.faith].name;
      faithInput.value = characterState.faith;
      faithInput.disabled = true;
      faithInput.parentElement.classList.add('disabled');
      faithInput.classList.add('locked');
    }
    if (branch.restrictions.team) {
      document.querySelectorAll('.team-dialog-tile-container .tile').forEach(tile => {
        tile.style.display = branch.restrictions.team.find(k => tile.classList.contains(k)) ? 'flex' : 'none';
      });
    }
  }

  setOccupationAttributes(branch.attributes, element);

  const hpGrowth = occupation.basics.find(({key}) => key === '生命成长').intValue;
  document.getElementById('hp-growth').value = hpGrowth;

  setAbilities(occupation.abilities);

  if (occEN === 'wizard') {
    createSpellDialog(spells);
  }

  persistState();
}

function setTeam(value) {
  characterState.team = value;
  document.getElementById('team').value = value;

  const faithInput = document.getElementById('faith');
  if (!faithInput.classList.contains('locked')) {
    characterState.faith = '';
    faithInput.value = '';
    faithInput.disabled = false;
    faithInput.placeholder = '选择';
    faithInput.parentElement.classList.remove('disabled');
  }

  const teams = [value.slice(0, 2), value.slice(2)];
  const availableDeities = Object.keys(deityMetadata).filter(deity =>
    deityMetadata[deity].team.includes(teams[0]) || deityMetadata[deity].team.includes(teams[1])
  );
  createFaithOptions(availableDeities, setFaith);

  persistState();
}

function setFaith(value) {
  characterState.faith = value;
  document.getElementById('faith').value = value;
  persistState();
}

function setBloodline(value) {
  characterState.bloodline = value;
  document.getElementById('bloodline').value = value;
  persistState();
}

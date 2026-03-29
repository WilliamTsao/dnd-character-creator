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
  const previousRace = characterState.race;
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
  if (!currentOcc || !raceStats.occupations.includes(currentOcc) || (currentOcc === 'cleric' && value === '赫利凡')) {
    characterState.occupation = '';
    characterState.branch = '';
    characterState.branch_element = '';
    occupationInput.value = '';
    resetOccupationSideEffects();
    returnToOccupationOptions();
  } else if (previousRace === '赫利凡') {
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

function setBranch(occupationCN, value, element) {
  resetOccupationSideEffects();
  characterState.occupation = occupationCN;
  characterState.branch = value;
  characterState.branch_element = element || '';
  characterState.team = '';
  characterState.faith = '';

  const occEN = occupationCnToEn[occupationCN];
  const occupation = occupationsMetadata[occEN];
  document.getElementById('occupation').value = `${occupationCN}(${element || value})`;

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

  if (
    occEN === 'wizard' ||
    occEN === 'sorcerer' ||
    occEN === 'druid'
  ) {
    const limits = occupation.spellLimits;
    limits.forEach((limit, i) => {
      const tier = document.querySelector(`.spell-tier[data-index="${i}"]`);
      for (let j = 0; j < limit; j++) {
        const spell = tier.querySelector(`.spell[data-index="${j}"]`);
        spell.querySelector('input#spell-name').removeAttribute('disabled');
        spell.querySelector('.interaction-cover').style.display = 'none';
      }
    });

    if (occEN === 'druid') {
      // createSpellDialog(druidSpells);
    } else {
      createSpellDialog(spells);
    }
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

function setSpell(tier, index, spellName) {
  characterState.spells[`${tier}_${index}`] = spellName;

  const spell = spells[tier].find(s => s.name === spellName);
  if (!spell) return;

  const slot = document.querySelector(`.page5 .spell-tier[data-index="${tier}"] .spell[data-index="${index}"]`);
  if (!slot) return;

  slot.querySelector('#spell-name').value = spell.name;
  slot.querySelector('.effect-text').innerText = spell.durration ? `${spell.effect}。持续时间：${spell.durration}` : spell.effect;
  slot.querySelector('#spell-ingrediants').value = spell.material;
  slot.querySelector('#spell-distance').value = spell.distance;
  slot.querySelector('#primary').checked = !!spell.action.isPrimary;
  slot.querySelector('#secondary').checked = !spell.action.isPrimary;

  persistState();
}

// ── Export ──
document.getElementById('export-btn').addEventListener('click', async () => {
  const filename = `${characterState.character_name || 'character'}.json`;
  const json = JSON.stringify(characterState, null, 2);
  const blob = new Blob([json], { type: 'application/json' });

  // Try Web Share API (mobile)
  try {
    const file = new File([blob], filename, { type: 'application/json' });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: filename });
      return;
    }
  } catch(e) {
    if (e.name === 'AbortError') return;
  }

  // Fallback: download
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

// ── Import ──
const importFile = document.getElementById('import-file');
document.getElementById('import-btn').addEventListener('click', () => importFile.click());
importFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      loadState(JSON.parse(evt.target.result));
    } catch(err) {
      alert('无法读取文件');
    }
  };
  reader.readAsText(file);
  importFile.value = '';
});

// ── Load from localStorage on page load ──
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('dnd-character');
  if (saved) {
    try { loadState(JSON.parse(saved)); } catch(e) {}
  }
});

// ── Apply a full state object (used by import and localStorage) ──
function loadState(data) {
  // Cascading fields in dependency order
  if (data.race) setRace(data.race);
  if (data.branch) {
    setBranch(data.occupation, data.branch, data.branch_element || undefined);
  } else if (data.occupation) {
    setOccupation(data.occupation);
  }
  if (data.team) setTeam(data.team);
  if (data.faith && !document.getElementById('faith').classList.contains('locked')) {
    setFaith(data.faith);
  }
  if (data.bloodline) setBloodline(data.bloodline);

  // Simple fields
  SIMPLE_FIELDS.forEach(id => {
    if (data[id] != null) {
      characterState[id] = data[id];
      document.getElementById(id).value = data[id];
    }
  });

  // Skills
  if (data.skills) {
    Object.entries(data.skills).forEach(([id, checked]) => {
      const cb = document.getElementById(id);
      if (cb && !cb.disabled && checked) {
        cb.checked = true;
        cb.dispatchEvent(new Event('change'));
      }
    });
  }

  // Spells
  if (data.spells) {
    Object.entries(data.spells).forEach(([key, name]) => {
      const [tier, index] = key.split('_');
      setSpell(tier, index, name);
    });
  }

  persistState();
}

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

import './style.css';
import updateList from './scorelist.js';
import { getScore, postScore } from './api.js';

const scoreBoard = document.getElementById('scoreboard');
const refreshBtn = document.getElementById('refresh-btn');
const submitForm = document.querySelector('.input-score');
const player = document.getElementById('name');
const score = document.getElementById('score');

async function updateScore() {
  const fetchAPI = await getScore();
  const updatedList = fetchAPI.result;
  updatedList.sort((a, b) => a.score - b.score);
  updateList(updatedList);
}

refreshBtn.addEventListener('click', async () => {
  scoreBoard.innerHTML = '';
  await updateScore();
});

submitForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const playerName = player.value;
  const playerScore = score.value;
  await postScore({ playerName, playerScore });
  player.value = '';
  score.value = '';
});

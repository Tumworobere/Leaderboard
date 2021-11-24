const scoreData = [
  { name: 'Anna', score: 99 },
  { name: 'Tanna', score: 75 },
  { name: 'Mara', score: 63 },
  { name: 'Samara', score: 75 },
  { name: 'Tamara', score: 53 },
  { name: 'Mable', score: 87 },
];

const ScoresTable = () => {
  const table = document.querySelector('.scoreboard-table');
  scoreData.forEach((data) => {
    const tr = document.createElement('tr');
    tr.className = 'table-row';
    const td = document.createElement('td');
    td.className = 'table-data';
    td.innerHTML = `${data.name}: ${data.score}`;

    tr.appendChild(td);
    table.appendChild(tr);
  });
};
export default ScoresTable;
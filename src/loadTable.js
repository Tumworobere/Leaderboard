const scoreData = [
  { name: 'Annah', score: 100 },
  { name: 'Tannah', score: 53 },
  { name: 'Samara', score: 67 },
  { name: 'Tamara', score: 51 },
  { name: 'Kamara', score: 23 },
  { name: 'Amara', score: 98 },
];

const loadTable = () => {
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
export default loadTable;
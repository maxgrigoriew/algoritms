function createTable() {
  let count = 0

  const table = document.createElement('table')
  table.style.width = '100%'
  const tbody = document.createElement('tbody')

  for(let i = 0; i < 10; i++) {
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    for (let j = 0; j < 10; j++) {
      const td = document.createElement('td')

      Object.assign(td.style, {
        border: '1px solid green',
        textAlign: 'center',
        padding: '10px',
        cursor: 'pointer',
      })

      td.textContent = count
      td.dataset.count = count++;

      tr.appendChild(td)
    }
  }

  table.appendChild(tbody)
  document.body.appendChild(table)

  return table;
}



const table = createTable()

table.addEventListener('click', (e) => {
  const cell = e.target.closest("td"); // Проверяем, был ли клик по ячейке
  if (!cell) return;

    document.querySelectorAll('td')
            .forEach((it) => it.style.background = '')
  e.target.style.background = 'red'

})

console.dir(window.document)
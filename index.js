const tbody$$ = document.querySelector('[data-function="board"]');
const attemps$ = document.querySelector('[data-function="attempts"]');
const score$ = document.querySelector('[data-function="score"]');

const imgmap$ = "./images/map.png";
const imgchest$ = "./images/chest.png";
const imgskull$ = "./images/skull.png";

alert("VAMOS A CREAR NUESTRO MAPA PARA BUSCAR EL TESORO");

const start = () => {
  const rows = prompt("Introduce la cantidad de filas");
  const columns = prompt("Introduce la cantidad de columnas");

  const X = Math.floor(Math.random() * rows);
  const Y = Math.floor(Math.random() * columns);
  console.log("X", X, "Y", Y);
  print(rows, columns, X, Y);
  console.log(rows, columns, X, Y);
};
let games = 0;

const print = (rows, columns, X, Y) => {
  let mapsum = `${rows} Filas, ${columns} Columnas`;
  let count$ = 0;

  for (let i = 0; i < rows; i++) {
    const rowsmap = document.createElement("tr");
    rowsmap.setAttribute("class", "rowsmap");

    for (let j = 0; j < columns; j++) {
      const columnsmap = document.createElement("td");
      columnsmap.innerHTML = `<img src="${imgmap$}" alt="Mapa del Tesoro" class="x"/>`;
      rowsmap.appendChild(columnsmap);

      columnsmap.addEventListener("click", () => {
        console.log(i, j);
        count$++;
        attemps$.innerHTML = `${count$}`;
        if (i == X && j == Y) {
          columnsmap.innerHTML = `<img src="${imgchest$}" alt="Tesoro" class="map"/>`;
          games++;
          printscore(games, count$, mapsum);
          reset(count$);
        } else {
          columnsmap.innerHTML = `<img src="${imgskull$}" alt="Calavera" class="map"/>`;
        }
      });
    }
    tbody$$.appendChild(rowsmap);
  }
};

const printscore = (games, count$, mapsum) => {
  const rowscore = document.createElement("tr");
  const colummscore = document.createElement("td");
  const colummscore2 = document.createElement("td");
  const colummscore3 = document.createElement("td");
  colummscore.setAttribute("class", "rowscore");
  colummscore2.setAttribute("class", "rowscore");
  colummscore3.setAttribute("class", "rowscore");
  colummscore.textContent = `${games}º`;
  colummscore2.textContent = count$;
  colummscore3.textContent = mapsum;
  rowscore.appendChild(colummscore);
  rowscore.appendChild(colummscore2);
  rowscore.appendChild(colummscore3);
  score$.appendChild(rowscore);
};

const reset = (count$) => {
  setTimeout(() => {
    alert(
      `¡ENHORABUENA! HAS ENCONTRADO EL TESORO EN ${count$} INTENTOS. VUELVE A INTENTARLO Y CONSIGUE UN NUEVO RECORD`
    );
    count$ = 0;
    attemps$.innerHTML = `${count$}`;
    const rows = document.querySelectorAll(".rowsmap");
    rows.forEach((row) => row.remove());
    start();
  }, 100);
};

start();

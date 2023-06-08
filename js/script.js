console.log('JS OK')


// # FUNCTION---------------------------------------

// Function per creare una cell
const createCell = (number) => {
    const cell = document.createElement('div');
    cell.classList.add ('cell');
    cell.innerText = number;
    return cell;
}

// Arrow Function per generare le bombe
const generateBombs = (totalNumberBombs, maxNumber) => {
    let bombs = [];

    while (bombs.length < totalNumberBombs){
        let randomNumber;
        do{ 
         randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        }while (bombs.includes(randomNumber));
        bombs.push(randomNumber);
    }
    return bombs;
}


// # INITIAN OPERATIONS----------------------------

// Recupero gli elementi dal DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button')
const scoreElement = document.getElementById('score')


// Preparo dati iniziali delle cell
const rows = 10;
const cols = 10;
const totalCells = cols * rows;

// Preparo dati iniziali delle bombe
// numero delle bombe
const totalBombs = 16;
// Punteggio massimo
const maxPoints = totalCells - totalBombs;

// Creo una variabile per le bombe (usando Arrow Function generateBombs)
const bombs = generateBombs(totalBombs, totalCells);
// stampo in console
console.log(bombs);

// Creo una variabile per lo score
let score = 0;


// Creo una variabile per tenere traccia dello stato della grid
let gridVisible = false;

// # Game Logic-------------------------------------

// Creo un Event Listener al click del Button
button.addEventListener ('click', function () {

    // Controllo se la grid è già stata visualizzata
    if (!gridVisible) {
        let cellNumber = 1;
      // reinderizzo le cell
      for(let i = 0; i < totalCells; i++) {
    
      // Creo le cell (nodi) con il numero corrispondente
      const cell = createCell(cellNumber);
      
      // # FUNCTION---------------------------------------
      // FUNCTION per gestire il click sulla cell
      const handleCellClick = (event) => {
      // Verifico se la cell è già stata cliccata
      if (cell.classList.contains('cell-clicked')) return;
      const clickedCell = event.target;
      const cellNumber = clickedCell.innerText;
      console.log('Numero della cella cliccata:', cellNumber);
      clickedCell.classList.add('cell-clicked');
      // Incemento lo score
      scoreElement.innerText = ++score;
     }

       // Aggiungo il gestore di eventi al click sulla cell
      cell.addEventListener('click', handleCellClick);
      // appendo  cell (nodi) a grid
      grid.appendChild(cell);
      // Incremento il numero della cell
        cellNumber++;
    }
    // Imposto lo stato della grid su true
    gridVisible = true;
}
});



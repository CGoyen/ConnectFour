/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

function makeBoard(){
  board = Array(HEIGHT).fill().map(() => Array(WIDTH));
}

//looking at the given solution, I thought the point was to use
//Javscript 2015, which made creating makeBoard() much longer
//than it should of


/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  htmlBoard = document.getElementById(`board`)

  // makes column tops with an element of table row
  // players will later click in the top row to select the column
  // to drop the piece in
  let top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  //makes a row for each column up to HEIGHT
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  for (let y = board.length -1 ; y >= 0; y--){
    if (board[y][x] == null){
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */


function placeInTable(y, x) {
  let createDiv = document.createElement(`div`);
  createDiv.classList.add(`p${currPlayer}`);
  createDiv.classList.add(`piece`);

  let tokenLocation = document.getElementById(`${y}-${x}`);
  tokenLocation.append(createDiv);

  // TODO: make a div and insert into correct table cell

}

/** endGame: announce game end */

function endGame(msg) {
  alert(msg)
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  placeInTable(y, x);
  board[y][x] = currPlayer;

  
  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }
  
  //I can use X and Y since they are not global
  //if(board.every(x => x.every(y => y !== undefined))){
  //if(board.every((x) => x.every(y => y === undefined ))){
  //decided that I can always check the array at index 0
  //as it is always the top row and you can not have a tie
  //without that being full
    if(!board[0].includes(undefined)){
    return endGame(`tie`);
  }
  
  // switch players
  console.log(currPlayer)
  currPlayer = currPlayer === 1 ? 2 : 1
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();

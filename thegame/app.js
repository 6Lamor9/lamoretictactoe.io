function toogle_animation() {
  const toogle_efect = document.querySelector(".mainu-toogle");
  const mainu = document.querySelector(".mainu");
  var myconter = 1;
    
    
  let ecfect = toogle_efect.addEventListener("click", e=>{
        if (myconter%2==0){
            document.querySelector(".line2").style.opacity = '1'
            document.querySelector(".line1").style.transform = ''
            document.querySelector(".line3").style.transform = ''
            mainu.style.display ="none"
            myconter++
        }
        else {
            document.querySelector(".line2").style.opacity = '0'
            document.querySelector(".line1").style.transform = 'translate(0px,0.5rem)  rotate(45deg)'
            document.querySelector(".line3").style.transform = 'translate(0px,-0.5rem) rotate(135deg)'
            mainu.style.display ="flex"
            myconter++
        }
        // toogle_efect.style.backgroundColor = "red"
    })};
toogle_animation()

function whoisplayer(number) {
  console.log(number);
  if (number%2==0) {
    player = oplayer
  }
  else {
    player = xplayer
  }
}

const squares = document.querySelectorAll('.spot');
const xplayer = '<p class="is-blue neonTextblue">❌</p>';
const oplayer = '<p class="is-red neonTextred">⭕</p>';
const xPlayCounter = document.getElementById("xplay-conter");
const oPlayCounter = document.getElementById("oplay-conter");
const resetButton = document.getElementById("reset-button");
let player = xplayer;
let reounds = 1;
let gameOver = false;
let xCounter = 0;
let oCounter = 0;



function handleClick(event) {
  if (gameOver) {
    return;
  }
  
  const square = event.target;
  
  if (square.innerHTML !== '') {
    return;
  }
  
  square.innerHTML = player;
  checkForWinner();
  player = player === xplayer ? oplayer : xplayer;
}

function checkForWinner() {
  const board = [    squares[0].textContent, squares[1].textContent, squares[2].textContent,
    squares[3].textContent, squares[4].textContent, squares[5].textContent,
    squares[6].textContent, squares[7].textContent, squares[8].textContent
  ];
  
  const winningCombinations = [    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      if (player === xplayer) {
        incrementXCounter();
      } else {
        incrementOCounter();
      }
      reounds++;
      whoisplayer(reounds)
      gameOver = true;
      setTimeout(resetBoard, 2000);
      
      return;
    }
  }
  
  if (board.every(square => square !== '')) {
    reounds++;
    whoisplayer(reounds)
    gameOver = true;
    setTimeout(resetBoard, 2000);
  }
};

function resetBoard() {
  squares.forEach(square => square.innerText = '');
  gameOver = false;
}

function incrementXCounter() {
  xCounter++;
  xPlayCounter.textContent = xCounter;
}

function incrementOCounter() {
  oCounter++;
  oPlayCounter.textContent = oCounter;
}

function resetGame() {
  xCounter = 0;
  oCounter = 0;
  xPlayCounter.textContent = xCounter;
  oPlayCounter.textContent = oCounter;
}

resetButton.addEventListener("click", resetGame);

squares.forEach(square => square.addEventListener('click', handleClick));

// let squares = document.querySelectorAll('.spot');
// let xplayer = '<p class="is-blue neonTextblue">❌</p>';
// let player = xplayer;
// let oplayer = '<p class="is-red neonTextred">⭕</p>'
// let gameOver = false;
// // this function lecen to event and if the spot is empte it set the player xo 
// function handleClick(event) {
//   let square = event.target;
//   if (gameOver || square.innerHTML !== '') {
//     return;
//   }
//   square.innerHTML = player;
//   checkForWinner();
//   player = (player === xplayer ? oplayer : xplayer);
// }

// function checkForWinner() {
//     // this is the game board
//   let board = [
//     squares[0].textContent, squares[1].textContent, squares[2].textContent,
//     squares[3].textContent, squares[4].textContent, squares[5].textContent,
//     squares[6].textContent, squares[7].textContent, squares[8].textContent
//   ];
//   let winningCombinations = [
//     // winer board list
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6]
//   ];
//   for (let i = 0; i < winningCombinations.length; i++) {
//     let [a, b, c] = winningCombinations[i];
//     if (board[a] && board[a] === board[b] && board[b] === board[c]) {
//       // alert(`${player} wins!`);
//       if (player == xplayer) {
//         incrementXCounter()
//       }
//       else if (player == oplayer) {
//         incrementOCounter()
//       }
//       gameOver = true;
//       setTimeout(resetBoard, 1000)

//       return;
//     }
//   }
//   if (board.every(square => square !== '')
// ) {
//     // alert("It's a tie!");
//     gameOver = true;
//     setTimeout(resetBoard, 3000)
//   }
// };


// for (let i = 0; i < squares.length; i++) {
//   squares[i].addEventListener('click', handleClick);
// }
// function resetBoard() {
//   // Get all the board cells
//   const cells = document.querySelectorAll('.spot');
  
//   // Clear the X's and O's from the cells
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].innerText = '';
//   }
//   gameOver = false;
// }
// // script.js
// let xCounter = 0;
// let oCounter = 0;

// const xPlayCounter = document.getElementById("xplay-conter");
// const oPlayCounter = document.getElementById("oplay-conter");
// const resetButton = document.getElementById("reset-button");

// function incrementXCounter() {
//   xCounter++;
//   xPlayCounter.textContent = xCounter;
// }

// function incrementOCounter() {
//   oCounter++;
//   oPlayCounter.textContent = oCounter;
// }

// function resetGame() {
//   xCounter = 0;
//   oCounter = 0;
//   xPlayCounter.textContent = xCounter;
//   oPlayCounter.textContent = oCounter;
// }

// resetButton.addEventListener("click", resetGame);
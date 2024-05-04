function minimax(board, depth, isMaximizing, alpha, beta) {
    const score = evaluate(board);
  
    // Base case: If the game is over or depth limit reached
    if (score === 10 || score === -10 || depth >= 5) {
      return score;
    }
  
    // Maximizing player's turn (O)
    if (isMaximizing) {
      let bestScore = -Infinity;
  
      // Loop through all empty cells
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            // Make the move
            board[i][j] = 'O';
  
            // Call minimax recursively to simulate opponent's move
            const score = minimax(board, depth + 1, false, alpha, beta);
  
            // Undo the move
            board[i][j] = '';
  
            // Update the best score and alpha
            bestScore = Math.max(bestScore, score);
            alpha = Math.max(alpha, score);
  
            // Alpha-beta pruning
            if (beta <= alpha) {
              break;
            }
          }
        }
      }
  
      return bestScore;
    } else {
      // Minimizing player's turn (X)
      let bestScore = Infinity;
  
      // Loop through all empty cells
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            // Make the move
            board[i][j] = 'X';
  
            // Call minimax recursively to simulate opponent's move
            const score = minimax(board, depth + 1, true, alpha, beta);
  
            // Undo the move
            board[i][j] = '';
  
            // Update the best score and beta
            bestScore = Math.min(bestScore, score);
            beta = Math.min(beta, score);
  
            // Alpha-beta pruning
            if (beta <= alpha) {
              break;
            }
          }
        }
      }
  
      return bestScore;
    }
  }

// Revised evaluation function to prioritize defense
function evaluate(board) {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        if (board[row][0] === 'X') return -10; // Opponent is close to winning, prioritize defense
        if (board[row][0] === 'O') return 10; // Bot is close to winning
      }
    }
  
    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        if (board[0][col] === 'X') return -10; // Opponent is close to winning, prioritize defense
        if (board[0][col] === 'O') return 10; // Bot is close to winning
      }
    }
  
    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      if (board[0][0] === 'X') return -10; // Opponent is close to winning, prioritize defense
      if (board[0][0] === 'O') return 10; // Bot is close to winning
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      if (board[0][2] === 'X') return -10; // Opponent is close to winning, prioritize defense
      if (board[0][2] === 'O') return 10; // Bot is close to winning
    }
  
    // If no immediate threat, return 0
    return 0;
  }

export function getRandomMove(board) {
    const emptyCells = [];
    board.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === "") {
          emptyCells.push({ rowIndex, cellIndex });
        }
      });
    });
  
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }

  
  // Function to get the best move using minimax algorithm
export function getBestMove(board, player) {
    let bestScore = -Infinity;
    let bestMove;
  
    // Loop through all empty cells
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = player;
  
          const score = minimax(board, 0, false);
  
          board[i][j] = '';
  
          if (score > bestScore) {
            bestScore = score;
            bestMove = { rowIndex: i, cellIndex: j };
          }
        }
      }
    }
  
    return bestMove || { rowIndex: 0, cellIndex: 0 };
  }
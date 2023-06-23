import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer: string = 'X';
  winner: string | null = null;

  makeMove(index: number) {
    if (!this.gameBoard[index] && !this.winner) {
      this.gameBoard[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.checkWinner();
    }
  }

  checkWinner() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.gameBoard[a] &&
        this.gameBoard[a] === this.gameBoard[b] &&
        this.gameBoard[a] === this.gameBoard[c]
      ) {
        this.winner = this.gameBoard[a];
        break;
      }
    }
  }

  resetGame() {
    this.gameBoard = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = 'X';
    this.winner = null;
  }
}

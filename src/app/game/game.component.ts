import { Component, OnInit } from '@angular/core';
import { Board } from '../board';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  public history: Array<Board> = [ new Board(), ];

  // tslint:disable-next-line: no-inferrable-types
  public xIsNext: boolean = true;

  public status: string;

  // tslint:disable-next-line: no-inferrable-types
  public stepNumber: number = 0;

  // tslint:disable-next-line: no-inferrable-types
  public sortingAscending: boolean = true;

  public wonSquares: Array<number>;

  constructor() { }

  ngOnInit(): void {
    this.recalculateStatus();
  }

  public handleClick(square: number): void {
    const history: Array<Board> = this.history.slice(0, this.stepNumber + 1);
    const current: Board = history[this.stepNumber];
    const board: Board = current.clone();

    if (this.calculateWinner(board) || board.squares[square]) {
      return;
    }

    board.squares[square] = this.xIsNext ? 'X' : 'O';

    board.lastMoveColumn = (square % 3) + 1;
    board.lastMoveRow = Math.floor(square / 3) + 1;
    board.moveNumber = this.stepNumber + 1;

    this.history = history.concat([board]);
    this.xIsNext = !this.xIsNext;
    this.stepNumber = history.length;

    this.recalculateStatus();
  }

  public jumpTo(step: number): void {
    this.stepNumber = step;
    this.xIsNext = (step % 2) === 0;

    this.recalculateStatus();
  }

  public sortAscending(): void {
    this.sortingAscending = true;
  }

  public sortDescending(): void {
    this.sortingAscending = false;
  }

  private calculateWinner(board: Board): Winner {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board.squares[a] && board.squares[a] === board.squares[b] && board.squares[a] === board.squares[c]) {
        return {
          winner: board.squares[a],
          wonSquares: lines[i],
        };
      }
    }
    return null;
  }

  private recalculateStatus(): void {
    const winner = this.calculateWinner(this.history[this.stepNumber]);
    let status: string;
    if (winner) {
      status = `Winner: ${winner.winner}`;
      this.wonSquares = winner.wonSquares;
    }
    else {
      this.wonSquares = null;
      const isDraw: boolean = this.history[this.stepNumber].squares.filter(val => val === null).length === 0;

      if (isDraw) {
        status = 'Draw';
      }
      else {
        const nextPlayer: string = this.xIsNext ? 'X' : 'O';
        status = `Next player: ${nextPlayer}`;
      }
    }

    this.status = status;
  }

}

class Winner {
  public winner: string;
  public wonSquares: Array<number>;
}

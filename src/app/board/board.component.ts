import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  public squares: Array<string>;

  // tslint:disable-next-line: no-inferrable-types
  public xIsNext: boolean = true;

  public status: string;

  constructor() {
    this.squares = Array(9).fill(null);
  }

  ngOnInit(): void {
    this.recalculateStatus();
  }

  public handleClick(square: number): void {
    const squares = this.squares.slice();

    squares[square] = this.xIsNext ? 'X' : 'O';

    this.squares = squares;
    this.xIsNext = !this.xIsNext;

    this.recalculateStatus();
  }

  private recalculateStatus(): void {
    const winner = this.calculateWinner(this.squares);
    let status: string;
    if (winner) {
      status = `Winner: ${winner}`;
    }
    else {
      const nextPlayer: string = this.xIsNext ? 'X' : 'O';
      status = `Next player: ${nextPlayer}`;
    }

    this.status = status;
  }

  private calculateWinner(squares: Array<string>): string {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  public history: Array<Array<string>> = [ Array(9).fill(null), ];

  // tslint:disable-next-line: no-inferrable-types
  public xIsNext: boolean = true;

  public status: string;

  constructor() { }

  ngOnInit(): void {
    this.recalculateStatus();
  }

  public handleClick(square: number): void {
    const current: Array<string> = this.history[this.history.length - 1];
    const squares: Array<string> = current.slice();

    if (this.calculateWinner(squares) || squares[square]) {
      return;
    }

    squares[square] = this.xIsNext ? 'X' : 'O';

    this.history = this.history.concat([squares]);
    this.xIsNext = !this.xIsNext;

    this.recalculateStatus();
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

  private recalculateStatus(): void {
    const winner = this.calculateWinner(this.history[this.history.length - 1]);
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

}

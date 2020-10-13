import { Component, OnInit } from '@angular/core';
import { Move } from '../move';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  public history: Array<Array<Move>> = [ Array<Move>(9).fill(null).map(() => new Move()), ];

  // tslint:disable-next-line: no-inferrable-types
  public xIsNext: boolean = true;

  public status: string;

  // tslint:disable-next-line: no-inferrable-types
  public stepNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.recalculateStatus();
  }

  public handleClick(square: number): void {
    const history: Array<Array<Move>> = this.history.slice(0, this.stepNumber + 1);
    const current: Array<Move> = history[this.stepNumber];
    const squares: Array<Move> = this.clone(current);

    if (this.calculateWinner(squares) || squares[square].player) {
      return;
    }

    squares[square].player = this.xIsNext ? 'X' : 'O';

    this.history = history.concat([squares]);
    this.xIsNext = !this.xIsNext;
    this.stepNumber = history.length;

    this.recalculateStatus();
  }

  public jumpTo(step: number): void {
    this.stepNumber = step;
    this.xIsNext = (step % 2) === 0;

    this.recalculateStatus();
  }

  private calculateWinner(squares: Array<Move>): string {
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
      if (squares[a] && squares[a].player === squares[b].player && squares[a].player === squares[c].player) {
        return squares[a].player;
      }
    }
    return null;
  }

  private recalculateStatus(): void {
    const winner = this.calculateWinner(this.history[this.stepNumber]);
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

  private clone(current: Move[]): Move[] {
    const result = current.map(move => move.clone());
    return result;
  }

}

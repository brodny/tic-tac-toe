import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from '../board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  @Input() public board: Board;

  @Input() public wonSquares: Array<number>;

  @Output() public squareClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public handleClick(square: number): void {
    this.squareClicked.emit(square);
  }

  public get isSquareWon(): Array<boolean> {
    const isSquareWon: Array<boolean> = Array(9).fill(false);

    if (this.wonSquares) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.wonSquares.length; ++i) {
        isSquareWon[this.wonSquares[i]] = true;
      }
    }

    return isSquareWon;
  }

}

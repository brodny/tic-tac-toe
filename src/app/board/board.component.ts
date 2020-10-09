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

  constructor() {
    this.squares = Array(9).fill(null);
  }

  ngOnInit(): void {
  }

  public handleClick(square: number): void {
    const squares = this.squares.slice();
    squares[square] = this.xIsNext ? 'X' : 'O';

    this.squares = squares;
    this.xIsNext = !this.xIsNext;
  }

}

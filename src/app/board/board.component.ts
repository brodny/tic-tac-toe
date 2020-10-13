import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Move } from '../move';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  @Input() public squares: Array<Move>;

  @Output() public squareClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public handleClick(square: number): void {
    this.squareClicked.emit(square);
  }

}

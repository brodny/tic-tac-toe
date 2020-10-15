import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from '../board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  @Input() public board: Board;

  @Output() public squareClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public handleClick(square: number): void {
    this.squareClicked.emit(square);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  public status: string = 'Next player: X';

  constructor() { }

  ngOnInit(): void {
  }

}

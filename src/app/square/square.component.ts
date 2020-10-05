import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.less']
})
export class SquareComponent implements OnInit {

  @Input() public value: string;

  constructor() { }

  ngOnInit(): void {
  }

}

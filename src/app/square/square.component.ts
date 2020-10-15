import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.less']
})
export class SquareComponent implements OnInit {

  @Input() public value: string;

  // tslint:disable-next-line: no-inferrable-types
  @Input() public isSquareWon: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public setValue(newValue: string): void {
    this.value = newValue;
  }

}

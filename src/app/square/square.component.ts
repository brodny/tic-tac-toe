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

  public buttonClicked(): void {
    this.setValue('X');
  }

  public setValue(newValue: string): void {
    this.value = newValue;
  }

}

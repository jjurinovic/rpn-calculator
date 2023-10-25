import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.scss']
})
export class CalculatorButtonsComponent {
  @Output() execute: EventEmitter<number | string> = new EventEmitter();

  public buttons = [...Array(10).keys(), 'C', 0, '.'];

  constructor() {
    // remove zero from beginning
    this.buttons.shift();
  }

  public onClick(value: number | string): void {
    this.execute.emit(value);
  }
}

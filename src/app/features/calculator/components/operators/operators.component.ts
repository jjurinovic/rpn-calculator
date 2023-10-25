import { Component, EventEmitter, Output } from '@angular/core';
import { Operator } from '../../models/operator.enum';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  @Output() execute: EventEmitter<Operator> = new EventEmitter();
  public operators: Operator[] = Object.values(Operator);


  public onClick(operator: Operator): void {
    this.execute.emit(operator);
  }
}

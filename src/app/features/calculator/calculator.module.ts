import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { CalculatorButtonsComponent } from './components/calculator-buttons/calculator-buttons.component'



@NgModule({
  declarations: [
    CalculatorComponent,
    ResultComponent,
    OperatorsComponent,
    CalculatorButtonsComponent
  ],
  exports: [CalculatorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CalculatorModule { }

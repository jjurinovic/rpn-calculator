import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  exports: [CalculatorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CalculatorModule { }

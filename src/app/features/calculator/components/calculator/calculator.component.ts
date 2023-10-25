import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {

  public inputValue: string = '';
  public result?: number;
  public showError: boolean = false;

  /** Method for resrictring entering wrong characters through input */
  public keyDown(event: any) {
    const pattern = /[0-9\+/\-/\./\//\*/\\/ ]/;
    if (!pattern.test(event.key) && event.key !== 'Backspace' &&  event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  /** Execute command pressed in template, adding number or operator */
  public execute(value: string | number): void {
    if (value !== 'C') {
      this.inputValue += value;
    } else {
      this.showError = false;
      this.result = undefined;
      this.inputValue = '';
    }
  }

  /** Method for calculation, called from template */
  public calculate(): void {
    this.showError = false;
    this.result = this.calculateResult(this.inputValue);
  }

  /**
   * Calculate result using Reverse polish notation
   * @param expr {string} expression for calculation
   * @returns {number}
   */
  private calculateResult(expr: string): number | undefined {
    // separate input string to tokens
    const tokens = expr.split(' ');
    const data: number[] = [];
    const operations = ['+', '-', '*', '/'];

    tokens.forEach((token) => {
      if (operations.includes(token)) {
        const x = data.pop() || 0;
        const y = data.pop() || 0;
        let result: number = 0;

        // execute operations
        if (token === '*') {
          result = x * y;
        } else if (token === '/') {
          result = y / x;
        } else if (token === '+') {
          result = x + y;
        } else if (token === '-') {
          result = x - y;
        }
        // result push to data array again
        data.push(parseFloat(result.toFixed(2)));
      } else if (+token) {
        data.push(parseFloat(token));
      } else {
        this.showError = true;
      }
    });

    if (data.length > 1) return undefined;
    return data.pop();
  }
}

import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all operator buttons', () => {
    const { debugElement } = fixture;
    const btns = debugElement.queryAll(By.css('.calculator__operator'));
    expect(btns.length).toEqual(4);
  });

  it('should render all  non operator buttons', () => {
    const { debugElement } = fixture;
    const btns = debugElement.queryAll(By.css('.calculator__button'));
    expect(btns.length).toEqual(13);
  });

  it('should show simple number like result on calculate', () => {
    component.inputValue = '22';
    const btn = fixture.debugElement.query(By.css('.calculator__calculate'));
    btn.nativeElement.click();
    fixture.detectChanges();

    const result = fixture.debugElement.query(By.css('.calculator__result'));
    expect(result.nativeElement.textContent).toContain(22);
  });

  it('should calculate expression and show value', () => {
    component.inputValue = '2 3 + 4 *';
    const btn = fixture.debugElement.query(By.css('.calculator__calculate'));
    btn.nativeElement.click();
    fixture.detectChanges();

    const result = fixture.debugElement.query(By.css('.calculator__result'));
    expect(result.nativeElement.textContent).toContain(20);
  });

  it('should calculate "2.1 1.7 + 3 *" and show value', () => {
    component.inputValue = '2.1 1.7 + 3 *';
    const btn = fixture.debugElement.query(By.css('.calculator__calculate'));
    btn.nativeElement.click();
    fixture.detectChanges();

    const result = fixture.debugElement.query(By.css('.calculator__result'));
    expect(result.nativeElement.textContent).toContain(11.4);
  });

  it('should calculate "10 6 9 3 + -11 * / * 17 + 5 +" and show value', () => {
    component.inputValue = '10 6 9 3 + -11 * / * 17 + 5 +';
    const btn = fixture.debugElement.query(By.css('.calculator__calculate'));
    btn.nativeElement.click();
    fixture.detectChanges();

    const result = fixture.debugElement.query(By.css('.calculator__result'));
    expect(result.nativeElement.textContent).toContain(21.5);
  });

  it('should calculate "2 5 * 4 + 3 2 * 1 + /" and show value', () => {
    component.inputValue = '2 5 * 4 + 3 2 * 1 + /';
    const btn = fixture.debugElement.query(By.css('.calculator__calculate'));
    btn.nativeElement.click();
    fixture.detectChanges();

    const result = fixture.debugElement.query(By.css('.calculator__result'));
    expect(result.nativeElement.textContent).toContain(2);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const validUser = {
    username: 'demo',
    password: '1234'
  }
  const updateForm =(username: string, password: string) => {
    fixture.componentInstance.loginForm.controls['username'].setValue(username);
    fixture.componentInstance.loginForm.controls['password'].setValue(password);
  }

  let authSpy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const { debugElement } = fixture;
    const h2 = debugElement.query(By.css('.login-title'))
    expect(h2.nativeElement.textContent).toContain('Reverse Polish Notation')
  });

  it('should have subtitle', () => {
    const { debugElement } = fixture;
    const h3 = debugElement.query(By.css('.login-subtitle'))
    expect(h3.nativeElement.textContent).toContain('CALCULATOR')
  });

  it('showError should be true when onSubmit()', () => {
    component.submit();
    expect(component.showError).toBeTruthy();
  });
​
  it('form value should update from when u change the input', (() => {
    updateForm(validUser.username, validUser.password);
    expect(component.loginForm.value).toEqual(validUser);
  }));
​
  it('Form invalid should be true when form is invalid', (() => {
    expect(component.loginForm.invalid).toBeTruthy();
  }));
});

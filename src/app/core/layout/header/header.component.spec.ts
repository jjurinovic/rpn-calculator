import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const { debugElement } = fixture;
    const title = debugElement.query(By.css('.header__title'));
    expect(title.nativeElement.textContent).toContain(
      'Reverse Polish Notation'
    );
  });

  it('should render logout', () => {
    const { debugElement } = fixture;
    const btn = debugElement.query(By.css('.header__logout'));
    expect(btn.nativeElement.textContent).toContain('Logout');
  });

  it('should logout to login page', fakeAsync(() => {
    let router = fixture.debugElement.injector.get(Router);
    const { debugElement } = fixture;

    const btn = debugElement.query(By.css('.header__logout'));
    btn.triggerEventHandler('click', null);
    tick();

    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs)
      .withContext('should nav to LoginComponent')
      .toBe('login');
  }));
});

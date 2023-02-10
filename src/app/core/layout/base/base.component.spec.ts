import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

import { BaseComponent } from './base.component';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseComponent, HeaderComponent],
      imports: [RouterModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-header', () => {
    const { debugElement } = fixture;
    const header = debugElement.query(By.css('app-header'));
    expect(header).toBeTruthy();
  });
});

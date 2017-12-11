import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferMoneyComponent } from './tranfer-money.component';

describe('TranferMoneyComponent', () => {
  let component: TranferMoneyComponent;
  let fixture: ComponentFixture<TranferMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranferMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

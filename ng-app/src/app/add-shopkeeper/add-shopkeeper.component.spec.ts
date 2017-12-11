import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopkeeperComponent } from './add-shopkeeper.component';

describe('AddShopkeeperComponent', () => {
  let component: AddShopkeeperComponent;
  let fixture: ComponentFixture<AddShopkeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopkeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopkeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

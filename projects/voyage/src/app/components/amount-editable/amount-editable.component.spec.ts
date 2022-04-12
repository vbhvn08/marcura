import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountEditableComponent } from './amount-editable.component';

describe('AmountEditableComponent', () => {
  let component: AmountEditableComponent;
  let fixture: ComponentFixture<AmountEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

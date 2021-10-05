import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdComponent } from './new-id.component';

describe('NewIdComponent', () => {
  let component: NewIdComponent;
  let fixture: ComponentFixture<NewIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

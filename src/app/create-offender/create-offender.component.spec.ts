import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOffenderComponent } from './create-offender.component';

describe('CreateOffenderComponent', () => {
  let component: CreateOffenderComponent;
  let fixture: ComponentFixture<CreateOffenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOffenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

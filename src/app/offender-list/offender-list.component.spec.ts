import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderListComponent } from './offender-list.component';

describe('OffenderListComponent', () => {
  let component: OffenderListComponent;
  let fixture: ComponentFixture<OffenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

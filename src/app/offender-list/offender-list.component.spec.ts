import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OffenderListComponent } from './offender-list.component';
import { OffenderListService } from './offender-list.service';

describe('OffenderListComponent', () => {
  let component: OffenderListComponent;
  let fixture: ComponentFixture<OffenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderListComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [OffenderListService]
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

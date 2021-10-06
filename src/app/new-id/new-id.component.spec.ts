import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdComponent } from './new-id.component';
import {HttpClientModule} from '@angular/common/http';
import { NewIdService } from './new-id.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('NewIdComponent', () => {
  let component: NewIdComponent;
  let fixture: ComponentFixture<NewIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIdComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [NewIdService]
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

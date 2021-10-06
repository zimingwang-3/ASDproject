import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreManageComponent } from './store-manage.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreManageService } from './store-manage.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('StoreManageComponent', () => {
  let component: StoreManageComponent;
  let fixture: ComponentFixture<StoreManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreManageComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [StoreManageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

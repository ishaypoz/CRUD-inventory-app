import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountComponent } from './update-count.component';

describe('UpdateCountComponent', () => {
  let component: UpdateCountComponent;
  let fixture: ComponentFixture<UpdateCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassStyleComponent } from './ng-class-style.component';

describe('NgClassStyleComponent', () => {
  let component: NgClassStyleComponent;
  let fixture: ComponentFixture<NgClassStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

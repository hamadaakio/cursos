import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaPaiComponent } from './directiva-pai.component';

describe('DirectivaPaiComponent', () => {
  let component: DirectivaPaiComponent;
  let fixture: ComponentFixture<DirectivaPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaPaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

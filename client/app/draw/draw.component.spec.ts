import { async,
  ComponentFixture,
  TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DrawComponent } from './draw.component';

describe('Component: About', () => {
  let component: DrawComponent;
  let fixture: ComponentFixture<DrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

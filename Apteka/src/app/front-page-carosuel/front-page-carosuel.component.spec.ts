import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageCarosuelComponent } from './front-page-carosuel.component';

describe('FrontPageCarosuelComponent', () => {
  let component: FrontPageCarosuelComponent;
  let fixture: ComponentFixture<FrontPageCarosuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPageCarosuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageCarosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

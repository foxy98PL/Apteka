import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCarosuelComponent } from './about-us-carosuel.component';

describe('AboutUsCarosuelComponent', () => {
  let component: AboutUsCarosuelComponent;
  let fixture: ComponentFixture<AboutUsCarosuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsCarosuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsCarosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoHomeComponent } from './ro-home.component';

describe('RoHomeComponent', () => {
  let component: RoHomeComponent;
  let fixture: ComponentFixture<RoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsDelProfileComponent } from './ins-del-profile.component';

describe('InsDelProfileComponent', () => {
  let component: InsDelProfileComponent;
  let fixture: ComponentFixture<InsDelProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsDelProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsDelProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

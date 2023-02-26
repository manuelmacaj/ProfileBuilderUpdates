import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWorkComponent } from './profile-work.component';

describe('ProfileWorkComponent', () => {
  let component: ProfileWorkComponent;
  let fixture: ComponentFixture<ProfileWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

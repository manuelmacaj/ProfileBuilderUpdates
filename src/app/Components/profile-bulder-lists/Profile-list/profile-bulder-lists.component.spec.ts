import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBulderListsComponent } from './profile-bulder-lists.component';

describe('ProfileBulderListsComponent', () => {
  let component: ProfileBulderListsComponent;
  let fixture: ComponentFixture<ProfileBulderListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBulderListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBulderListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

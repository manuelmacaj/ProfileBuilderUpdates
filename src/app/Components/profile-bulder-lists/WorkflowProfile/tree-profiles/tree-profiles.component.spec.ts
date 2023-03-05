import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeProfilesComponent } from './tree-profiles.component';

describe('TreeProfilesComponent', () => {
  let component: TreeProfilesComponent;
  let fixture: ComponentFixture<TreeProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewProfileComponent } from './dialog-new-profile.component';

describe('DialogNewProfileComponent', () => {
  let component: DialogNewProfileComponent;
  let fixture: ComponentFixture<DialogNewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

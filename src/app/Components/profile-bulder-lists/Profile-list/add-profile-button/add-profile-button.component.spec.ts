import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddProfileButtonComponent} from './add-profile-button.component';

describe('AddProfileButtonComponent', () => {
  let component: AddProfileButtonComponent;
  let fixture: ComponentFixture<AddProfileButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProfileButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddProfileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

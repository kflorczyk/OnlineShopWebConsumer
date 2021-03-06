import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChangeEmailComponent } from './profile-change-email.component';

describe('ProfileChangeEmailComponent', () => {
  let component: ProfileChangeEmailComponent;
  let fixture: ComponentFixture<ProfileChangeEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChangeEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChangeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

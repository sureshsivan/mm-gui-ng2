import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileIndComponent } from './user-profile-ind.component';

describe('UserProfileIndComponent', () => {
  let component: UserProfileIndComponent;
  let fixture: ComponentFixture<UserProfileIndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileIndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

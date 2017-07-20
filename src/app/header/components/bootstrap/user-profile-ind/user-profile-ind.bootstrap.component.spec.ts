import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileIndBootstrapComponent } from './user-profile-ind.bootstrap.component';

describe('UserProfileIndComponent', () => {
  let component: UserProfileIndBootstrapComponent;
  let fixture: ComponentFixture<UserProfileIndBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileIndBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileIndBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

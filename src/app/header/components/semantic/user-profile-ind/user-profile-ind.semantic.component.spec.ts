import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileIndSemanticComponent } from './user-profile-ind.semantic.component';

describe('UserProfileIndComponent', () => {
  let component: UserProfileIndSemanticComponent;
  let fixture: ComponentFixture<UserProfileIndSemanticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileIndSemanticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileIndSemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

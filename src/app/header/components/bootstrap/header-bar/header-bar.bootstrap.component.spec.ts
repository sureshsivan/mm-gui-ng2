import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarBootstrapComponent } from './header-bar.bootstrap.component';

describe('HeaderBarComponent', () => {
  let component: HeaderBarBootstrapComponent;
  let fixture: ComponentFixture<HeaderBarBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBarBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

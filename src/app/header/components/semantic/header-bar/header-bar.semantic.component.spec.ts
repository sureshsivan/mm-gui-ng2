import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarSemanticComponent } from './header-bar.semantic.component';

describe('HeaderBarComponent', () => {
  let component: HeaderBarSemanticComponent;
  let fixture: ComponentFixture<HeaderBarSemanticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBarSemanticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarSemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

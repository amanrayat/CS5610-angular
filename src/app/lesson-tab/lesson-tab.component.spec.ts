import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTabComponent } from './lesson-tab.component';

describe('LessonTabComponent', () => {
  let component: LessonTabComponent;
  let fixture: ComponentFixture<LessonTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

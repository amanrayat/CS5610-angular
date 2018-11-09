import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPillComponent } from './topic-pill.component';

describe('TopicPillComponent', () => {
  let component: TopicPillComponent;
  let fixture: ComponentFixture<TopicPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

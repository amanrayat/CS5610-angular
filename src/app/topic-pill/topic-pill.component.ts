import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/topic.sevice.client';

@Component({
  selector: 'app-topic-pill',
  templateUrl: './topic-pill.component.html',
  styleUrls: ['./topic-pill.component.css']
})
export class TopicPillComponent implements OnInit {
  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];

  constructor(private activatedRoute : ActivatedRoute , private topicService : TopicServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>
      this.updateParams(params)
    )
  }
  updateParams(params){
    this.lessonId = params ['lessonId'];
    this.courseId = params ['courseId'];
    this.moduleId = params ['moduleId'];
    this.topicId = params ['topicId'];
    this.updateTopic(this.lessonId);
  }
  updateTopic (lessonId) {
    if(lessonId){
      this.topicService.findTopicForLesson(lessonId).then((response : any) =>
        this.topics = [...response]
      )
    }

  }

}

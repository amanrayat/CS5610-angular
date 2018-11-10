import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/topic.sevice.client';

@Component({
  selector: 'app-topic-pill',
  templateUrl: './topic-pill.component.html',
  styleUrls: ['./topic-pill.component.css']
})
export class TopicPillComponent implements OnInit {
  lessonId;
  topics = [];

  constructor(private activatedRoute : ActivatedRoute , private topicService : TopicServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>
      this.updateParams(params)
    )
  }
  updateParams(params){
    this.lessonId = params ['lessonId']
    this.updateTopic(this.lessonId);
  }
  updateTopic (lessonId) {
    this.topicService.findTopicForLesson(lessonId).then((response : any) =>
      this.topics = response
    )
  }

}

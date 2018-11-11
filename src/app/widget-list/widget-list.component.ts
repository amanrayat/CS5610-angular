import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  courseId;
  moduleId;
  lessonId;
  topicId;
  widgets = [];
  constructor(private activatedRoute : ActivatedRoute , private widgetService : WidgetServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>
      this.updateParams(params)
    )
  }
  updateParams(params){
    this.courseId  = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.updateWidget(this.topicId)
  }
  updateWidget(topicId){
    if(topicId){
      this.widgetService.findWidgetsForTopic(topicId).then(response=> this.widgets = [...response])
    }
  }

}

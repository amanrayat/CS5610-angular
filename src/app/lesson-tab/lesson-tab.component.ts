import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/lesson.service.client';

@Component({
  selector: 'app-lesson-tab',
  templateUrl: './lesson-tab.component.html',
  styleUrls: ['./lesson-tab.component.css']
})
export class LessonTabComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute , private lessonService : LessonServiceClient) { }

  moduleId;
  courseId;
  lessons = [];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>
        this.updateParams(params)
    )
  }
  updateParams(params){
    this.moduleId = params ['moduleId'];
    this.courseId = params ['courseId'];
    this.updateTopic(this.moduleId);
  }
  updateTopic(moduleId) {
    this.lessonService.findLessonByModule(moduleId).then((response : any) => this.lessons = response)
  }


}

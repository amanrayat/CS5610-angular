import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/module.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules = [];
  courseId ;
  moduleId ;
  constructor( private activatedRoute : ActivatedRoute , private moduleService : ModuleServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>
      this.updateParams(params)
    )
  }
  updateParams (params) {
    this.courseId  = params['courseId'];
    this.moduleId = params['moduleId'];
    this.updateModule(this.courseId)
  }

  updateModule(courseId){
    this.moduleService.findModuleForCourse(courseId).then((response:any)=>this.modules = response)
  }

}

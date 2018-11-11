import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor( private courseService  : CourseServiceClient , private router : Router ) { }
   courses = []

  ngOnInit() {
    this.courseService.findAllCourses().then((courses:any) =>{
      console.log(courses)
      this.courses = [...courses];
    })
  }

  details(courseId) {
    console.log("the course id is " , courseId)
    this.router.navigate(['/course' , courseId])
  }

}

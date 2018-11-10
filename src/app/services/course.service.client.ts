import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch('http://localhost:8080/api/courses'
      , {credentials : 'include'})
      .then(response => {
      return response.json();
    });
  }
  findCourseById(courseId){
    return fetch('http://localhost:8080/api/course/'+courseId
      , {credentials : 'include'})
      .then(response => {
      return response.json();
    });
}
}

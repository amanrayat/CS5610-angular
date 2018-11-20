import {Injectable} from '@angular/core';
let URL = "https://guarded-lake-67462.herokuapp.com"

@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch(URL +'/api/courses'
      , {credentials : 'include'})
      .then(response => {
      return response.json();
    });
  }
  findCourseById(courseId){
    return fetch(URL +'/api/course/'+courseId
      , {credentials : 'include'})
      .then(response => {
      return response.json();
    });
}
}

import {Injectable} from '@angular/core';
let URL = "https://guarded-lake-67462.herokuapp.com"

@Injectable()
export class LessonServiceClient {
  findAllLessons() {
    return fetch(URL +'/api/lesson/'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findLessonById(lessonId) {
    return fetch(URL +'/api/lesson/'+lessonId
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findLessonByModule(moduleId) {
    return fetch(URL +'/api/module/'+moduleId+'/lesson'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
}

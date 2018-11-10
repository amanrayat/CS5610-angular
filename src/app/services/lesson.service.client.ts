import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findAllLessons() {
    return fetch('https://localhost:8080/api/lesson/'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findLessonById(lessonId) {
    return fetch('https://localhost:8080/api/lesson/'+lessonId
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findLessonByModule(moduleId) {
    return fetch('https://localhost:8080/api/module/'+moduleId+'/lesson'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
}

import {Injectable} from '@angular/core';
let URL = "https://guarded-lake-67462.herokuapp.com"

@Injectable()
export class TopicServiceClient {
  findAllTopic() {
    return fetch(URL +'/api/topic/'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findTopicById (topicId) {
    return fetch(URL +'/api/topic/'+topicId
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findTopicForLesson (lessonId) {
    return fetch(URL +'/api/lesson/'+lessonId+'/topic'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
}

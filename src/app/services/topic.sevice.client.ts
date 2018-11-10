import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findAllTopic() {
    return fetch('https://localhost:8080/api/topic/'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findTopicById (topicId) {
    return fetch('https://localhost:8080/api/topic/'+topicId
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findTopicForLesson (lessonId) {
    return fetch('https://localhost:8080/api/lesson/'+lessonId+'topic'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
}

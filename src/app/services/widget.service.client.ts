import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  findAllWidgets() {
    return fetch('http://localhost:8080/api/widget/'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findWidgetsForTopic(topicId) {
    return fetch('http://localhost:8080/api/topic/'+topicId+'/widget'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findWidgetById(widgetId) {
    return fetch('http://localhost:8080/api/widget/'+widgetId
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }

}

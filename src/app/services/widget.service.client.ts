import {Injectable} from '@angular/core';
let URL = "https://guarded-lake-67462.herokuapp.com"

@Injectable()
export class WidgetServiceClient {
  findAllWidgets() {
    return fetch(URL +'/api/widget/'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findWidgetsForTopic(topicId) {
    return fetch(URL +'/api/topic/'+topicId+'/widget'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findWidgetById(widgetId) {
    return fetch(URL +'/api/widget/'+widgetId
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }

}

import {Injectable} from '@angular/core';
let URL = "https://guarded-lake-67462.herokuapp.com"

@Injectable()
export class ModuleServiceClient {
  finddAllModules() {
    return fetch(URL +'/api/module'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findModuleById(moduleId) {
    return fetch(URL +'/api/module/'+moduleId
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findModuleForCourse(courseId) {
    return fetch(URL +'/api/course/'+courseId+'/module'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
}

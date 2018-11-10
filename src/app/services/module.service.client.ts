import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  finddAllModules() {
    return fetch('https://localhost:8080/api/module'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findModuleById(moduleId) {
    return fetch('https://localhost:8080/api/module/'+moduleId
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
  findModuleForCourse(courseId) {
    return fetch('https://localhost:8080/api/course/'+courseId+'/module'
      , {credentials : 'include'})
      .then(response => {
        return response.json();
      });
  }
}

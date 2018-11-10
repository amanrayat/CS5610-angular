import { Routes , RouterModule} from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabComponent} from './lesson-tab/lesson-tab.component';

const appRoutes : Routes = [
  { path : 'courses' , component : CourseGridComponent},
  { path : 'course/:courseId' , component : ModuleListComponent },
  { path: 'course/:courseId/module/:moduleId', component: ModuleListComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: ModuleListComponent },

];
export const  routing = RouterModule.forRoot(appRoutes);

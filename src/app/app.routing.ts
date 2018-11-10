import { Routes , RouterModule} from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';

const appRoutes : Routes = [
  { path : 'courses' , component : CourseGridComponent},
  { path : 'course/:id' , component : ModuleListComponent }
];
export const  routing = RouterModule.forRoot(appRoutes);

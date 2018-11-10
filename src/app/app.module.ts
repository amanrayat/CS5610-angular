import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabComponent } from './lesson-tab/lesson-tab.component';
import { TopicPillComponent } from './topic-pill/topic-pill.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {CourseServiceClient} from './services/course.service.client';
import { routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabComponent,
    TopicPillComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CourseServiceClient ,
              ModuleListComponent ,
              LessonTabComponent ,
              TopicPillComponent ,
              WidgetListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

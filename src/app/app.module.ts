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
import {ModuleServiceClient} from './services/module.service.client';
import {LessonServiceClient} from './services/lesson.service.client';
import {TopicServiceClient} from './services/topic.sevice.client';
import {WidgetServiceClient} from './services/widget.service.client';

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
              ModuleServiceClient ,
              LessonServiceClient ,
              TopicServiceClient ,
              WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list-component/tasks-list-component';
import { TaskItemComponent } from './tasks-list-component/task-item/task-item.component';
import { HighlightDirective } from './common/highligh/highlight.directive';
import { TasksManageComponent } from './tasks-manage/tasks-manage.component';
import { TaskViewComponent } from './tasks-manage/task-view/task-view.component';
import { TaskEditComponent } from './tasks-manage/task-edit/task-edit.component';
import { TasksService } from './common/tasks.service';
import { UtilsService } from './common/utils.service';


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskItemComponent,
    HighlightDirective,
    TasksManageComponent,
    TaskViewComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TasksService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksListComponent } from './tasks-list-component/tasks-list-component';
import { TasksManageComponent } from './tasks-manage/tasks-manage.component';
import { TaskViewComponent } from './tasks-manage/task-view/task-view.component';
import { TaskEditComponent } from './tasks-manage/task-edit/task-edit.component';

const appRoutes: Routes = [
  {path: '', component: TasksListComponent},
  {path: 'tasks-manage', component: TasksManageComponent, children: [
    {path: ':id/view', component: TaskViewComponent},
    {path: ':id/edit', component: TaskEditComponent}
  ]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

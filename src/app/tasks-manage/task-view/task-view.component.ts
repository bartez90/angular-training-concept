import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from 'src/app/common/task.model';
import { TasksService } from 'src/app/common/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit, OnDestroy {
  task: Task;
  sub: Subscription;

  constructor(private tasksService: TasksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.task = this.tasksService.getTasks()
        .filter((task => task.id === params.id))[0];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

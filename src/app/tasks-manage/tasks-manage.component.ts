import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../common/tasks.service';
import { Task } from '../common/task.model';

@Component({
  selector: 'app-tasks-manage',
  templateUrl: './tasks-manage.component.html',
  styleUrls: ['./tasks-manage.component.scss']
})
export class TasksManageComponent implements OnInit {
  taskSelected = false;
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

  onTaskSelect(task: Task) {
    this.selectedTask = task;
    this.taskSelected = true;

    if (task.edited) {
      this.router.navigate([task.id, 'view'], {relativeTo: this.route});
    } else {
      this.router.navigate([task.id, 'edit'], {relativeTo: this.route});
    }
  }
}

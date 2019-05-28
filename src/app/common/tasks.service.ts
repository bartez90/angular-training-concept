import { Task } from './task.model';
import { Subject } from 'rxjs';
import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';

@Injectable()

export class TasksService {
    private tasks: Task[] = [new Task('1', 'task 1', false), new Task('2', 'task 2', false)];
    id = this.tasks.length;
    tasksChanged  = new Subject<Task[]>();

    constructor(private utilsService: UtilsService) {}

    getTasks() {
        return this.tasks.slice();
    }

    getTask(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    addTask(taskName: string) {
        this.id = this.utilsService.increment(this.id);
        this.tasks.push(new Task(this.id.toString(), taskName, false));
        this.tasksChanged.next(this.tasks);
        // this.tasksChanged.error('something went wrong');
        // this.tasksChanged.complete();
    }

    isLimitReached(limit: number): boolean {
        return this.tasks.length < limit;
    }

    updateTask(updatedTask: Task) {
        let task = this.getTask(updatedTask.id);
        task = updatedTask;
    }
}

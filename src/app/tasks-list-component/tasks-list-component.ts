import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../common/tasks.service';
import { Task } from '../common/task.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tasks-list',
    // template: `
    //     <div>dupa</div>
    // `,
    // styles: ['div { color: blue;']
    templateUrl: './tasks-list-component.html',
    styleUrls: ['./tasks-list-component.scss']
})

export class TasksListComponent implements OnInit, OnDestroy {
    // @ViewChild('newTaskInput') newTaskInput: ElementRef;
    tasks: Task[] = [];
    // day: string = 'today';
    canAddTask = false;
    maxTasks = 4;
    selectedTaskText: string;
    sub: Subscription;

    constructor(private tasksService: TasksService) {}

    ngOnInit() {
        this.tasks = this.tasksService.getTasks();
        this.sub = this.tasksService.tasksChanged.subscribe(
            (tasks: Task[]) => this.tasks = tasks,
            (error: Error) => console.log(error)
        );
    }

    getDay(): string {
        return 'Today';
    }

    // addTask(input: HTMLInputElement) {
    //     // this.tasks.push(this.newTaskInput.nativeElement.value);
    //     this.tasks.push(input.value);
    // }
    addTask(input: HTMLInputElement) {
        this.tasksService.addTask(input.value);
    }

    checkInput(e) {
        this.canAddTask = e.target.value ? true : false;
    }

    // isLimitReached(): boolean {
    //     return this.tasks.length < this.maxTasks;
    // }
    isLimitReached(): boolean {
        return this.tasksService.isLimitReached(this.maxTasks);
    }

    getTextColor(): string {
        return this.tasks.length < 4 ? 'blue' : 'red';
    }

    onTaskSelect(taskText: string) {
        this.selectedTaskText = taskText;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

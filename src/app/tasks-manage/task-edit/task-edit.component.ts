import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/common/tasks.service';
import { Task } from 'src/app/common/task.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit, OnDestroy {
    @ViewChild('form') editForm: NgForm;
    priorities = ['low', 'medium', 'high'];
    task: Task;
    routeParamsSub: Subscription;
    valueChangesSub: Subscription;
    date: Date;
    invalidDate = false;

    constructor(
        private tasksService: TasksService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.date = new Date();

        this.routeParamsSub = this.route.params.subscribe(params => {
            this.task = this.tasksService.getTask(params.id);
        });

        this.valueChangesSub = this.editForm.valueChanges.subscribe(form => {
            const datePipe = new DatePipe('en-US');
            this.invalidDate = form.deadline < datePipe.transform(new Date(), 'yyyy-MM-dd') ? true : false;
        });
    }

    // onSave(form: NgForm) {
    //     console.dir(form);
    // }
    onSave() {
        this.task.name = this.editForm.value.name;
        this.task.priority = this.editForm.value.priority;
        this.task.deadline = this.editForm.value.deadline;
        this.task.details = this.editForm.value.details;
        this.task.edited = true;
        this.tasksService.updateTask(this.task);

        // this.editForm.reset();

        this.router.navigate(['../', 'view'], {relativeTo: this.route});
    }


    onFillData() {
        this.editForm.setValue({
            name: 'bar',
            priority: 'medium',
            deadline: '2019-05-29',
            additionalData: {
                email: this.editForm.value.additionalData.email,
                randomInput: this.editForm.value.additionalData.randomInput,
            },
            details: 'fdsfddsfds'
        });

        this.editForm.form.patchValue({name: 'asdf'});
    }

    ngOnDestroy() {
        this.routeParamsSub.unsubscribe();
        this.valueChangesSub.unsubscribe();
    }
}

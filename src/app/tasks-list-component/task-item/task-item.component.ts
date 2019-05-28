import { Component, OnInit, Input, EventEmitter, Output, ContentChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/common/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() taskTextClicked = new EventEmitter<string>();
  // @Output('selectedTask') taskTextClicked = new EventEmitter<string>();
  @ContentChild('content') content: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onTaskTextClick() {
    this.taskTextClicked.emit(this.task.name);
    console.log(this.content.nativeElement.textContent);
  }

}

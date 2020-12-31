import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../modules/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  constructor() { }

  /*親コンポーネントから値を受け取る*/
  @Input() task: Task;
  @Output() updateTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();
  onToggleDone(task: Task): void {
    this.updateTask.emit(task);
  }
  onToggleDelete(task: Task): void {
    this.deleteTask.emit(task);
  }

  isOverdue(task: Task): boolean {
    /*タスクが完了済ではい && タスクに設定されている期日が「今日の0時0分0秒0ミリ秒」よりも以前である*/
    return !task.done && task.deadline.getTime() < (new Date()).setHours(0 , 0, 0, 0);
  }
  ngOnInit(): void {
  }

}

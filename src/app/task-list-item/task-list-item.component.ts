import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  constructor() { }

  /*親コンポーネントから値を受け取る*/
  @Input() task;

  isOverdue(task): boolean {
    /*タスクが完了済ではい && タスクに設定されている期日が「今日の0時0分0秒0ミリ秒」よりも以前である*/
    return !task.done && task.deadline < (new Date()).setHours(0 , 0, 0, 0);
  }

  ngOnInit(): void {
  }

}

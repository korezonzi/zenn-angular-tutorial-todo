import { Component, OnInit } from '@angular/core';
import {Task} from '../../modules/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }
  tasks: Task[] = [
    { title: 'angular学習',    done: false, deadline: new Date('2021-01-01')},
    { title: 'scalaアプリ作成', done: false, deadline: new Date('2021-02-01')},
    { title: 'js学習',         done: true,  deadline: new Date('2020-10-01')},
  ];
  addTask(task: Task): void {
    this.tasks.push(task);
  }
  // tslint:disable-next-line:typedef

  ngOnInit(): void {
  }

}

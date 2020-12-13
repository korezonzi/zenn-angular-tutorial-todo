import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }
  tasks = [
    { title: 'angular学習', done: false, deadline: new Date('2021-01-01') },
    { title: 'scalaアプリ作成', done: false, deadline: new Date('2021-02-01')},
    { title: 'js学習', done: true, deadline: new Date('2020-10-01')},
  ];
  newTask = {
    title: '',
    deadline: new Date(),
  };

  // tslint:disable-next-line:typedef
  addTask()  {
    this.tasks.push({title: this.newTask.title, done: false, deadline: new Date(this.newTask.deadline)});
    this.newTask = {
      title: '',
      deadline: new Date(),
    };
  }

  ngOnInit(): void {
  }

}

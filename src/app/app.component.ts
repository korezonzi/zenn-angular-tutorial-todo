import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*title = 'zenn-angular-todo';*/
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

  isOverdue(task): boolean {
    /*タスクが完了済ではい && タスクに設定されている期日が「今日の0時0分0秒0ミリ秒」よりも以前である*/
    return !task.done && task.deadline < (new Date()).setHours(0 , 0, 0, 0);
  }
}

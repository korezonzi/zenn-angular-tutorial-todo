import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../../modules/task';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  constructor(
    private firestore: AngularFirestore,
  ) { }
  tasks: Task[] = [];
  subscription: Subscription;
  addTask(task: Task): void {
    this.firestore.collection('tasks').add(task);
  }
  // tslint:disable-next-line:typedef

  /*ngOnInit:コンポーネントが初期化された直後に実行される。
  * subscribe: 変更が検知されるたびに実行*/
  ngOnInit(): void {
    this.subscription = this.firestore.collection('tasks').valueChanges().subscribe((tasks: any) => {
      this.tasks = tasks.map(task => {
        task.deadline = task.deadline ? task.deadline.toDate() : null;
        return task;
      }) as Task[];
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

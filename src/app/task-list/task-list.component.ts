import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromDocument, Task, TaskDocument} from '../../modules/task';
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
    const clone = Object.assign({}, task);
    delete clone.id;
    this.firestore.collection('tasks').add(clone);
  }
  updateTask(task: Task): void {
    const clone = Object.assign({}, task);
    delete clone.id;
    this.firestore.collection('tasks').doc(task.id).update(clone);
  }
  deleteTask(task: Task): void {
    this.firestore.collection('tasks').doc(task.id).delete();
  }
  // tslint:disable-next-line:typedef

  /*ngOnInit:コンポーネントが初期化された直後に実行される。
  * subscribe: 変更が検知されるたびに実行*/
  ngOnInit(): void {
    this.subscription = this.firestore.collection('tasks').valueChanges({idField: 'id'}).subscribe((tasks: TaskDocument[]) => {
      this.tasks = tasks.map(fromDocument).sort((a: Task, b: Task) => a.createdAt.getTime() - b.createdAt.getTime());
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

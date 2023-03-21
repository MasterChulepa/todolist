import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../shared/dto/todo-interface';
import { TodoListManagerService } from './todo-list-manager.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[]; //localstorage
  todoSubscribtion!: Subscription;

  constructor(private todosListManager: TodoListManagerService){
    this.todos = this.todosListManager.getTodos();
  }

  ngOnInit(): void {
    this.todoSubscribtion =  this.todosListManager.todosChanged.subscribe((todos: Todo[]) => this.todos = todos);
  }

  ngOnDestroy(): void {
    this.todoSubscribtion.unsubscribe();
  }

}

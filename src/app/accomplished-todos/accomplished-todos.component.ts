import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../shared/dto/todo-interface';
import { TodoListManagerService } from '../todo-list/todo-list-manager.service';

@Component({
  selector: 'app-accomplished-todos',
  templateUrl: './accomplished-todos.component.html',
  styleUrls: ['./accomplished-todos.component.scss'],
})
export class AccomplishedTodosComponent implements OnInit, OnDestroy {
  accTodos: Todo[];
  todoSubscribtion!: Subscription;

  constructor(private todoListManager: TodoListManagerService) {
    this.accTodos = todoListManager.getAccTodos();
  }
  ngOnInit(): void {
    this.todoSubscribtion = this.todoListManager.accTodosChanged.subscribe( todos => this.accTodos = todos)
  }

  ngOnDestroy(): void {
    this.todoSubscribtion.unsubscribe();
  }


}

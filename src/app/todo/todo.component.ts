import { Component, Input } from '@angular/core';
import { Todo } from '../shared/dto/todo-interface';
import { TodoFormManagerService } from '../todo-form/todo-form-manager.service';
import { TodoListManagerService } from '../todo-list/todo-list-manager.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todoData!: Todo;

  constructor(private todoListManager: TodoListManagerService, private todoFormManager: TodoFormManagerService) {}

  onDelete() {
    this.todoListManager.delete(this.todoData.id);
  }
  onAccomplish(){
    this.todoListManager.accomplish(this.todoData)
  }
  onFillForm(){
    if(!this.todoData.accomplished)
      this.todoFormManager.fillForm(this.todoData.id);
  }
}

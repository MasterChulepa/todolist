import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../shared/dto/todo-interface';


const testSet:Todo[] = [{id: 0, title:'Test1', comment:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, blanditiis.'},
{id: 1, title:'Test2', comment:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, blanditiis.'}];


@Injectable({
  providedIn: 'root'
})
export class TodoListManagerService {
  private todos: Todo[] = [...testSet];
  private accomplishedTodos: Todo[] = [];
  todosChanged = new Subject<Todo[]>();
  accTodosChanged = new Subject<Todo[]>();

  add(todo: Todo){
    this.todos.push(todo);
    this.todosChanged.next(this.getTodos());
  }
  

  delete(id: number){
    this.todos = this.todos.filter( todo => todo.id != id);
    this.todosChanged.next(this.getTodos());
  }

  change(todo: Todo, id: number){
    const todoToChange = this.todos.find(element => element.id === id);
    if(todoToChange){
      const index = this.todos.indexOf(todoToChange); 
      this.todos[index] = todo;
    }
    this.todosChanged.next(this.getTodos());
  }

  accomplish(todo: Todo){
    this.accomplishedTodos.push({...todo, accomplished:true});
    this.delete(todo.id);
    this.accTodosChanged.next(this.getAccTodos());
  }

  getTodos(){
    return this.todos.slice();
  }
  getAccTodos(){
    return this.accomplishedTodos.slice();
  }
}

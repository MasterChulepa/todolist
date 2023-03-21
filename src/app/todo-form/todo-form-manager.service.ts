import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../shared/dto/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoFormManagerService {
  formFilled = new Subject<number>;
  fillForm( i: number){
    this.formFilled.next(i);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodoListManagerService } from '../todo-list/todo-list-manager.service';
import { TodoFormManagerService } from './todo-form-manager.service';

const MAX_LENGTH = 24;
const MIN_LENGTH = 4;

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnDestroy{
  form!: FormGroup;
  counter = 2;
  formSunscription!: Subscription;
  editMode = false;
  currentId!: number;


  constructor(private todoListManager: TodoListManagerService, private todoFormManager: TodoFormManagerService){}
  

  setTodo(){
    if(!this.editMode){
      this.todoListManager.add({id: this.counter, ...this.form.value});
      this.counter++;
    }
    else{
      this.todoListManager.change({id: this.currentId, ...this.form.value}, this.currentId)
    }
    this.form.reset();
    this.editMode = false;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.maxLength(MAX_LENGTH), Validators.minLength(MIN_LENGTH), Validators.required]),
      comment: new FormControl('I\' ll have to do it tonight.', Validators.minLength(MIN_LENGTH))
    });
    this.formSunscription = this.todoFormManager.formFilled.subscribe(i =>{
      this.currentId = i;
      const todo = this.todoListManager.getTodos().find(element => element.id === i);
      if(todo){
        this.editMode = true;
        this.form.setValue({
          title: todo.title,
          comment: todo.comment
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.formSunscription.unsubscribe();
  }
  
}

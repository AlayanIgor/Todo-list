import { Component } from '@angular/core';

export interface Todo {
  text: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: Todo[] = [];

  addTodo(newTodo: Todo) {
    this.todoList.unshift(newTodo);
    localStorage.setItem('myTodoList', JSON.stringify(this.todoList));
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem('myTodoList', JSON.stringify(this.todoList));
  }

  constructor() {
    let data: any = localStorage.getItem('myTodoList');
    this.todoList = JSON.parse(data);
  }
}

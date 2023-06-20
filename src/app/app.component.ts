import { Component } from '@angular/core';

export interface Todo {
  text: string;
  isChecked: boolean;
}

const localStorageKey: string = 'myTodoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: Todo[] = [];

  addTodo(newTodo: Todo) {
    this.todoList.unshift(newTodo);
    localStorage.setItem(localStorageKey, JSON.stringify(this.todoList));
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(this.todoList));
  }

  constructor() {
    let data: any = localStorage.getItem(localStorageKey);
    if (JSON.parse(data)) {
      this.todoList = JSON.parse(data);
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() index!: number;
  @Input() list!: Todo[];
  @Output() removeTodo = new EventEmitter<number>();

  deleteTodo() {
    this.removeTodo.emit(this.index);
  }

  changeTodoIsChecked() {
    this.todo.isChecked = !this.todo.isChecked;
    localStorage.setItem('myTodoList', JSON.stringify(this.list));
  }
}

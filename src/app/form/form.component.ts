import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  text = '';
  @Output() addTodo = new EventEmitter<Todo>();
  addNewTodo() {
    if (this.text.trim()) {
      const newTodo: Todo = {
        text: this.text,
        checked: false,
      };
      this.addTodo.emit(newTodo);
    }

    this.text = '';
  }
}

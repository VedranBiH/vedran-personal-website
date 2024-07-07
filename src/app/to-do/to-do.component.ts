import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { Todo } from '../models/to-do.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'to-do',
  standalone: true,
  imports: [FormsModule, CheckboxModule, ButtonModule, NgFor],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent {
  newTodo: string = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

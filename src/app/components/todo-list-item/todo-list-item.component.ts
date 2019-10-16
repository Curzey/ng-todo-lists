import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { immutableSplice } from 'src/utils/array';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent {
  @ViewChild('todoInput', { static: false }) todoInput: ElementRef<
    HTMLInputElement
  >;
  
  constructor(private _data: DataService) { }

  
  addTodo(title: string): void {
    if (!title) {
      return;
    }
    this._data.todos = [...this._data.todos, Todo.create(title)];
    this.todoInput.nativeElement.value = '';

    this._data.testTodos();
  }

  updateTodo(todo: Todo) {
    this._data.todos = immutableSplice(
      this._data.todos,
      this._data.todos.findIndex(t => t.created === todo.created),
      1,
      todo
    );
  }
}

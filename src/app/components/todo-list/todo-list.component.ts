import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { TodoList } from 'src/app/models/TodoList';
import { Todo } from 'src/app/models/Todo';
import { immutableSplice } from 'src/utils/array';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @ViewChild('todoListInput', { static: false }) todoListInput: ElementRef<
    HTMLInputElement
  >;

  constructor(private _data: DataService) { }

  
  addTodoList(title: string): void {
    if (!title) {
      return;
    }
    this._data.todoLists = [...this._data.todoLists, TodoList.create(title)];
    this.todoListInput.nativeElement.value = '';

    this._data.testLists();    
  }
}

import { Injectable } from '@angular/core';
import { TodoList } from 'src/app/models/TodoList';
import { Todo } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public todoLists: TodoList[] = [];
  public todos: Todo[] = [];
  
  getLists(): TodoList[] {
    return this.todoLists;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  testLists() {
    return console.log(this.todoLists);
  }

  testTodos() {
    return console.log(this.todos);
  }
}

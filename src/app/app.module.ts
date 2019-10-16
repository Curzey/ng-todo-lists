import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },             
  { path: ':id', component: TodoListItemComponent }           
];

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoListItemComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

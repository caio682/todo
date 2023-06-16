import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem, TodoType } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  types: TodoType[] = [
    { name: 'Personal', color: '#ff8080' },
    { name: 'Work', color: '#b3ffb3' }
  ];
  private list = new TodoList('Caio');

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.todoItems.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.todoItems.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string) {
    if (newItem !== '') {
      this.list.addItem(newItem);
    }
  }

  editItem(item: TodoItem) {
    item.editing = true;
  }

  saveItem(item: TodoItem) {
    item.editing = false;
  }

  showComplete: boolean = false;
}

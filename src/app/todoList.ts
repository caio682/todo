import { TodoItem } from './todoItem';

export class TodoList {
  public user: string;
  public todoItems: TodoItem[] = [];

  constructor(user: string) {
    this.user = user;
  }

  addItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }
}

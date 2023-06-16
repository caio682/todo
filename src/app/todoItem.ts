// todoItem.ts

export class TodoType {
  constructor(public name: string, public color: string) {}
}

export class TodoItem {
  constructor(
    public task: string,
    public types: TodoType[] = [],
    public complete: boolean = false,
    public editing: boolean = false
  ) {}
}

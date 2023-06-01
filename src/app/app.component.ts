import { Component } from '@angular/core';
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";

// Essas linhas de código importam os módulos necessários para o componente, incluindo o Component 
// do Angular, bem como os módulos TodoList e TodoItem definidos localmente.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// O decorador @Component é usado para definir as metadados do componente. Aqui, estamos definindo o 
// seletor do componente como 'app-root', o que significa que ele será usado como uma tag <app-root> no arquivo HTML. Além disso, estamos especificando o arquivo de modelo do componente como './app.component.html' e os arquivos de estilo como './app.component.css'.
export class AppComponent {
  private list = new TodoList("Bob", [
    new TodoItem("Go for run",),
    new TodoItem("Get flowers"),
    new TodoItem("Collect tickets"),
  ]);
  get username(): string {
    return this.list.user;
  }
  get itemCount(): number {
    return this.list.items
      .filter(item => !item.complete).length;
  }
  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
    }
    addItem(newItem: string) {
      if (newItem != "") {
      this.list.addItem(newItem);
      }
      }
      showComplete: boolean = false;
}
  // Propriedade list: É uma instância da classe TodoList, que recebe o nome "Bob" e uma lista de itens de tarefas
  // (TodoItem). Esses itens de tarefas são inicializados com descrições e um valor booleano opcional para indicar
  // se a tarefa está completa.
// Método username(): É um getter que retorna o valor da propriedade user da lista de tarefas (list).
// Método itemCount(): É um getter que retorna o número de itens de tarefas incompletas na lista de tarefas (list). 
// Ele filtra a lista de itens usando a propriedade complete de cada item e retorna o comprimento do resultado.
// Essa classe representa a lógica do componente e fornece os dados necessários para o template correspondente.
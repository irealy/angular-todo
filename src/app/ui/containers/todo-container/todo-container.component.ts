import { Component, ChangeDetectionStrategy } from '@angular/core';
import TodoService from '../../services/todo.services';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoService]
})
export class TodoContainerComponent {

  constructor(
    private todoList: TodoService
  ) {}

}

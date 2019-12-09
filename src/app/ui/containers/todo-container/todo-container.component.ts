import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import TodoService from '../../services/todo.services';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoService]
})
export class TodoContainerComponent implements OnInit {

  constructor(
    private todoList: TodoService
  ) {}

  ngOnInit() {
  }

}

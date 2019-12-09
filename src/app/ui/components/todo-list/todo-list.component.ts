import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  @Input() list: TodoItem[];

  @Output() updateTask: EventEmitter<object> = new EventEmitter<object>();
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateHeadingTask: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  update(value: object) {
    this.updateTask.emit(value);
  }

  delete(id: number) {
    this.deleteTask.emit(id);
  }

  updateHeading(value: object) {
    this.updateHeadingTask.emit(value);
  }

  trackByFn(index: number, item: {id: number}) {
    return item.id;
  }

}

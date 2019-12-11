import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() list: TodoItem[];

  @Output() updateTask = new EventEmitter<object>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() updateHeadingTask = new EventEmitter<object>();

  update(value: object): void {
    this.updateTask.emit(value);
  }

  delete(id: number): void {
    this.deleteTask.emit(id);
  }

  updateHeading(value: object): void {
    this.updateHeadingTask.emit(value);
  }

  trackByFn(index: number, item: {id: number}): number {
    return item.id;
  }

}

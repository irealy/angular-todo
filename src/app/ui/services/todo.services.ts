import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { TodoMode } from '../models/todo-mode';

@Injectable({
  providedIn: 'root'
})
export default class TodoService {
  list: TodoItem[] = [];
  mode: TodoMode = 'all';
  toggleFlag = false;

  getList(): TodoItem[] {
    switch (this.mode) {
      case 'all':
        return this.list;
      case 'active':
        return this.getFilteredList({ completed: false });
      case 'completed':
        return this.getFilteredList({ completed: true });
    }
  }

  getFilteredList(state: {completed: boolean}): TodoItem[] {
    return this.list.filter(item => item.checked === state.completed);
  }

  changeMode(mode: TodoMode): void {
    this.mode = mode;
  }

  addNewTask(heading: string): void {
    this.list = [...this.list, {
      heading,
      checked: false,
      id: new Date().getTime()
    }];
  }

  updateTask(task: { id: number, checked: boolean}): void {
    const { id, checked } = task;
    const index = this.findTaskIndex(id);
    this.list[index] = {...this.list[index], checked};
  }

  updateHeading(value: { heading: string, id: number}): void {
    const { id, heading } = value;
    const index = this.findTaskIndex(id);
    this.list[index] = {...this.list[index], heading};
  }

  deleteTask(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }

  findTaskIndex(id: number): number {
    return this.list.findIndex(item => item.id === id);
  }

  toggleAll(): void {
    this.toggleFlag = !this.toggleFlag;

    this.list = this.list.map(item => (
      {
        ...item,
        checked: this.toggleFlag,
      }
    ));
  }

  clearCompleted(): void {
    this.list = this.getFilteredList({ completed: false });
  }

  get todoCounter(): string {
    const text = this.availableTasks.length === 1 ? 'item' : 'items';
    return `${this.availableTasks.length} ${text} left`;
  }

  get availableTasks(): TodoItem[] {
    return this.getFilteredList({ completed: true });
  }



}

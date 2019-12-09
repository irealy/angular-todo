import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputFieldComponent } from './input-field/input-field.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoItemComponent,
    TodoListComponent,
    InputFieldComponent
  ]
})
export class ComponentsModule { }

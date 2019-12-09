import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    TodoContainerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    TodoContainerComponent
  ]
})
export class ContainersModule { }

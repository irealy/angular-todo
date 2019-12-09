import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContainersModule } from './ui/containers/containers.module';
import { ComponentsModule } from './ui/components/components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContainersModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

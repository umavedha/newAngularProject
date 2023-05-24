import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppComponent } from './my-app/my-app.component';
import { FormsModule } from '@angular/forms';
import { TestLifeCycleComponent } from './test-life-cycle/test-life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    TestLifeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

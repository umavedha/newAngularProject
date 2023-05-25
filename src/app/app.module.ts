import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppComponent } from './my-app/my-app.component';
import { FormsModule } from '@angular/forms';
import { TestLifeCycleComponent } from './test-life-cycle/test-life-cycle.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    TestLifeCycleComponent,
    NewcomponentComponent,
    Newcomponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

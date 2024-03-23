import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { QuickeryComponent } from './quickery/quickery.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { VirtufitComponent } from './virtufit/virtufit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutComponent,
    QuickeryComponent,
    AdminDashboardComponent,
    VirtufitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

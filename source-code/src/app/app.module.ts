// * ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StyleModuleModule } from './shared/style-module/style-module.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';

import { CoreModule } from './core/core.module';
import { MainLayoutComponent } from './includes/layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './includes/layout/auth-layout/auth-layout.component';
import { SidebarComponent } from './includes/sidebar/sidebar.component';
import { HeaderComponent } from './includes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    StyleModuleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    SharedComponentsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

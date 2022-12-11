import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { AbilitiesComponent } from './componentes/abilities/abilities.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { LoginComponent } from './componentes/login/login.component';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
//importo el modulo HttpCliente para poder intercambiar
//datos con el cliente utilizando mis servicios, me voy a portfolio.service.ts

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutmeComponent,
    AbilitiesComponent,
    ProjectsComponent,
    ModalComponent,
    LoginComponent,
    Error404Component,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

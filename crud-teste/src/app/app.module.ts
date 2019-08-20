import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {EditorModule, KeyFilterModule, MessageService, PaginatorModule} from 'primeng/primeng';
import {FuncionarioService} from './funcionario/funcionario.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    ButtonModule,
    DialogModule,
    TableModule,
    PaginatorModule,
    EditorModule,
    HttpClientModule,
    ToastModule,
    KeyFilterModule
  ],
  providers: [FuncionarioService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { TableModule } from 'primeng/table';
import { AddTableComponent } from './add-table/add-table.component';
import { MainComponent } from './main/main.component';
import { ViewTableComponent } from './view-table/view-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddTableComponent,
    MainComponent,
    ViewTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    TableModule,
    DragDropModule,
    CdkDrag,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTableComponent } from './add-table/add-table.component';
import { MainComponent } from './main/main.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainComponent },
  { path: 'add-table', component: AddTableComponent },
  { path: 'add-table/:id', component: AddTableComponent },
  // { path: 'view-table/:id', component: ViewTableComponent },
  { path: '**', redirectTo: 'dashboard', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {exportCsvComponent} from './export-csv/export-csv.component';
import {loginComponent} from './login/login.component';
import {ReportFormComponent} from './report-form/report-form.component';

const routes: Routes = [
  { path: 'export-csv', component: exportCsvComponent},
  { path: 'login', component: loginComponent},
  { path: 'export-csv', component: ReportFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

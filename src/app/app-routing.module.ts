import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportCsvComponent } from './export-csv/export-csv.component';
import { LoginComponent } from './login/login.component';
import {ReportFormComponent} from './report-form/report-form.component';

const routes: Routes = [
  { path: 'app-export-csv', component: ExportCsvComponent},
  { path: 'app-login', component: LoginComponent},
  { path: 'app-report-form', component: ReportFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

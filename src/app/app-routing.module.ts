import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ExportCsvComponent } from './export-csv/export-csv.component';
import { LoginComponent } from './login/login.component';
import {ReportFormComponent} from './report-form/report-form.component';

const routes: Routes = [
  { path: 'csv', component: ExportCsvComponent},
  { path: 'login', component: LoginComponent},
  { path: 'form', component: ReportFormComponent},
  { path: 'register', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

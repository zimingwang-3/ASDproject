import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/auth.guard';
import { RoleService } from './auth/role.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { ExportCsvComponent } from './export-csv/export-csv.component';
import { LoginComponent } from './login/login.component';
import {ReportFormComponent} from './report-form/report-form.component';

const routes: Routes = [
  { path: 'csv', component: ExportCsvComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, },
  { path: 'form', component: ReportFormComponent, canActivate: [AuthGuard]},
  { path: 'register', component: CreateUserComponent, canActivate: [RoleService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExportCsvComponent } from './export-csv/export-csv.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/auth.guard';
import { StoreManageComponent } from './store-manage/store-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportFormComponent,
    ExportCsvComponent,
    LoginComponent,
    NavigationComponent,
    CreateUserComponent,
    StoreManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

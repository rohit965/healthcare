import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [

  { path: 'dashboard/:projectId/:version', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard/82/0', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

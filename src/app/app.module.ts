import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module'
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
	
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { Routes, RouterModule } from '@angular/router';
import { ThemeModule } from './theme/theme.module';
import {MatSelectModule,MatInputModule,MatCardModule,MatFormFieldModule} from '@angular/material';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveDiagnosisComponent } from './child-dashboard/active-diagnosis/active-diagnosis.component';
import { ActiveMedicatonComponent } from './child-dashboard/active-medicaton/active-medicaton.component';
import { AllergiesComponent } from './child-dashboard/allergies/allergies.component';
import { PresurgicalProceduresComponent } from './child-dashboard/presurgical-procedures/presurgical-procedures.component';
import { SugeonsNotesComponent } from './child-dashboard/sugeons-notes/sugeons-notes.component';
import { ProfileComponent } from './child-dashboard/profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ReportsComponent } from './child-dashboard/reports/reports.component';
import { ChartandprofileComponent } from './child-dashboard/chartandprofile/chartandprofile.component';
import { ChartsModule } from 'ng2-charts';
import { ChartWidgetComponent } from './child-dashboard/chart-widget/chart-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    HomeComponent,
    DashboardComponent,
    ActiveDiagnosisComponent,
    ActiveMedicatonComponent,
    AllergiesComponent,
    PresurgicalProceduresComponent,
    SugeonsNotesComponent,
    ProfileComponent,
    FooterComponent,
    ReportsComponent,
    ChartandprofileComponent,
    ChartWidgetComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, ThemeModule ,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    ChartsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

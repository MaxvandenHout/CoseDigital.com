import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InitialComponent } from './initial/initial.component';
import { JourneyComponent } from './journey/journey.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { ContactComponent } from './contact/contact.component';
import { MzdTimelineModule } from 'ngx-mzd-timeline';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitialComponent,
    JourneyComponent,
    TechnologiesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTooltipModule,
    FormsModule,
    MzdTimelineModule,
    MonacoEditorModule.forRoot(),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

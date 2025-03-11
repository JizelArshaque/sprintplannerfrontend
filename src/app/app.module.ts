import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { AutoSelectedSprintComponent } from './auto-selected-sprint/auto-selected-sprint.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StoryFormComponent,
    StoryListComponent,
    SprintCalculatorComponent,
    AutoSelectedSprintComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

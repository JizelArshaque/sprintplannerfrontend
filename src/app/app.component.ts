// frontend/src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container py-5">
      <h1 class="text-center mb-4">Automated Scrum Sprint Planner</h1>
      <div class="row g-4">
        <div class="col-md-6">
          <app-story-form></app-story-form>
          <app-story-list></app-story-list>
        </div>
        <div class="col-md-6">
          <app-sprint-calculator></app-sprint-calculator>
          <app-auto-selected-sprint></app-auto-selected-sprint>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
    }
  `]
})
export class AppComponent { }
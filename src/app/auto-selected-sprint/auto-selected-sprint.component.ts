// frontend/src/app/auto-selected-sprint/auto-selected-sprint.component.ts
import { Component } from '@angular/core';
import { StoryService, Story } from '../story.service';

@Component({
  selector: 'app-auto-selected-sprint',
  template: `
    <div class="card p-3">
      <div class="card-body">
        <h5 class="card-title">Selected Sprint Stories</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-center" *ngFor="let story of selectedStories">
            <span>{{story.name}}</span>
            <span class="badge bg-success rounded-pill">{{story.points}} pts</span>
          </li>
        </ul>
        <p class="mt-3 fw-bold text-success">Total Points: {{totalPoints}}</p>
      </div>
    </div>
  `,
  styles: [`
    .list-group-item {
      background-color: #fff;
      border-radius: 8px;
      margin-bottom: 8px;
    }
    .badge {
      padding: 6px 12px;
    }
  `]
})
export class AutoSelectedSprintComponent {
  constructor(public storyService: StoryService) { }
  get selectedStories(): Story[] { return this.storyService.selectedStories; }
  get totalPoints(): number { return this.selectedStories.reduce((sum, story) => sum + story.points, 0); }
}
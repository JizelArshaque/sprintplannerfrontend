import { Component, OnInit } from '@angular/core';
import { StoryService, Story } from '../story.service';

@Component({
  selector: 'app-auto-selected-sprint',
  templateUrl: './auto-selected-sprint.component.html',
  styleUrls: ['./auto-selected-sprint.component.css']
})
export class AutoSelectedSprintComponent implements OnInit {
  selectedStories: Story[] = [];

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.storyService.selectedStories$.subscribe(stories => {
      this.selectedStories = stories;
    });
  }

  get totalPoints(): number {
    return this.selectedStories.reduce((sum, story) => sum + story.points, 0);
  }
}

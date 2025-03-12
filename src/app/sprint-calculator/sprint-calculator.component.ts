import { Component } from '@angular/core';
import { StoryService, Story } from '../story.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css']
})
export class SprintCalculatorComponent {
  capacity = 0;

  constructor(private storyService: StoryService) {}

  generateSprint() {
    this.storyService.getStories().subscribe(stories => {
      this.storyService.selectedStories = this.storyService.generateSprint(this.capacity, stories);
    });
  }

  clearSelected() {
    this.storyService.selectedStories = []; // Clears selected stories dynamically
  }

  clearAll() {
    this.storyService.clearStories().subscribe();
  }
}

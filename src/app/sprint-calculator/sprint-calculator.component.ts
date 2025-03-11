import { Component } from '@angular/core';
import { StoryService, Story } from '../story.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html', // External HTML file
  styleUrls: ['./sprint-calculator.component.css']   // External CSS file
})
export class SprintCalculatorComponent {
  capacity = 0;
  selectedStories: Story[] = [];

  constructor(private storyService: StoryService) { }

  generateSprint() {
    this.storyService.getStories().subscribe(stories => {
      this.selectedStories = this.storyService.generateSprint(this.capacity, stories);
      console.log("Selected Stories:", this.selectedStories);
      console.log("Total Selected Points:", this.selectedStories.reduce((sum, story) => sum + story.points, 0));
    });
  }

  clearSelected() {
    this.selectedStories = [];
  }

  clearAll() {
    this.storyService.clearStories().subscribe(() => {
      this.selectedStories = [];
    });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoryService, Story } from '../story.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html', // External HTML file
  styleUrls: ['./story-list.component.css']   // External CSS file
})
export class StoryListComponent implements OnInit, OnDestroy {
  stories: Story[] = [];
  private subscription!: Subscription;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.subscription = this.storyService.getStories().subscribe(stories => {


      this.stories = stories;
      // console.log(this.stories);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Prevent memory leaks
  }
}

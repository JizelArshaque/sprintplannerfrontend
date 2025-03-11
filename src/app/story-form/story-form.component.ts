import { ChangeDetectorRef, Component } from '@angular/core';
import { StoryService, Story } from '../story.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html', // External HTML file
  styleUrls: ['./story-form.component.css']   // External CSS file
})
export class StoryFormComponent {
  story: Story = { name: '', points: 0 };

  constructor(private storyService: StoryService, private cdr: ChangeDetectorRef) { }

  onSubmit(event: Event) {
    console.log('onSubmit called');
    this.storyService.addStory(this.story).subscribe({
      next: () => {
        this.story = { name: '', points: 0 };
        // this.cdr.detectChanges(); // Uncomment if necessary
      },
      error: (err) => alert(err.message)
    });
  }
}

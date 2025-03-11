// frontend/src/app/story.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface Story {
  _id?: string;
  name: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiUrl = 'http://localhost:3000/api/stories';
  private storiesSubject = new BehaviorSubject<Story[]>([]);
  selectedStories: Story[] = [];

  constructor(private http: HttpClient) {
    this.loadInitialStories();
  }

  getStories(): Observable<Story[]> {
    return this.storiesSubject.asObservable();
  }

  private loadInitialStories() {
    this.http.get<Story[]>(this.apiUrl).subscribe(stories => {
      this.storiesSubject.next(stories);
    });
  }

  addStory(story: Story): Observable<Story> {
    console.log('addStory called with:', story);
    return this.http.post<Story>(this.apiUrl, story).pipe(
      tap((newStory: any) => {
        const currentStories = this.storiesSubject.value;
        this.storiesSubject.next([...currentStories, newStory]);
      })
    );
  }



  clearStories(): Observable<any> {
    const request = this.http.delete(this.apiUrl);
    request.subscribe({
      next: () => {
        this.storiesSubject.next([]);
        this.selectedStories = [];
      },
      error: (err) => console.error(err)
    });
    return request;
  }

  generateSprint(capacity: number, stories: Story[]): Story[] {
    this.selectedStories = [];
    let bestFit: Story[] = [];

    function findBestFit(index: number, currentSet: Story[], currentSum: number) {
      if (currentSum > capacity) return;
      if (currentSum === capacity || currentSum > bestFit.reduce((sum, story) => sum + story.points, 0)) {
        bestFit = [...currentSet];
      }
      for (let i = index; i < stories.length; i++) {
        findBestFit(i + 1, [...currentSet, stories[i]], currentSum + stories[i].points);
      }
    }

    findBestFit(0, [], 0);
    this.selectedStories = bestFit;
    return this.selectedStories;
  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Blog Applocation';
  blogs = [
    'Blog 1',
    'Blog 2',
    'Blog 3',
    'Blog 4',
    'Blog 5',
    'Blog 6',
    'Blog 7',
    'Blog 8',
    'Blog 9',
    'Blog 10',
  ];

  getTitle() {
    return this.title;
  }
}

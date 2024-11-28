import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  ngOnInit() {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }

  getTitle() {
    return this.title;
  }
}

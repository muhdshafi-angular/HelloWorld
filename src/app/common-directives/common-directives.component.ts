import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-directives',
  templateUrl: './common-directives.component.html',
  styleUrls: ['./common-directives.component.css']
})
export class CommonDirectivesComponent implements OnInit {

  dataArray = [];
  viewMode = 'map2';
  courseList = [
    {id: '1', name: 'title 1'},
    {id: '2', name: 'title 2'},
    {id: '3', name: 'title 3'}
  ];

  load() {
    this.courseList = [
      {id: '1', name: 'title 1'},
      {id: '2', name: 'title 2'},
      {id: '3', name: 'title 3'}
    ];
  }

  trackCourse(index, course) {
    return  course ? course.id : undefined;
   }

  constructor() { }

  ngOnInit() {
  }

}

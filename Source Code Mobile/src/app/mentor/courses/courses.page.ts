import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  currentCourses = [
    {Title: "C-Programming", Code: "CEN-110"},
    {Title: "Database Management System", Code: "CEN-110"},
    {Title: "Object Oriented Programming", Code: "CEN-110"}
  ]

  completedCourses = [
    {Title: "Data Structure", Code: "CEN-110"},
    {Title: "Software Engineering", Code: "CEN-110"},
    {Title: "C-Programming", Code: "CEN-110"}
  ]

  constructor() { }

  ngOnInit() {
  }

}

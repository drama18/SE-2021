import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  studentsList = [
    {
      Name: "John Mayer",
      Department: "Computer Engineering",
      Degree: "Bachelor",
      CourseNumber: 3,
      StartDate: new Date(2021, 5, 29)
    },
    {
      Name: "John Smith",
      Department: "Architecture",
      Degree: "Bachelor",
      CourseNumber: 6,
      StartDate: new Date(2021, 9, 9)
    },
    {
      Name: "James Bond",
      Department: "Electronic Engineering",
      Degree: "Master",
      CourseNumber: 1,
      StartDate: new Date(2021, 1, 2)
    },
  ]

  studentsRequests = [
    {
      Name: "Test Test",
      Department: "Architecture",
      Degree: "Bachelor",
      CourseNumber: 6,
    },
    {
      Name: "Test Test",
      Department: "Electronic Engineering",
      Degree: "Master",
      CourseNumber: 1,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

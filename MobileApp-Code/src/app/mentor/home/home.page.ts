import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  weekday = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"]
  
  month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  dashboard = {
    studentsNumber: 10,
    pendingRequestNumber: 3,
    nrOfToDO: 4,
    nrOfThisWeekTasks: 3,
    currentCourses:[
      {Title: "C-Programming", Code:"CEN-110"},
      {Title: "Database Management System", Code:"CEN-200"},
      {Title: "Object Oriented Programming", Code:"CEN-320"},
    ],
    thisWeeksActivity:[
      {Code:"CEN-110", Text: "Something to be done 1", Time: new Date(2021, 5, 2, 20, 15)},
      {Code:"CEN-200", Text: "Something to be done 2", Time: new Date(2021, 5, 2, 20, 15)},
      {Code:"CEN-320", Text: "Something to be done 3", Time: new Date(2021, 5, 2, 20, 15)},
    ],
    toDoList: [
      { Title:"Send the homeworks", 
        Date: new Date(2021, 5, 2, 20, 15),
        Time: "",
        selected:true
      },
      { Title:"Collect the homeworks", 
        Date: new Date(2021, 5, 12, 20, 15),
        Time: "",
        selected:false
      },
      { Title:"Test the students", 
        Date: new Date(2021, 5, 21, 9, 15),
        Time: "",
        selected:false
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.dashboard.toDoList.forEach(element => {
      element.Time = element.Date.toLocaleTimeString(undefined, {
                      hour:   '2-digit',
                      minute: '2-digit'
                    });
      });
  }

}

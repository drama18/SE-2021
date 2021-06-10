import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})

export class TimetablePage implements OnInit {

  mouseY=0;
  mouseX=0;
  list: any;
  menuShow = false;
  presentMenu = "";

  constructor() { 
    this.list = document.getElementsByTagName("td");
  }

  currentCourses = [
    {Title: "C-Programming", Code:"CEN-110", color: "red"},
    {Title: "Database Management System", Code:"CEN-200", color: "blue"},
    {Title: "Object Oriented Programming", Code:"CEN-320", color: "green"},
  ]

  ngOnInit() {
  }

  setTimetable(e, hour: number, day: number){
    var i:number;
    for (i=0; i<this.list.length; i++){
      this.list[i].style.opacity = "100%"
    }

    if ( this.presentMenu == hour+"-"+day )
      this.menuShow = !this.menuShow;
    else
      this.menuShow = true;

    if ( this.presentMenu == "" )
      this.menuShow = true;

    this.mouseY = e.clientY;
    this.mouseX = e.clientX;

    console.log(this.menuShow);

    document.getElementById(hour+"-"+day).style.opacity = "80%";

    this.presentMenu = hour+"-"+day;
   }

}

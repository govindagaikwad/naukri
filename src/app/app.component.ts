import { Component, ViewChild } from '@angular/core';
import { StudentServices } from 'src/app/services/student.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentServices]
})
export class AppComponent {
  title = 'app';
  name = 'i am govinda';


  // chooseColor(value: string) {
  //  if (value == "Red") {

  //    } 
  // }


  empName = [
    { empName: 'sidhharth', ecity: 'pune', salary: 10000 },
    { empName: 'shankar', ecity: 'nashik', salary: 20000 },
    { empName: 'Govinda', ecity: 'nagar', salary: 30000 },
  ]

  employeeDetails: any={
    name:"",
    city:"",
    salary:""
  };


  displayRecord(data: any) {
    this.employeeDetails = data;
    console.log("this is component comm")
  }

}



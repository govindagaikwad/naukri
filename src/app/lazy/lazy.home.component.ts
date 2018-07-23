import {Component} from "@angular/core"


@Component({

selector:'Home-Lazy',
templateUrl:'./lazy.home.component.html'

})

export class LazyLoadingForHome{

    Student = [
        { stdname: 'sidhharth', contact: '1234567820', email:"sid@gmail.com" },
        { stdname: 'shankar', contact: '8745632102', email:"sss@gmail.com"  },
        { stdname: 'Govinda', contact: '8520364178', email: "govinda@gmail.com" },
      ]

      studentDetails: any={
        name:"",
        contact:"",
        email:""
      };
    
    
      displayRecord(data: any) {
        this.studentDetails = data;
        console.log("this is component comm")
      }

}
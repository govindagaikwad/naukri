import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator} from '@angular/forms';
import { Validators } from '@angular/forms';
import { StudentServices } from './../services/student.services';
@Component({
  selector: 'model-form',
  templateUrl: './reactive.forms.component.html',
  providers:[StudentServices]
})

export class ReactiveformsModel {

  title = "reactive form demo!!!";
  public studentModel: FormGroup;
  info:any;
  constructor(private ssrv: StudentServices) {
    this.studentModel = new FormGroup({
      name: new FormControl('', [Validators.required]),
      std: new FormControl('', [Validators.required]),
      phone: new FormControl('',[Validators.required])

    })
  }

  public saveInfo(data) {
   this.info = this.ssrv.StudentInfo;
   console.log(this.info);
    alert("name=" + this.info);
  }
  public countryData:any;
 public getCountryInfo()
 {
   this.ssrv.getCountryInfo().subscribe(res=>this.countryData=res.json());
 }
public userInfo:any;
 public saveUser(){
   let inputInfo={
     'name':'Govinda',
      'job':'SE'
   }
   this.ssrv.saveUserInfo(inputInfo).subscribe(res=>this.userInfo=res);
}
}

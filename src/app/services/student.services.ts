import {Injectable} from '@angular/core';
import {Http,Response}  from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Injectable()


export class StudentServices{

    constructor(private _http:Http){

    }
    public StudentInfo =[
        {name:"shankar",contact:"7218876386"},
        {name:"Govinda",contact:"4366341131"}
     ]

     studentDetail(){

         return this.StudentInfo;
     }

     public getCountryInfo():any{

        let url='https://restcountries.eu/rest/v2/all';
         return this._http.get(url);
     }

     public saveUserInfo(data){
         let url="https://reqres.in/api/users";
         return this._http.post(url,data).map((res:Response)=>res.json());
     }
}
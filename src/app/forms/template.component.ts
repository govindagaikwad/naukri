import {Component} from '@angular/core'

@Component({
    selector: 'forms-root',
    templateUrl: './template.component.html',
    
  })
  export class templatecomponent {
   title='template is a component';

   public savedata(data){
       alert("name = "+data.name);
   }
   name1=true;


   info=[
       {fname:'Govinda',address:'Kopargaon'},
       {fname:'Hrushi',address:'Yeola'},
       {fname:'Shankar',address:'Vaijapur'},

   ]

  }
  
import {Routes,RouterModule,  CanActivate} from '@angular/router'
import {NgModule} from '@angular/core'
import { templatecomponent } from '../forms/template.component';
import { PipesDemo } from '../pipes/pipes.component';
import { ReactiveformsModel } from '../forms/reactive.forms.component';
import { RouteGaurdServices } from '../services/route.gaurd.service';



const appRoute:Routes=[
    {path :'home',component:templatecomponent,canActivate:[RouteGaurdServices]},
    {path:'student',component:PipesDemo},
    {path:'employee',component:ReactiveformsModel}
]

@NgModule({

imports:[
    RouterModule.forRoot(appRoute),
],
exports:[RouterModule]

})
export class AppRouting
{

}

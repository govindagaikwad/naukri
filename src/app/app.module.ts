import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { templatecomponent } from './forms/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupComponent } from './group/group.component';
import { ReactiveformsModel } from './forms/reactive.forms.component';
import { HttpModule } from '@angular/http';
import { PipesDemo } from './pipes/pipes.component';
import { CubeDemo } from './pipes/pipe';
import { AppRouting } from './routings/routing.module';

/*internal routing*/
import { RouteGaurdServices } from './services/route.gaurd.service';
import { NaukriForm } from './Naukri Form/form/form.component';
import { NextFormForNaukri } from './Naukri Form/Save and next/nextform.component';
import { ComponentCommunication } from './CompoCommunication/component.comm';
import { LoginForm } from './Naukri Form/login/login.component';
import { SignUpForm } from './Naukri Form/SignUp/signup.component';
import { NaukriRouting } from './Naukri Form/RoutingForNoukri/routing.noukri.componnt';
import { RouterModule, Routes } from '@angular/router';
import { ChildViewComponent } from './childview/child.component';

const appRoute: Routes = [
{path:'',loadChildren:'./lazy/lazy.module#LazySubModule'},
{path:'user',loadChildren:'./lazy/lazy.module#LazySubModule'},
//   //  {path :'home',component:templatecomponent},
//   //  {path:'student',component:PipesDemo},
//   // {path:'employee',component:ReactiveformsModel},
//   // {path:'**',redirectTo:GroupComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    templatecomponent, GroupComponent, ReactiveformsModel, PipesDemo, CubeDemo,
     NaukriForm, NextFormForNaukri, ComponentCommunication,LoginForm,SignUpForm,ChildViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    HttpModule,
    AppRouting,
    // NaukriRsouting
    //RouterModule
  ],
  providers: [RouteGaurdServices],
  bootstrap: [AppComponent,]
})
export class AppModule {
}

import { NgModule } from "@angular/core"
import { LazyLoading } from "./lazy.component";
import { RouterModule, Routes } from "@angular/router";
import { LazyLoadingForHome } from "./lazy.home.component";
import { CommonModule } from "@angular/common";
const router: Routes = [
    {
        path: 'home1', component: LazyLoading
        // children: [
        //     { path: 'home1', component: LazyLoadingForHome }
        // ]
    },
 {path:'',component:LazyLoadingForHome}
]

@NgModule({
    declarations: [
        LazyLoading, LazyLoadingForHome
    ],
    imports: [
        RouterModule.forChild(router),
        CommonModule
    ]


})

export class LazySubModule {

}
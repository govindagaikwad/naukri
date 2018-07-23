import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
    name:'cube',
})

export class CubeDemo implements PipeTransform{      //custom pipe example.
    transform(value){
        return value*value*value;
    }
} 
import {Directive, ElementRef ,HostListener,Input} from '@angular/core';
import { Attribute } from '@angular/compiler';


@Directive({
  selector: '[appattribute]',
  
})
export class AttributeComponent{

  constructor(private e1:ElementRef) { 
    this.e1.nativeElement.style.backgroundColor="red";
  }

  @Input() appattribute:string;
  @HostListener('mouseenter')onmouseenter(){
    this.e1.nativeElement.style.backgroundColor=this.appattribute;
  }
  @HostListener('mouseleave')onmouseleave(){
    this.e1.nativeElement.style.backgroundColor="yellow"
  }

}

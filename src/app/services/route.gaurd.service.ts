import{Injectable} from '@angular/core';
import {CanActivate} from '@angular/router'
@Injectable()

export class RouteGaurdServices implements CanActivate
{
  canActivate():boolean
  {
    
      return confirm('r u want to navigat to home?');
  }

}
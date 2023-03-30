import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){

  }
  canActivate(){
    if(this.userService.isloggedIn()){
      return true;
    }else{  
      this.router.navigate(['home-view'])
      return false
    }
  }
  
}

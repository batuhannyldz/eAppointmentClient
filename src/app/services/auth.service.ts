import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

isAuthenticated(){
  const token: string | null = localStorage.getItem("token");
  
  if(token){
    return true;
  }
    this.router.navigateByUrl("/login");
  return false
}
}

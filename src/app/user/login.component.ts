import { AuthService } from './auth.service';
import { Router } from '@angular/router'
import { Component } from '@angular/core';
@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent{
    userName:string="";
    password:string="";
    mouseOverLogin: boolean = false;
    constructor (private authService: AuthService, private router: Router) {}

    login(formValue:any){
        this.authService.login(formValue.userName, formValue.password);
        this.router.navigate(['events']);
    }
    cancel(){
        this.router.navigate(['events']);
    }

}
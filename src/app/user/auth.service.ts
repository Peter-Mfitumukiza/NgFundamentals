import { Injectable } from '@angular/core'
import { User } from './user.model';
 
@Injectable()

export class AuthService{
    currentUser: User | undefined;

    login(username: string, password:string){
        this.currentUser={
            id:1,
            username: "JohnPapa",
            firstname:"John",
            lastname:"Papa"
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}
import { LoginComponent } from './login.component';
import { UserProfileComponent } from './profile.component';
import {Routes} from '@angular/router';

export const userRoutes:Routes = [
    {path: 'profile', component: UserProfileComponent},
    {path:'login' , component: LoginComponent}
]



import { Component } from '@angular/core';

@Component({
    template:`
        <h1>Edit your profile</h1>
        <div class="col-md-6">
            <h3>Where the edit profile form will be</h3>    
            <button class="btn btn-primary">Save</button>
            <button class="btn btn-secondary mx-2" [routerLink]="['/events']">Cancel</button>
        </div>
    `
})

export class UserProfileComponent {}
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private router:Router) { }
  isDirty = true;
  cancel(){
    this.router.navigate(['/events']);
  }

  ngOnInit(): void {
  }

}

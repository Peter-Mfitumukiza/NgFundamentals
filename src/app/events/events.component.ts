import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any;
  constructor(private route: ActivatedRoute, public authService: AuthService) { }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

}

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Event } from './event.model';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<Event[]>{
    let subject = new Subject<Event[]>();
    setTimeout(() => { subject.next(EVENTS); subject.complete()}, 2000);
    return subject;
  }

  getEvent(id: number){
    return EVENTS.find(event => event.id === id)
  }
  
}

const  EVENTS: Event[] =[
  {
  id:1,
  name: "Peter's event",
  desc: "Lorem Ipsum doret amet",
  time: "12:00",
  location:{
    province:"Western",
    district:"Rusizi",
    sector:"Kamembe"
  }
  },
  {
    id:2,
    name: "Ebenezer's event",
    desc: "Lorem Ipsum doret amet.",
    time: "8:00 am",
    location:{
      province:"Eastern",
      district:"Bugesera",
      sector:"Nyamata"
    }
    },

];

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EventsService } from './events.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsComponent } from './events/events.component';
import { NewEventComponent } from './new-event/new-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import {EventRouteActivatorService} from './event-route-activator.service';
import { AuthService } from './user/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EventDetailsComponent,
    EventsComponent,
    NewEventComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventsService, 
  EventRouteActivatorService,
  {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function checkDirtyState(component: NewEventComponent){
  if(component.isDirty)
    return window.confirm("Do you want to leave without saving this event??");
  return true;
}
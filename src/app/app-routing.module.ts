import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { EventListResolverService } from './event-list-resolver.service';

const routes: Routes =[
  {path:"events/new", component:NewEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path:"events", component:EventsComponent, resolve: {events: EventListResolverService}},
  {path:"events/:id", component:EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  {path:"404", component:NotFoundComponent},
  {path:"", redirectTo:"/events", pathMatch:"full"},
  {path:"user", loadChildren: ()=>import('./user/user.module')
        .then(m => m.UserModule) 
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

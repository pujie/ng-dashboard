import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { SidebarsComponent } from '../sidebars/sidebars.component';
import { InfrastructureComponent } from '../infrastructure/infrastructure.component';
import { TicketComponent } from '../ticket/ticket.component';
const route:Routes = [
  {path:'sidebars',component:SidebarsComponent},
  {path:'infrastructure',component:InfrastructureComponent},
  {path:'ticket',component:TicketComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  declarations: []
})
export class RoutingModule { }

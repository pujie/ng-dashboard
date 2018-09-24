import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarsComponent,
    NavbarComponent,
    FooterComponent,
    InfrastructureComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

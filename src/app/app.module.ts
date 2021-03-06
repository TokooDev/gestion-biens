import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBiensComponent } from './biens/list-biens/list-biens.component';
import { ItemBienComponent } from './biens/list-biens/item-bien/item-bien.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeleftPipe } from './pipes/timeleft.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReservationsBienComponent } from './biens/reservations-bien/reservations-bien.component';
import { DetailReservationComponent } from './biens/reservations-bien/detail-reservation/detail-reservation.component';
import { EditReservationComponent } from './biens/reservations-bien/edit-reservation/edit-reservation.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBiensComponent,
    ItemBienComponent,
    JumbotronBienComponent,
    SeparatorPipe,
    TimeleftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationsBienComponent,
    DetailReservationComponent,
    EditReservationComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

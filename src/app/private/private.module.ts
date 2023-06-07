import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ArtistComponent,
    ArtistCardComponent,
    ArtistPageComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }

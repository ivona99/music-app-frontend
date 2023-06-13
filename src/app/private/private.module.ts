import { AlbumCardComponent } from './components/album-card/album-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';
import { AlbumComponent } from './components/album/album.component';
import { SongComponent } from './components/song/song.component';
import { AlbumPageComponent } from './components/album-page/album-page.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ArtistComponent,
    ArtistCardComponent,
    ArtistPageComponent,
    AlbumComponent,
    AlbumCardComponent,
    AlbumPageComponent,
    SongComponent,
    SongCardComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule
  ]
})
export class PrivateModule { }

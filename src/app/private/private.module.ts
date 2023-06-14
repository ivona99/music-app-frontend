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
import { MusicPlayerBarComponent } from './components/music-player-bar/music-player-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';


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
    SongCardComponent,
    MusicPlayerBarComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatSliderModule,
  ]
})
export class PrivateModule { }

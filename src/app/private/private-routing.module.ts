import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';
import { AlbumComponent } from './components/album/album.component';
import { SongComponent } from './components/song/song.component';
import { AlbumPageComponent } from './components/album-page/album-page.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path:'artist', component:ArtistComponent},
  {path: 'artistpage/:id', component: ArtistPageComponent },
  {path: 'album', component:AlbumComponent},
  {path:'albumpage/:id', component:AlbumPageComponent},
  {path:'song', component:SongComponent},
  {
    path:'**',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

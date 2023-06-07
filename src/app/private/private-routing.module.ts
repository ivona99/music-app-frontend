import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path:'artist', component:ArtistComponent
  },
  { path: 'artistpage/:id', component: ArtistPageComponent },
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

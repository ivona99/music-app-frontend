import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { SidebarComponent } from './private/components/sidebar/sidebar.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'private',
    canActivate: [AuthGuard],
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  {
    path:'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path:'sidebar',
    component:SidebarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
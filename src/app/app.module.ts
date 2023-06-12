import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';
import { SwitchSignComponent } from './home/switch-sign/switch-sign.component';
import { DiscoverComponent } from './home/discover/discover.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeAlbumComponent } from './home/home-album/home-album.component';



export function tokenGetter () {
  return localStorage.getItem("nestjs_music_app")
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SwitchSignComponent,
    DiscoverComponent,
    FooterComponent,
    HomeAlbumComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:tokenGetter,
        allowedDomains: ['localhost:3000']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

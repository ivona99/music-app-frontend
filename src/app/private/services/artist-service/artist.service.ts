import { ArtistI } from './../../../model/artist.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  //get all artists
  getArtists(): Observable<any>{
    return this.http.get(`http://localhost:3000/artists`);
  }
  getDetailArtist(id:any):any{
    return this.http.get(`http://localhost:3000/artists/${id}`);
  }
}

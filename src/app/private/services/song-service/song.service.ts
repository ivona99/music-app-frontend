import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http:HttpClient) { }
  //get all songs
  getSongs():Observable<any> {
    return this.http.get(`http://localhost:3000/songs`);
  }
  getDetailSong(id:any):any{
    return this.http.get(`http://localhost:3000/songs/${id}`);
  }
  getSearchByName(name:any):any{
    return this.http.get(`http://localhost:3000/songs/search?name=${name}`)
  }

}

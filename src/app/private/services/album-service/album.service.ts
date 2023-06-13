import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }
  
  //get all albums
  getAlbums():Observable<any> {
    return this.http.get(`http://localhost:3000/albums`);
  }
  getDetailAlbum(id:any):any {
    return this.http.get(`http://localhost:3000/albums/${id}`);
  }
  getSearchByName(name:any):any{
    return this.http.get(`http://localhost:3000/albums/search?name=${name}`)
  }
}

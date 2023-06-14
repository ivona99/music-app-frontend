import { AlbumI } from "./album.interface";

export interface SongI {
  song_id?:number;
  song_title:string;
  song_length?:string;
  artist_name:string;
  song_path:string;
  song_image:string;
  album?:AlbumI;
}
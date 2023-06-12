import { ArtistI } from "./artist.interface";
import { SongI } from "./song.interface";

export interface AlbumI {
    album_id:number;
    album_title:string;
    album_year:string;
    album_img:string;
    album_items:number;
    artist:ArtistI;
    songs:SongI[];
}
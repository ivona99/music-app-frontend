import { AlbumI } from "./album.interface";

export interface ArtistI {
    artist_id:number;
    artist_name: string;
    artist_desc:string;
    artist_img:string;
    albums:AlbumI[];
}
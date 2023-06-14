import { Component, OnInit, Renderer2 } from '@angular/core';
import { ArtistI } from 'src/app/model/artist.interface';
import { AlbumService } from '../../services/album-service/album.service';
import { ActivatedRoute } from '@angular/router';
import { SongI } from 'src/app/model/song.interface';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
  id?:string;
  title?:string;
  year?:string;
  items?:number;
  imageUrl?:string;
  artist?:ArtistI;
  songs?:SongI[];
  songImage?:string;
  songAudio?:string;
  artistDesc?:ArtistI;
  showCard:boolean = true;

  constructor(private albumService:AlbumService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.id = params['id'];
      this.loadData();
    });
   
  }

  loadData():void {
    this.albumService.getDetailAlbum(this.id).subscribe((data:any) => {
      this.title= data.album_title;
      this.year = data.album_year;
      this.items = data.album_items;
      this.imageUrl="../../../../assets/"+data.album_img;
      this.artist = data.artist.artist_name;
      this.artistDesc = data.artist.artist_desc;
      this.songs = data.songs;
      this.songs?.forEach((element:any) => {
        element.song_image = "../../../../assets/" +element.song_image;
        element.song_path = "../../../../assets/" +element.song_path;
      });
      console.log("one song", this.songs);
    });
  }

}

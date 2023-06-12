import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song-service/song.service';
import { SongI } from 'src/app/model/song.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songs?:SongI[] = [];
  songs2?:any = [];
  public songPath:any = [];

  constructor(private songService:SongService) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(data=> {
      this.songs = data;
      this.songs?.forEach ((element:any) => {
        element.song_path = "../../../../assets/"+element.song_path;
        element.song_image = "../../../../assets/"+element.song_image;
    });
      
    });
  }

}

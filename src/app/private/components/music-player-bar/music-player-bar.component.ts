import { AlbumI } from './../../../model/album.interface';
import { SongI } from './../../../model/song.interface';
import { SongService } from './../../services/song-service/song.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-music-player-bar',
  templateUrl: './music-player-bar.component.html',
  styleUrls: ['./music-player-bar.component.css']
})
export class MusicPlayerBarComponent implements OnInit {
  @Input() audio = new Audio();
  @Input() musicLength: string = '0:00';
  @Input() duration: number = 1;
  @Input() currentTime: string = '0:00';
  @Input() musicList:SongI[] = [];
  @Input() ispaused?:boolean;
  @Output() playEvent:EventEmitter<any> = new EventEmitter<any>();
  play(){
    this.playEvent.emit();
  }

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe((data:any) => {
      this.musicList = data;
      this.musicList.forEach((element:any) => {
        element.song_path = "../../../../assets/"+element.song_path;
      });
    });
  }
  
 @Input() trackPointer: number = 0;
 @Input() currentMusic: SongI = {
    song_title:"",
    song_path:"",
    song_image:"",
    artist_name:""
  }


  prev(): void {
    this.trackPointer--;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src = this.currentMusic.song_path;
    this.audio.play();
  }

  next(): void {
    this.trackPointer++;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src = this.currentMusic.song_path;
    this.audio.play();
  }

  volumeSlider(event: any) {
    this.audio.volume = event.value / 16;
  }

  durationSlider(event: any) {
    this.audio.currentTime = event.value;
  }

}

import { AlbumI } from './../../../model/album.interface';
import { SongI } from './../../../model/song.interface';
import { SongService } from './../../services/song-service/song.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player-bar',
  templateUrl: './music-player-bar.component.html',
  styleUrls: ['./music-player-bar.component.css']
})
export class MusicPlayerBarComponent implements OnInit {
  title = 'angular-music-player';
  audio = new Audio();
  musicLength: string = '0:00';
  duration: number = 1;
  currentTime: string = '0:00';
  musicList:SongI[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe((data:any) => {
      this.musicList = data;
      this.musicList.forEach((element:any) => {
        element.song_path = "../../../../assets/"+element.song_path;
      })
    });
  }
  
  trackPointer: number = 0;
  currentMusic: SongI = {
    song_title:"",
    song_path:"",
    song_image:"",
    artist_name:""
  }
  play(index?: number): void {
    if (index === undefined) {
      if (this.audio.paused) {
        if (this.audio.readyState === 0) {
          this.trackPointer = 0;
          this.currentMusic = this.musicList[0];
          this.audio.src = this.currentMusic.song_path;
        }
        this.audio.play();
      } else {
        this.audio.pause();
      }
    } else {
      this.trackPointer = index;
      this.currentMusic = this.musicList[index];
      this.audio.src = this.currentMusic.song_path;
      this.audio.play();
    } 
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

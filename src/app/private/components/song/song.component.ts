import { Component, OnInit, ElementRef } from '@angular/core';
import { SongService } from '../../services/song-service/song.service';
import { SongI } from 'src/app/model/song.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songs:SongI[] = [];
  public songPath:any = [];  searchTxt: any = '';
  searchResults:any;
  showCard = true;
  audio = new Audio();
  musicLength: string = '0:00';
  duration: number = 1;
  currentTime: string = '0:00';

  constructor(private songService:SongService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(data=> {
      this.songs = data;
      this.songs?.forEach ((element:any) => {
        element.song_path = "../../../../assets/"+element.song_path;
        element.song_image = "../../../../assets/"+element.song_image;
    });
      
    });
    this.audio.ondurationchange = () => {
      const totalSeconds = Math.floor(this.audio.duration),
            duration = moment.duration(totalSeconds, 'seconds');
      this.musicLength = duration.seconds() < 10 ? 
                         `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` : 
                         `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
      this.duration = totalSeconds;
    }

    this.audio.ontimeupdate = () => {
      const duration = moment.duration(
        Math.floor(this.audio.currentTime), 'seconds');
      this.currentTime = duration.seconds() < 10 ? 
                         `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` : 
                         `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
    }
  }
  trackPointer: number = 0;
  currentMusic: SongI = {
    song_title:"",
    song_path:"",
    song_image:"",
    artist_name:""
  }
  onSidebar(){
    this.elementRef.nativeElement.querySelector('.item-section').classList.toggle('close');
}
onSearch(name:any){
  this.songService.getSearchByName(this.searchTxt)
     .subscribe((data:any)=>{
        if(data && data.artist_name && this.searchTxt!==''){
         this.searchResults = data;
         data.song_image = "../../../../assets/"+data.song_image;
         data.song_path = "../../../../assets/"+data.song_path;       
        }
       this.showCard = false;
        this.searchTxt = '';
     });
}
play(index?: number): void {
  if (index === undefined) {
    if (this.audio.paused) {
      if (this.audio.readyState === 0) {
        this.trackPointer = 0;
        this.currentMusic = this.songs[0];
        this.audio.src = this.currentMusic.song_path;
      }
      this.audio.play();
      
    } else {
      this.audio.pause();
      
    }
  } else {
    this.trackPointer = index;
    this.currentMusic = this.songs[index];
    this.audio.src = this.currentMusic.song_path;
    this.audio.play();
  } 
}


}

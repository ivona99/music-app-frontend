import { Component, OnInit, ElementRef } from '@angular/core';
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
  public songPath:any = [];  searchTxt: any = '';
  searchResults:any;
  showCard = true;

  constructor(private songService:SongService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(data=> {
      this.songs = data;
      this.songs?.forEach ((element:any) => {
        element.song_path = "../../../../assets/"+element.song_path;
        element.song_image = "../../../../assets/"+element.song_image;
    });
      
    });
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


}

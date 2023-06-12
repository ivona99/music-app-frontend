import { Component, OnInit, ElementRef } from '@angular/core';
import { ArtistService } from '../../services/artist-service/artist.service';
import { ArtistI } from 'src/app/model/artist.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public detailsArtist:any =[];
  artists?: ArtistI[];

  constructor(private artistService: ArtistService, private router: Router, private elementRef:ElementRef) { }

  ngOnInit() {
    this.artistService.getArtists().subscribe(data => {
      this.artists = data;
      this.artists?.forEach((element:any) => {
        element.artist_img = "../../../../assets/"+element.artist_img;
      });
      
    });
  }
  onDetail(id:any){
    this.artistService.getDetailArtist(id.artist_id)
         .subscribe((data:any)=>{
           this.detailsArtist = data;
           this.detailsArtist.artist_img = "../../../../assets/"+ this.detailsArtist.artist_img;
           this.router.navigate(['private/artistpage', id.artist_id]);
       });
  }
  onSidebar(){
    this.elementRef.nativeElement.querySelector('.item-section').classList.toggle('close');
}

}


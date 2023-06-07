import { Component, OnInit } from '@angular/core';
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

  constructor(private artistService: ArtistService, private router: Router) { }

  ngOnInit() {
    this.artistService.getArtists().subscribe(data => {
      this.artists = data;
    });
  }
  onDetail(id:any){
    this.artistService.getDetailArtist(id.artist_id)
         .subscribe((data:any)=>{
           this.detailsArtist = data;
           this.router.navigate(['private/artistpage', id.artist_id]);
       })
  }

}


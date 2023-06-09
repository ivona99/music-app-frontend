import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist-service/artist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumI } from 'src/app/model/album.interface';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
  id?: string;
  name?: string;
  description?:string;
  imageUrl?: string;
  albums?:AlbumI[];
  showCard:boolean = true;

//activatedroute service is used to access the id from the route parameters
//it subcribes to the params observable to get the id value whenever the route parameter changes
//it then calls the loaddata method to fetch the associated data using artistService
//the received data is stored in component properties(name,imageurl) and displayed in the template

  constructor(private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.id = params['id'];
      this.loadData();
    });
  }

  loadData(): void {
    this.artistService.getDetailArtist(this.id).subscribe((data:any) => {
      this.name = data.artist_name;
      this.description = data.artist_desc
      this.imageUrl = "../../../../assets/"+ data.artist_img;
      this.albums = data.albums;
      this.albums?.forEach((element:any) => {
        element.album_img = "../../../../assets/"+element.album_img;
      });
      console.log("album", this.albums);
      
    });
  }

}

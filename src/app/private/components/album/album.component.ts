import { Component, OnInit, ElementRef } from '@angular/core';
import { AlbumI } from 'src/app/model/album.interface';
import { AlbumService } from '../../services/album-service/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public detailsAlbum:any=[];
  albums?:AlbumI[];
  searchTxt: any = '';
  searchResults:any;
  showCard = true;

  constructor(private albumService:AlbumService, private router:Router, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data=> {
      this.albums = data;
      this.albums?.forEach ((element:any) => {
        element.album_img = "../../../../assets/"+element.album_img;
    });
    
    });
  }
  onDetail(id:any){
    this.albumService.getDetailAlbum(id.album_id)
        .subscribe((data:any) => {
          this.detailsAlbum = data;
          this.detailsAlbum.album_img = "../../../../assets/"+ this.detailsAlbum.album_img;
          this.router.navigate(['private/albumpage', id.album_id]);
        })
  }
  onSidebar(){
      this.elementRef.nativeElement.querySelector('.item-section').classList.toggle('close');

  }

  onSearch(name:any){
    this.albumService.getSearchByName(this.searchTxt)
       .subscribe((data:any)=>{
          if(data && data.album_title && this.searchTxt!==''){
           this.searchResults = data;
           data.album_img = "../../../../assets/public/images/albums/album-beyonce.png";
          }
         this.showCard = false;
          this.searchTxt = '';
       });
  }

}

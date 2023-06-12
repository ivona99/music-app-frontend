import { Component, ElementRef, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth-service/auth.service';
import { AlbumService } from '../../services/album-service/album.service';
import { UserI } from 'src/app/model/user.interface';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarEvent:EventEmitter<any> = new EventEmitter<any>();
  onSidebar(){
    this.sidebarEvent.emit();
  }

  constructor(private elementRef: ElementRef, private authService: AuthService) { }

  ngOnInit(): void {
   this.elementRef.nativeElement.querySelector('.toggle').addEventListener("click" , () =>{
    this.elementRef.nativeElement.querySelector('nav').classList.toggle("close");
   });
    
  this.elementRef.nativeElement.querySelector('.toggle-switch').addEventListener("click" , () =>{
   this.elementRef.nativeElement.querySelector('.body').classList.toggle("dark");
      
      if(this.elementRef.nativeElement.querySelector('.body').classList.contains("dark")){
          this.elementRef.nativeElement.querySelector('.mode-text').innerText = "Light mode";
      }else{
        this.elementRef.nativeElement.querySelector('.mode-text').innerText = "Dark mode";
          
      }
  });

  }
  logout(){
    this.authService.logout();
  }

}

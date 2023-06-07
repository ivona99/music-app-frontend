import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth-service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 
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

//   const body = document.querySelector('body'),
//       sidebar = body.querySelector('nav'),
//       toggle = body.querySelector(".toggle"),
//       searchBtn = body.querySelector(".search-box"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text");

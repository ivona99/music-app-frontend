import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth-service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthService,
    private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.querySelector('.search-bar input').addEventListener("focus", () => {
      this.elementRef.nativeElement.querySelector('.search-bar').classList.add("wide");
    });
      this.elementRef.nativeElement.querySelector('.search-bar input').addEventListener("focusout", () => {
        this.elementRef.nativeElement.querySelector('.search-bar').classList.remove("wide");
      });

  }
  logout(){
    this.authService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../public/services/user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public detailUsers:any=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   
  }
// onUser(id:any){
//   this.userService.getUserById(id.user_id).subscribe((data:any) => {
//     this.detailUsers = data;
//     console.log("users", this.detailUsers);
    
//   });
// }
}

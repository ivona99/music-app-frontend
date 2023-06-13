import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
@Input() data:any;
@Input() i:any;
@Input() showCard?:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

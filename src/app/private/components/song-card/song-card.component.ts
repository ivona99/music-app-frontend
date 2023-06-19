import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
@Input() data:any;
@Input() i:any;
@Input() showCard?:boolean;
@Output() playEvent:EventEmitter<any> = new EventEmitter<any>();
play(index?:number){
  this.playEvent.emit(index);
}
  constructor() { }

  ngOnInit(): void {
  }

}

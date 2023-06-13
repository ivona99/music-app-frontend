import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
@Input() data:any;
@Input() showCard?:boolean;

@Output() detailEvent:EventEmitter<any> = new EventEmitter<any>();
onDetail(){
  this.detailEvent.emit();
}
  constructor() { }

  ngOnInit(): void {
  }

}

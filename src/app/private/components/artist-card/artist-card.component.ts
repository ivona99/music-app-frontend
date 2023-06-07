import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input() data: any;
  @Output() detailEvent:EventEmitter<any> = new EventEmitter<any>();
  onDetail(){
    this.detailEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

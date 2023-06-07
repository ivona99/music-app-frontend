import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-sign',
  templateUrl: './switch-sign.component.html',
  styleUrls: ['./switch-sign.component.css']
})
export class SwitchSignComponent implements OnInit {
   switchers: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('switcher') as HTMLCollectionOf<HTMLElement>;
   switchArr:any;


  constructor() { }

  ngOnInit(): void {
    this.switchArr = Array.from(this.switchers);
    
    this.switchArr.forEach((item: Element) => {
      item.addEventListener('click', () => {
        this.switchArr.forEach((item: Element) => item.parentElement!.classList.remove('is-active'));
        item.parentElement!.classList.add('is-active');
      });
    });
    
  }

}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-demo',
  templateUrl: './css-demo.component.html',
  styleUrls: ['./css-demo.component.css']
})
export class CssDemoComponent implements OnInit {

  isFav = false;
  isLiked = false;
  likeCount = 121;

  constructor() { }

  ngOnInit() {
  }


  toggleLike() {
    this.isLiked = !this.isLiked;
    this.isLiked ? this.likeCount++ : this.likeCount--;
  }

}

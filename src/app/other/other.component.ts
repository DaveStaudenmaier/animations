import { Component, OnInit} from '@angular/core';

import { listAddItemFadeAnimation, listAddItemSlideInAnimation, slowEntryAnimation, thumbnailImageExpandAnimation, attentionAnimation } from './../animations';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  animations: [
    slowEntryAnimation,
    listAddItemFadeAnimation,
    listAddItemSlideInAnimation,
    thumbnailImageExpandAnimation,
    attentionAnimation
  ]
})

export class OtherComponent implements OnInit {
  attention = '';
  items = [1];
  count = 0;
  imageState = 'thumbnail';

  constructor() { }

  ngOnInit(): void {
  }

  addItemToList() {
    this.count++;
    this.items.push(this.count);
  }

  expandImage() {
    if (this.imageState === 'thumbnail') {
      this.imageState = 'fullsize';
    } else {
      this.imageState = 'thumbnail';
    }
  }

  startAnimation() {
    if (this.attention) {
      this.attention = '';
    } else {
      this.attention = 'drawAttention';;
    }
  }
}


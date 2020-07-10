import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state, group } from '@angular/animations';

import { slideDownAnimation, addItemFadeAnimation } from './../animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [
    slideDownAnimation,
    addItemFadeAnimation
  ]
})

export class PostComponent implements OnInit {
  posts: Array<string> = [
    'Hi Everyone, this is my first post on this group!'
  ];
  addPostOpen = 'out';
  profileImageUrl = './../../assets/images/profile.jpg';
  postDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost() {
    this.addPostOpen = this.addPostOpen === 'out' ? 'in' : 'out';
  }

  postAddComplete(post: string) {
    this.addPostOpen = 'out';
    if (post !== 'cancel') {
      this.posts.unshift(post);
    }
  }
}

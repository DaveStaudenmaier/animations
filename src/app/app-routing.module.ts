import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full'},
  { path: 'post', component: PostComponent },
  { path: 'other', component: OtherComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
}

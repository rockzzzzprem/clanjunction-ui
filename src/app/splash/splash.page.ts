import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  imports: [IonicModule, RouterLink],
})
export class SplashPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
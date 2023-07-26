import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class MobileNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

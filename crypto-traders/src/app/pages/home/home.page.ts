import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavComponent,
    FooterComponent,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

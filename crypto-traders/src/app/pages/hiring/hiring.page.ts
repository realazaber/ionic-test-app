import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.page.html',
  styleUrls: ['./hiring.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HiringPage implements OnInit {
  selectedJob: string = 'Film Editor and Creator for Trading Content';

  constructor() {}

  ngOnInit() {}
}

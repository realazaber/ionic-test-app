import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Job } from 'src/app/interfaces/Job';

@Component({
  selector: 'app-mobile-job',
  templateUrl: './mobile-job.component.html',
  styleUrls: ['./mobile-job.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class MobileJobComponent implements OnInit {
  @Input() inputJobs?: Job[];

  constructor() {}

  ngOnInit() {}
}

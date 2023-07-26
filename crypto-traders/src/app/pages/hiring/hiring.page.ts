import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MobileJobComponent } from 'src/app/components/mobile-job/mobile-job.component';
import { Job } from 'src/app/interfaces/Job';
@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.page.html',
  styleUrls: ['./hiring.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, MobileJobComponent],
})
export class HiringPage {
  jobs: Job[] = [
    {
      title: 'Film Editor and Creator for Trading Content',
      description:
        "We're looking to increase our exposure on social media, by creating more content (specifically Youtube Videos + shorts and Reels on Instagram).",
      benefits: [
        'You will be provided with living rent-free with me (Either in Los Angeles or New York, open to be discussed).',
        'Compensation is negotiable (DM to discuss).',
        'Become a Partner.',
      ],
      skills: [
        'Short Form Video Editing',
        'Lighting and Content Creation Setting Management',
        'Videography',
        'Photography',
        'Longform Video Editing',
      ],
    },
    {
      title: 'Full Stack Principal Software Developer',
      description:
        "We're looking for a full stack developer to help make our apps and sites.",
      benefits: [
        'You will be provided with living rent-free with me (Either in Los Angeles or New York, open to be discussed).',
        'Compensation is negotiable (DM to discuss).',
        'Become a Partner.',
      ],
      skills: [
        'Software Development',
        'Web Development',
        'Frontend Development',
        'Backend Development',
        'Database Management',
      ],
    },
    {
      title: 'Sr Principal Software Engineer - C++ Programmer',
      description:
        "We're looking to increase our exposure on social media, by creating more content (specifically Youtube Videos + shorts and Reels on Instagram).",
      benefits: [
        'You will be provided with living rent-free with me (Either in Los Angeles or New York, open to be discussed).',
        'Compensation is negotiable (DM to discuss).',
        'Become a Partner.',
      ],
      skills: [
        'C++ Programming',
        'Software Engineering',
        'Algorithm Design',
        'Data Structures',
        'System Design',
      ],
    },
  ];

  selectedJob: Job = this.jobs[0];

  constructor() {}

  selectJob(job: Job) {
    this.selectedJob = job;
  }

  ngOnInit() {
    if (!this.jobs) {
      this.jobs = [];
    }
  }
}

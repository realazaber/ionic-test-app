import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavComponent } from './components/nav/nav.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, NavComponent, MobileNavComponent],
})
export class AppComponent {
  constructor() {}
}

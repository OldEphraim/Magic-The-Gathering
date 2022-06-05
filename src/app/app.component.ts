import { Component } from '@angular/core';
import { SharedStateService } from './services/shared-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public stateService: SharedStateService) {};
  title = 'magic-app-2';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hotel Clinton';
  showLocation = true;

  location = 'LA';

  toggle() {
    this.showLocation = !this.showLocation;
  }
}

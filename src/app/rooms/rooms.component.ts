import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hotel Clinton';
  showLocation = true;

  location = 'LA';
  room1: Room = {
    totalRooms: 10,
    availableRooms: 5,
    bookedRooms: 3,
  };

  toggle() {
    this.showLocation = !this.showLocation;
  }
}

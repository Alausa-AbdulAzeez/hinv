import { Component, Input, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hotel Clinton';
  showLocation = true;

  location = 'LA';
  room: Room = {
    totalRooms: 10,
    availableRooms: 5,
    bookedRooms: 3,
  };

  roomList: RoomList[] = [];
  selectedRoom?: RoomList;

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delexe Room',
        amenities: 'WIFI,TV ',
        price: 500,
        photo: 'a.jpg',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
      },
      {
        roomNumber: 2,
        roomType: 'Delexe ',
        amenities: 'WIFI',
        price: 300,
        photo: 'a.jpg',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
      },
    ];
  }

  toggle() {
    this.showLocation = !this.showLocation;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}

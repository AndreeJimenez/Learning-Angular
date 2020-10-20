import { Component } from '@angular/core';

export interface IUser {
  image: string;
  name: string;
  description: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repasoAngular';
  friends: IUser[] = [
    { image: '../assets/images/1.jpg', name: 'Andree', description: 'Some quick example text to build on the card title and make up the bulk of the card', id: 1 },
    { image: '../assets/images/2.jpg', name: 'Diego', description: 'Some quick example text to build on the card title and make up the bulk of the card', id: 2 },
    { image: '../assets/images/3.jpg', name: 'Cesar', description: 'Some quick example text to build on the card title and make up the bulk of the card', id: 3 },
    { image: '../assets/images/4.jpg', name: 'Charly', description: 'Some quick example text to build on the card title and make up the bulk of the card', id: 4 },
    { image: '../assets/images/5.jpg', name: 'Jorge', description: 'Some quick example text to build on the card title and make up the bulk of the card', id: 5 },
    { image: '../assets/images/6.jpg', name: 'Mauricio', description: 'Some quick example text to build on the card title and make up the bulk of the card', id: 6 },
  ];

  constructor() {}

  outUserMethod(user: IUser): void {
    console.log((user.id) + " - " + (user.name) )
  }
}

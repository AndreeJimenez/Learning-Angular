import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() User : IUser;
  @Output() outUser: EventEmitter<IUser> = new EventEmitter<IUser>()

  constructor() { }

  ngOnInit(): void {}

  onSendData() : void {
    this.outUser.emit(this.User)
  }

  onShowButton(): boolean {
    return Number(this.User.id) % 2 === 0;
  }

}

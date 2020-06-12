import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  constructor() { }

  showNotification = true;

  ngOnInit(): void { }

  removeNotification(): void {
    this.showNotification = false;
  }
}

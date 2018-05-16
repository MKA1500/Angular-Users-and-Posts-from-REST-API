import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title:string = 'Gallery';
  num:number;
  address:Address;

  constructor() { }

  ngOnInit() {
    this.num = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

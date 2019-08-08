import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
    console.log('emitted register on');
  }

  cancelRegister(registerMode: boolean) {
    this.registerMode = registerMode;
    console.log('emitted register off');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartandprofile',
  templateUrl: './chartandprofile.component.html',
  styleUrls: ['./chartandprofile.component.css']
})
export class ChartandprofileComponent implements OnInit {
tempartureData  = [
  { data: [92,96, 98,98] }
];
Bpata  = [
  { data: [110,120,120,140] }
];
  constructor() { }

  ngOnInit() {
  }

}

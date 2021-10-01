import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }


  // currently data is an object [data]="{name: data.name,district_name: data.district_name,fee: data.fee,from: data.from,to: data.to,available_capacity: data.available_capacity,slots: data.slots,vaccine: data.vaccine}"...and for each data object a new name card component is created in the body component.
  
}


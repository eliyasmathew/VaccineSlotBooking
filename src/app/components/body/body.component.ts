import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  textBoxValue: string = ' ';
  dateValue: any='';
  message="this is data from body to name card component "
  hospData: any;
  constructor(private getApiService: GetApiService) {}

  ngOnInit(): void {}

  btnSubmit() {
    console.log("this is the pin entered" , this.textBoxValue)
    let pinCode = this.textBoxValue
    this.textBoxValue = '';

    console.log('this is the date entered', this.dateValue)
    let date= this.dateValue
    date = date.slice(8, 10) + '/' 
    + date.slice(5, 7) + '/' 
    + date.slice(0, 4);
    console.log("this is the formatted date ",date);
    this.dateValue="";
    
    this.getApiService.getApi(pinCode,date).subscribe((data) => {
      console.log(data);
      this.hospData = data;
      console.log("HospData")
      console.log(this.hospData)
    });
    console.log('button is working');
  }
}

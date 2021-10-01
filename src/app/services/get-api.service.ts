import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  
  constructor(private http:HttpClient) { }

  
  date:string='01-10-2021';

  getApi(pin:any,date:any){

    const params = new HttpParams()
    .set('pincode',pin)
    .set('date',date)
    // return this.http.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=560076&date=01-10-2021");
    return this.http.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?",{params:params});
  }
}

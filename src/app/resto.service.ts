import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  private _signupUrl = "http://localhost:3000/signup";
  name : any;
  email : any;


  constructor(private http: HttpClient) { }

  GetResto()
  {
    return[
      this.http.get<any>(this._signupUrl)
    ];
  }

}

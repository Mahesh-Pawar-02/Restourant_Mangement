import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService 
{
  [x: string]: any;
  
  addRestaurent(restaurentModelObj: RestaurentData) 
  {
    return this._http.post<any>("http://localhost:8000/api/resto/create/",restaurentModelObj).pipe(map((res:any)=>{
      console.log(res)
      return res;
    }));
  }

  constructor(private _http: HttpClient) { }

  //POST request
  postRestaurent(data:any ) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //GET request
  getRestaurent() {
    return this._http.get<any>("http://localhost:8000/api/resto/get").pipe(map((res:any)=>{
      console.log(res)
      return res;
    }));
  }

  //delete request
  deleteRestaurant(data: any) {
    return this._http.post<any>("http://localhost:8000/api/resto/delete", data).pipe(map((res:any)=>{
      console.log(res)
      return res;
    }));
  }

  //update request
  updateRestaurant(data: any) 
  {
    return this._http.post<any>("http://localhost:8000/api/resto/update",data).pipe(map((res:any)=>{
      console.log(res)
      return res;
    }));
  }
  signUpAPI(data: any) {
    return this._http.post<any>("http://localhost:8000/api/auth/register/",data).pipe(map((res:any)=>{
      console.log(res)
      return res;
    }));
  }
  loginAPI(data: any) {
    return this._http.post<any>("http://localhost:8000/api/auth/login/",data).pipe(map((res:any)=>{
      console.log(res)
      return res;
    }));
  }
}

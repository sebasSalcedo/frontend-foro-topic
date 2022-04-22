import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { param } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public url = environment.url;

  public headers = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );

  constructor(private _http: HttpClient) {}

  userRegister(user): Observable<any> {
    
    let params = JSON.stringify(user)
  
    return this._http.post(this.url + 'registerUser', params, {
      headers: this.headers});
  }

  loginUser(user, gettoken = null ):Observable<any>{


    if (gettoken != null) {
      
      user.gettoken = gettoken;

    }

     let params = JSON.stringify(user)


     return this._http.post(this.url + 'loginUser', params,{ headers: this.headers});


  }
}

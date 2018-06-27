import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postRequestToRmsys() {
    const body = 'grant_type=password&username=IrinaStanishevskaya&password=myPassword';
    return this.http.post('https://rmsys.coherentsolutions.com/api/Login', body); 
  }
}

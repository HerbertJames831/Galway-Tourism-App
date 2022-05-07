import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  //hotels JSON data local URL
  private readonly url = `assets/data/hotels.json`
  //Dependency Injection
  constructor(private http: HttpClient) { }

  //Fetching hotels datausing Observables of type any
  getHotels(): Observable<any> {
    return this.http.get(this.url);

  }




}

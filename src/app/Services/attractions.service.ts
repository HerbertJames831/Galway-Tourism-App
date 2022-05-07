import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {
  //attractions JSON data local URL
  private readonly url = `assets/data/attractions.json`
  //Dependency Injection
  constructor(private http: HttpClient) { }
  //Fetching attractions data using Observables of type any
  getAttractions(): Observable<any> {
    return this.http.get(this.url);

  }

}

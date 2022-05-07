import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubsService {
  //pubs JSON data local URL
  private readonly url = `assets/data/pubs.json`
  //Dependency Injection
  constructor(private http: HttpClient) { }

  //Fetching pubs data using Observables of type any
  getPubs(): Observable<any> {
    return this.http.get(this.url);

  }







}

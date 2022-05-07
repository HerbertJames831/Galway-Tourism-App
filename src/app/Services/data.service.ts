import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Dependency Injection
  constructor(private http: HttpClient) { }

  //Fetching weather data using Observables of type any
  GetWeatherData(): Observable<any> {
    //External JSON data URL
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');


  }


}

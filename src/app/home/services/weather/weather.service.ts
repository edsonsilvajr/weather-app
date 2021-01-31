import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  public teste(): string {
    return 'teste??';
  }

  public getTeste(city: string = 'Ponta Grossa') {
    return this._http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04bfeb33a43302ca1f966ceb2b3213bd`
    );
  }
}

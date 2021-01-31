import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/interfaces/city/city';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  public teste(): string {
    return 'teste??';
  }

  public getTeste(city: string = 'Ponta Grossa'): Observable<City> {
    return this._http
      .get<City>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04bfeb33a43302ca1f966ceb2b3213bd`
      )
      .pipe(
        map((res: City) => {
          return { name: res.name, id: res.id };
        })
      );
  }
}

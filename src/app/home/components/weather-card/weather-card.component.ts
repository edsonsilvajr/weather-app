import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/city/city';
import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  constructor(private _weatherService: WeatherService) {}

  public teste: string;
  public loading: boolean;
  public cidadeTeste: City;

  ngOnInit(): void {
    this.teste = this._weatherService.teste();
    this.loading = true;
    this._weatherService
      .getTeste()
      .subscribe((res: City) => {
        this.cidadeTeste = res;
      })
      .add(() => {
        setTimeout(() => {
          this.loading = false;
        }, 2500);
      });
  }
}

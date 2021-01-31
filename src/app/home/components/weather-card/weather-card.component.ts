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
  public fadeOut: boolean;
  public hover = false;

  ngOnInit(): void {
    this.teste = this._weatherService.teste();
    this.refresh();
  }

  toCelsius(temp: number): number {
    return Math.round(temp - 273.15);
  }

  public refresh() {
    this.loading = true;
    this.fadeOut = false;
    this._weatherService
      .getTeste()
      .subscribe((res: City) => {
        this.cidadeTeste = res;
        console.log(this.cidadeTeste);
      })
      .add(() => {
        setTimeout(() => {
          this.fadeOut = true;
        }, 2000);
        setTimeout(() => {
          this.loading = false;
        }, 2500);
      });
  }
}

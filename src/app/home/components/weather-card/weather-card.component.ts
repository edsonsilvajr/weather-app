import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';

interface City {
  name: string;
}

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  constructor(private _weatherService: WeatherService) {}

  public teste: string;
  public cidadeTeste: City;

  ngOnInit(): void {
    this.teste = this._weatherService.teste();
    this._weatherService.getTeste().subscribe((res: City) => {
      this.cidadeTeste = { name: res.name };
      console.log(this.cidadeTeste, 'daqui?');
    });
  }
}
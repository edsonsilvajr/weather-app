import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherService } from './services/weather/weather.service';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, BackgroundComponent, WeatherCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [WeatherService],
})
export class HomeModule {}

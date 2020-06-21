import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Carga el servicio para guardar el color del tema del sitio
  constructor(public _ajustes:SettingsService){

  }

  title = 'adminpro';
}

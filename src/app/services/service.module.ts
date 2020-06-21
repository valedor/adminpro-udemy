import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importación de todos los servicios
import {
  SettingsService,
  SharedService,
  SidebarService
} from './service.index';



@NgModule({
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }

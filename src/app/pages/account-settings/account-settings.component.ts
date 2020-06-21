import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from "../../services/service.index";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    public _ajustes:SettingsService) {       
    }

  ngOnInit(): void {

  }

  CambiarColor(tema: string){
    let url = `assets/css/colors/${tema}.css`;
    
    this._ajustes.ajustes.tema = tema;
    this._ajustes.ajustes.temaUrl = url;

    this._ajustes.guardarAjustes();
  }

}

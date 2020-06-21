import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any=[{
    titulo:'Principal',
    icono: 'mdi mdi-gauge',
    submenu:[
      { titulo : 'Dashboard', url : '/dashboard'  },
      { titulo : 'Barra de progreso', url : '/progress'  },
      { titulo : 'Gráficas', url : '/graficas1'  },
    ]
  }];
  constructor() { }
}
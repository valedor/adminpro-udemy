import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTES } from './app.routes';

// Módulos 
import { PagesModule } from "./pages/pages.module";
// import { SharedModule } from './shared/shared.module';

//Servicios
// import { SettingsService } from "./services/service.index";
import {ServiceModule} from './services/service.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./login/register.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,      
    RegisterComponent,
  ],
  //Los módulos van en los imports
  imports: [
    BrowserModule,  
    PagesModule,  
    // SharedModule,
    APP_ROUTES,
    FormsModule,
    ServiceModule
  ],  
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }

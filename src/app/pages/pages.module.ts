import { NgModule } from "@angular/core";
import { PAGES_ROUTES } from "./pages.routes";
import { FormsModule } from "@angular/forms";

//Componentes
import { IncrementadorComponent } from "./../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "./../components/grafico-dona/grafico-dona.component";

import { PagesComponent } from "./pages.component";
import { SharedModule } from "./../shared/shared.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";

// Graficas
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ChartsModule } from "ng2-charts";


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ChartsModule]
})
export class PagesModule {}

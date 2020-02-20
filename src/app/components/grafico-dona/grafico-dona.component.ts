import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() InputDoughnutChartLabels: string[];
  @Input() InputDoughnutChartData: number[];
  @Input() InputDoughnutChartType: string;

  constructor() { }

  ngOnInit(): void {
  }

}

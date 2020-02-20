import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild("viewChildInputIncrementador")
  viewChildInputIncrementador: ElementRef;

  @Input("nombre") leyenda: string = "Leyenda";
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  CambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.viewChildInputIncrementador.nativeElement.focus();
  }

  CambiaValorDelInput(valorQueCambio: number) {
    // let elementoHTML: any = document.getElementsByName("progreso")[0];
    if (valorQueCambio >= 100) {
      this.progreso = 100;
    } else if (valorQueCambio <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = valorQueCambio;
    }
    this.viewChildInputIncrementador.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);    
  }
}

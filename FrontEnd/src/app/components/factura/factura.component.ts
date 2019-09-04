import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/producto';
import {DetalleFactura} from '../../models/detalleFactura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: []
})
export class FacturaComponent implements OnInit {

  arr = Array; //Array type captured in a variable
  num:number = 1;
  id: number = 0;
  cantidad: number = 0;
  detalles:DetalleFactura[] = [
    {id: null, cantidad: 3, producto: {nombre: "hola", precioUnitario: 3, id: 1}}
  ];

  constructor() { }

  ngOnInit() {

  }

  more(){

    const detalle:DetalleFactura = {
      id: null,
      cantidad: this.cantidad,
      producto: {
        id: this.id,
        nombre: null,
        precioUnitario: null
      }
    };

    this.detalles.push(detalle);
  }



}

import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import {ProductoService} from '../../../services/producto.service';
import {FacturaService} from '../../../services/factura.service';
import {Factura} from '../../../models/factura';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  facturas: Factura[] = [];

  constructor(private fService: FacturaService) {
	this.fService.getAll().subscribe((data)=>{
	  console.log('Hola');
	  this.facturas = [];
      this.facturas = data;
    });
  }

  ngOnInit() {
	  
  }

  delete(id:number){
    this.fService.delete(id).subscribe((data)=>{
      location.reload();
    });
  }

}

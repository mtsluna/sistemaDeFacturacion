import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/producto';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {

  //productos: Producto = {
  //  id: 0,
  //  nombre: ' ',
  //  precioUnitario: 0
  //};

  productos: Producto[] = [];

  constructor(private pService: ProductoService) { }

  ngOnInit() {
    this.pService.getAll().subscribe((data)=>{
      this.productos = data;
    });
  }

  delete(id:number){
    this.pService.delete(id).subscribe((data)=>{
      location.reload();
    });
  }

}

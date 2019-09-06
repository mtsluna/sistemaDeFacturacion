import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/producto';
import {DetalleFactura} from '../../models/detalleFactura';
import {HttpClient} from '@angular/common/http';
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  arr = Array; //Array type captured in a variable
  num:number = 1;
  id: number = 1;
  cantidad: number = 1;
  detalles:DetalleFactura[] = [];
  productos: Producto[] = [];
  private v: string = "";
  indice: number = 0;

  constructor(private productoService: ProductoService) {
    this.getProductos();
  }

  ngOnInit() {

  }

  more(){

    const detalle:DetalleFactura = {
      id: this.indice++,
      cantidad: this.cantidad,
      producto: {
        id: Number(this.splitProducto(this.v)[0]),
        nombre: this.splitProducto(this.v)[1],
        precioUnitario: Number(this.splitProducto(this.v)[2])
      }
    };

    this.detalles.push(detalle);
  }
  
  getProductos(){
    this.productoService.getAll().subscribe((data)=>{
      this.productos = data;
    })
  }

  splitProducto(a:string){
    const array: string [] = a.split('&');
    return array;
  }
  
  quitar(id: number){
    this.detalles.forEach((detalle, index)=> {
      if(detalle.id == id){
        this.detalles.splice(index,1);
      }
    });
  }


}

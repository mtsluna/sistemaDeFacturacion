import {Component, Input, OnInit} from '@angular/core';
import {Producto} from '../../models/producto';
import {DetalleFactura} from '../../models/detalleFactura';
import {HttpClient} from '@angular/common/http';
import {ProductoService} from "../../services/producto.service";
import {ClienteService} from '../../services/cliente.service';
import {VendedorService} from '../../services/vendedor.service';
import {Cliente} from '../../models/cliente';
import {Vendedor} from '../../models/vendedor';
import {Factura} from '../../models/factura';
import {FacturaService} from '../../services/factura.service';
import {Persona} from '../../models/persona';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  cantidad: number = 1;
  detalles:DetalleFactura[] = [];
  productos: Producto[] = [];
  private v: string = "";
  indice: number = 0;
  nuevoCliente: boolean = false;
  clientes: Cliente[] = [];
  clienteValue;
  clientePost: Cliente = {
    nombre: null,
    apellido: null,
    telefono: null,
    direccion: null,
    documento: null,
    id: null
  };
  vendedores: Vendedor[] = [];
  vendedorValue;
  factura: Factura = {
    tipo: "C",
    numero: 1,
    fecha: "2019-09-06",
    id: null,
    detalles: null,
    personas: null
  };

  constructor(private productoService: ProductoService, private clienteService: ClienteService, private vendedorService: VendedorService, private facturaService:FacturaService) {
    this.getProductos();
    this.getClientes();
    this.getVendedores();
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

  getClientes(){
    this.clienteService.getAll().subscribe((data)=>{
      this.clientes = data;
    })
  }

  getVendedores(){
    this.vendedorService.getAll().subscribe((data)=>{
      this.vendedores = data;
    })
  }

  async guardarCliente(){

    this.nuevoCliente = false;

    await this.clienteService.post(this.clientePost).subscribe((data)=>{
      this.clienteValue = data.id
      this.getClientes();
    })

  }

  buscarXDni(array:Persona[], buscado, valueChanger){
    array.forEach((data, index)=>{
      if(data.id == buscado){
        valueChanger = data.id;
      }
    })
  }

  generarFactura(){

    // @ts-ignore
    const personas: Persona[] = [
      {
        id: this.vendedorValue,
        documento: null,
        direccion: null,
        apellido: null,
        nombre: null
      },
      {
        id: this.clienteValue,
        documento: null,
        direccion: null,
        apellido: null,
        nombre: null
      }
    ];

    this.factura.personas = personas;
    this.factura.detalles = this.detalles;

    this.facturaService.post(this.factura).subscribe((data)=>{

    });
  }

  buscarCliente(buscado){
    this.clientes.forEach((data, index)=>{
      console.log('hola')
      console.log(data.documento+' '+buscado)
      if(data.documento == buscado){
        this.clienteValue = index;
        console.log('hola '+index)
      }
    })
  }

  refVendedor: string;
  idVendedor: number = 0;
  buscarVendedor(){
    this.vendedores.forEach((data, index)=>{
      console.log(data.documento+' - '+this.refVendedor)
      if(data.documento == this.refVendedor){
        this.idVendedor == index;
        console.log(this.idVendedor)
      }
    })
  }


}

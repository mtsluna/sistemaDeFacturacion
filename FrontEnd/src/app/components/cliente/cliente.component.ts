import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/producto';
import {ProductoService} from '../../services/producto.service';
import {ClienteService} from '../../services/cliente.service';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private cService: ClienteService) { }

  ngOnInit() {
    this.cService.getAll().subscribe((data)=>{
      this.clientes = data;
    });
  }

  delete(id:number){
    this.cService.delete(id).subscribe((data)=>{
      location.reload();
    });
  }

}

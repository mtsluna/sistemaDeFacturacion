import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import {ProductoService} from '../../../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cliente} from '../../../models/cliente';
import {ClienteService} from '../../../services/cliente.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styles: []
})
export class EntityComponentCliente implements OnInit {

  cliente: Cliente = {
    id: 0,
    nombre: 'Matías',
    apellido: 'Luna',
    documento: '416598940',
    direccion: 'Chacabuco 441',
    telefono: 155109127
  };

  constructor(private cService: ClienteService, private act:ActivatedRoute, private rou:Router) {
    this.act.params.subscribe((data)=>{
      if(data.id != 0) {
        this.cService.getOne(data.id).subscribe((data2) => {
          this.cliente = data2;
        })
      }
    });
  }

  save(){
    if(this.cliente.id != 0){
      this.cService.put(this.cliente.id, this.cliente).subscribe((data)=>{
        location.reload();
      });
    }
    else{
      this.cService.post(this.cliente).subscribe((data)=>{
        this.rou.navigate(['/clientes/'+data.id]);
      });
    }
  }

  ngOnInit() {

  }

}

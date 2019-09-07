import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../models/cliente';
import {ClienteService} from '../../../services/cliente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Vendedor} from '../../../models/vendedor';
import {VendedorService} from '../../../services/vendedor.service';

@Component({
  selector: 'app-entity-vendedor',
  templateUrl: './entity-vendedor.component.html',
  styles: []
})
export class EntityVendedorComponent implements OnInit {

  vendedor: Vendedor = {
    id: 0,
    nombre: 'Matías',
    apellido: 'Luna',
    documento: '416598940',
    direccion: 'Chacabuco 441',
    sector: 'Programacion'
  };

  constructor(private vService: VendedorService, private act:ActivatedRoute, private rou:Router) {
    this.act.params.subscribe((data)=>{
      if(data.id != 0) {
        this.vService.getOne(data.id).subscribe((data2) => {
          this.vendedor = data2;
        })
      }
    });
  }

  save(){
    if(this.vendedor.id != 0){
      this.vService.put(this.vendedor.id, this.vendedor).subscribe((data)=>{
        location.reload();
      });
    }
    else{
      this.vService.post(this.vendedor).subscribe((data)=>{
        this.rou.navigate(['/vendedores/'+data.id]);
      });
    }
  }

  ngOnInit() {

  }

}

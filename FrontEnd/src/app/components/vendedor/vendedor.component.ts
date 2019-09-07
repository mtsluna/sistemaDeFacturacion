import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';
import {VendedorService} from '../../services/vendedor.service';
import {Vendedor} from '../../models/vendedor';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styles: []
})
export class VendedorComponent implements OnInit {

  vendedores: Vendedor[] = [];

  constructor(private vService: VendedorService) { }

  ngOnInit() {
    this.vService.getAll().subscribe((data)=>{
      this.vendedores = data;
    });
  }

  delete(id:number){
    this.vService.delete(id).subscribe((data)=>{
      location.reload();
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Producto} from '../../../models/producto';
import {ProductoService} from '../../../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styles: []
})
export class EntidadComponent implements OnInit {

  producto: Producto = {
    id: 0,
    nombre: 'Nombre del producto',
    precioUnitario: 100
  };

  constructor(private pService: ProductoService, private act:ActivatedRoute, private rou:Router) {
    this.act.params.subscribe((data)=>{
      if(data.id != 0) {
        this.pService.getOne(data.id).subscribe((data2) => {
          this.producto = data2;
        })
      }
    });
  }

  save(){
    if(this.producto.id != 0){
      this.pService.put(this.producto.id, this.producto).subscribe((data)=>{
        location.reload();
      });
    }
    else{
      this.pService.post(this.producto).subscribe((data)=>{
        this.rou.navigate(['/productos/'+data.id]);
      });
    }
  }

  ngOnInit() {

  }

}

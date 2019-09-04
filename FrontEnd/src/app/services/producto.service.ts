import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Cliente} from '../models/cliente';
import {HttpClient} from '@angular/common/http';
import {Producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends BaseService<Producto>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/v1/producto/');
  }

}

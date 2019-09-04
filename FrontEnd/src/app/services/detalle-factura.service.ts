import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Cliente} from '../models/cliente';
import {HttpClient} from '@angular/common/http';
import {DetalleFactura} from '../models/detalleFactura';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService extends BaseService<DetalleFactura>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/v1/detalleFactura/');
  }

}

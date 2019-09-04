import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Cliente} from '../models/cliente';
import {HttpClient} from '@angular/common/http';
import {Factura} from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService extends BaseService<Factura>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/v1/factura/');
  }

}

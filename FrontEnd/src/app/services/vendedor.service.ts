import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Cliente} from '../models/cliente';
import {HttpClient} from '@angular/common/http';
import {Vendedor} from '../models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService extends BaseService<Vendedor>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/v1/vendedor/');
  }

}

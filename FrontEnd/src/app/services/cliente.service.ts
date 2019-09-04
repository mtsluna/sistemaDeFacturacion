import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Cliente} from '../models/cliente';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService<Cliente>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/v1/cliente/');
  }

}

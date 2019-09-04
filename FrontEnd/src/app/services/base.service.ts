import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  constructor(private http:HttpClient, private URL:string) {}

  getOne(id:number) : Observable<T>{
    return this.http.get<T>(this.URL+id);
  }

  getAll() : Observable<T[]>{
    return this.http.get<T[]>(this.URL);
  }

  post(t:T) : Observable<T>{
    return this.http.post<T>(this.URL, t);
  }

  put(id:number, t:T) : Observable<T>{
    return this.http.put<T>(this.URL+id, t);
  }

  delete(id: number){
    return this.http.delete(this.URL+id);
  }

}

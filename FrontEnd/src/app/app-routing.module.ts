import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductosComponent} from './components/productos/productos.component';
import {FacturaComponent} from './components/factura/factura.component';

const routes: Routes = [
  {path: '*', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'clientes', component: HomeComponent},
  {path: 'vendedores', component: HomeComponent},
  {path: 'facturas', component: FacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

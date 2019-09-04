import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductosComponent} from './components/productos/productos.component';
import {FacturaComponent} from './components/factura/factura.component';
import {EntidadComponent} from './components/productos/entidad/entidad.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:id', component: EntidadComponent},
  {path: 'clientes', component: HomeComponent},
  {path: 'vendedores', component: HomeComponent},
  {path: 'facturas', component: FacturaComponent},
  {path : '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

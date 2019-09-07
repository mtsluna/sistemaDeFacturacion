import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductosComponent} from './components/productos/productos.component';
import {FacturaComponent} from './components/factura/factura.component';
import {EntidadComponent} from './components/productos/entidad/entidad.component';
import {ClienteComponent} from './components/cliente/cliente.component';
import {EntityComponentCliente} from './components/cliente/entity/entity.component';
import {VendedorComponent} from './components/vendedor/vendedor.component';
import {EntityVendedorComponent} from './components/vendedor/entity-vendedor/entity-vendedor.component';
import {ListadoComponent} from './components/factura/listado/listado.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:id', component: EntidadComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: 'clientes/:id', component: EntityComponentCliente},
  {path: 'clientes', component: HomeComponent},
  {path: 'vendedores', component: VendedorComponent},
  {path: 'vendedores/:id', component: EntityVendedorComponent},
  {path: 'facturas', component: FacturaComponent},
  {path: 'facturas/listado', component: ListadoComponent},
  {path : '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

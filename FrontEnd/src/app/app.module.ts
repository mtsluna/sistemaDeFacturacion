import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { FacturaComponent } from './components/factura/factura.component';
import {HttpClientModule} from '@angular/common/http';
import { EntidadComponent } from './components/productos/entidad/entidad.component';
import {FormsModule} from '@angular/forms';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import {EntityComponentCliente} from './components/cliente/entity/entity.component';
import { EntityVendedorComponent } from './components/vendedor/entity-vendedor/entity-vendedor.component';
import { ListadoComponent } from './components/factura/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductosComponent,
    FacturaComponent,
    EntidadComponent,
    ClienteComponent,
    VendedorComponent,
    EntityComponentCliente,
    EntityVendedorComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

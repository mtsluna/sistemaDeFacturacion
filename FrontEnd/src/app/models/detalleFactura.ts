import { Base } from './base';
import {Producto} from './producto';

export class DetalleFactura extends Base{
    cantidad:number;
    producto:Producto;
}

import { Comprobante } from './comprobante';
import {DetalleFactura} from './detalleFactura';
import {Persona} from './persona';

export class Factura extends Comprobante{

    tipo: string;
    detalles: DetalleFactura[] = [];
    personas: Persona [] = [];

}

import { Injectable } from '@angular/core';
import { inventario } from '../interfaces/inventario.interface';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  public objinv: inventario[] = [
    {
      id: 1,
      cantidad: 1,
      producto: {nombre: "Papas Margarita", logotipo: "", cantidadp:0 }
    },
    {
      id: 2,
      cantidad: 1,
      producto: {nombre: "Gaseosa Pepsi", logotipo: "", cantidadp:0}
    },
];

get inventario(){
    return [...this.objinv]
}

  constructor() { }
}

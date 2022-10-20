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
      producto: {nombre: "Papas Margarita", logotipo: "./assets/papas_margaritas.png" }
    },
    {
      id: 2,
      cantidad: 1,
      producto: {nombre: "Gaseosa Pepsi", logotipo: "./assets/gaseosa_pepsi.png"}
    },
    {
      id: 3,
      cantidad: 1,
      producto: {nombre: "Galletas Oreo", logotipo: "./assets/galletas_oreo.png"}
    },
    {
      id: 4,
      cantidad: 1,
      producto: {nombre: "Pony Malta", logotipo:"./assets/pony_malta.png"}
    }
];

get inventario(){
    return [...this.objinv]
}

  constructor() { }
}

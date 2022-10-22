import { Injectable } from '@angular/core';
import { inventario } from '../interfaces/inventario.interface';
import { ProductoService } from './producto.service';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  Inventario: inventario[] = []
  idSeleccionado: number = 0

  constructor(private productoService: ProductoService) { }

  get inventario(): inventario[] {
    return [...this.Inventario]
  }

  crearInventario(): number {
    let idNuevo = this.inventario.length;
    this.Inventario.push({
      id: this.Inventario.length,
      productos: this.productoService.inventario.map(p => ({producto: p, cantidad: 0}))
    });
    return idNuevo
  }

  seleccionarId(id:number) {
    this.idSeleccionado = id
  }
}

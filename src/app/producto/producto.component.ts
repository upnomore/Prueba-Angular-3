import { Component } from '@angular/core';
import { InventarioService } from '../service/inventario.service';
import { inventario, producto } from '../interfaces/inventario.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {

  constructor(private inventarioService: InventarioService) {}

  get inventario(){
    return this.inventarioService.objinv;
  }

  base:number = 1;

  acumular(valor:number){
    this.base += valor
  }

}

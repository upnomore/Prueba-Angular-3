import { Component } from '@angular/core';
import { InventarioService } from '../service/inventario.service';
import { inventario, producto } from '../interfaces/inventario.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {

  valor:number = 1;
  i:number = 1
  constructor(private inventarioService: InventarioService) {}

  get inventario(){
    return this.inventarioService.objinv;
  }

  
  objinv: inventario["producto"] = {
    nombre: "", 
    logotipo:"", 
  }

  acumular(){
    this.valor += this.i
  }

  restar(){
    this.valor -= this.i
  }

}

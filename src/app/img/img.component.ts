import { Component, ViewChild } from '@angular/core';
import { InventarioService } from '../service/inventario.service';
import { inventario } from '../interfaces/inventario.interface';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html'
})
export class ImgComponent {

  cantidad:number = 0

  inventarios: inventario[] = []

  //@ViewChild(ProductoComponent)acumular! : ProductoComponent

  constructor(public inventarioservice: InventarioService) { 
    this.inventarios = this.inventarioservice.inventario
  }



}

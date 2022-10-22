import { Component, ViewChild } from '@angular/core';
import { InventarioService } from '../service/inventario.service';
import { inventario, Producto, IProductoInventario } from '../interfaces/inventario.interface';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {


  constructor(public inventarioService: InventarioService) {}

  Inventarios: inventario[] = []
  nu: inventario[] = []
  valor: number = 1
  i: number = 1

  acumular(indiceProducto: number, esSuma: boolean){
    if (this.inventarioService.Inventario[this.inventarioService.idSeleccionado].productos[indiceProducto].cantidad == 0 && esSuma == false){
      return
    }
    this.inventarioService.Inventario[this.inventarioService.idSeleccionado].productos[indiceProducto].cantidad += (esSuma) ? 1 : -1
  }

  // Forma 2 contador
 /* get inventario(){
    return this.inventarioService.objinv;
  }

  
  objinv: inventario = {
    id: 0,
    cantidad: 0,
    productos: [
      {
        producto: {
          nombre: "", 
          logotipo:""
        }, 
        cantidad: 0
      }
    ],
  }

  acumular(valor:number, iprod:IProductoInventario){
    if (iprod.cantidad == 0 && valor == -1){
      return ;
    }
    iprod.cantidad += valor
  }

*/
}

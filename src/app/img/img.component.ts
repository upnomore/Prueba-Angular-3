import { Component } from '@angular/core';
import { InventarioService } from '../service/inventario.service';
import { inventario } from '../interfaces/inventario.interface';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html'
})
export class ImgComponent {

  inventarios: inventario[] = []

  constructor(private inventarioservice: InventarioService) { 
    this.inventarios = this.inventarioservice.inventario
  }

}

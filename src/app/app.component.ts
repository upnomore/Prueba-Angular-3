import { Component, Input } from '@angular/core';
import { inventario } from './interfaces/inventario.interface';
import { InventarioService } from './service/inventario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventario';
  
  // Llamar servicio
  get inventario(){
    return this.inventarioService.objinv
}

  constructor(private inventarioService: InventarioService) {}

  //contador
  i:number = 3

  objinv: inventario = {
    id: 0,
    cantidad: 0,
    producto: {nombre:"", logotipo:"", cantidadp:0}
  }

  // funcion de agregar
  agregarinv(){
    let agregar: inventario = {
      id: this.i++,
      cantidad: 1,
      producto: {nombre:"Papas Margarita", logotipo:"", cantidadp:0}
    } 
    this.objinv = agregar;
    this.inventario.push(this.objinv)
    this.almacenar()
  }

  //localstorage
  almacenar() {
    localStorage.setItem(`${this.objinv.id}`, JSON.stringify(this.inventario))
  }

  


  
}


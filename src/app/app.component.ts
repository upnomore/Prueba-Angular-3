import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { inventario } from './interfaces/inventario.interface';
import { ProductoComponent } from './producto/producto.component';
import { InventarioService } from './service/inventario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventario';
  myForm: FormGroup

  constructor(public inventarioService: InventarioService) {
    this.myForm = new FormGroup({
      inventario: new FormControl(""),
    })
    this.myForm.controls["inventario"].valueChanges.subscribe((event)=> {
      this.inventarioService.seleccionarId(event)
    });
    this.agregarinv()
   }

   agregarinv(){
    const idnuevo = this.inventarioService.crearInventario();
    this.myForm.controls['inventario'].setValue(idnuevo)
    this.almacenar()
   }
  

  //localstorage
  almacenar() {
    localStorage.setItem(`${this.inventarioService.idSeleccionado}`, JSON.stringify(this.inventarioService.Inventario))
  }

}


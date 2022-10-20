import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventarioService } from './service/inventario.service';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    
  ],
  providers: [
    InventarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

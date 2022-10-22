import { Injectable } from "@angular/core";
import { Producto } from '../interfaces/inventario.interface';


@Injectable({
    providedIn: "root",
})
export class ProductoService {
    inventario: Producto[] = [
    { nombre: "Papas Margarita", logotipo: "./assets/papas_margaritas.png" },
    { nombre: "Gaseosa Pepsi", logotipo: "./assets/gaseosa_pepsi.png" },
    { nombre: "Galletas Oreo", logotipo: "./assets/galletas_oreo.png" },
    { nombre: "Pony Malta", logotipo: "./assets/pony_malta.png" }
    ]
}
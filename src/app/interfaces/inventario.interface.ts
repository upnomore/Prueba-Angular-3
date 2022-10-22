export interface inventario{
    id: number
    productos: IProductoInventario[];
}

export interface Producto{
    nombre: string,
    logotipo: string
}

export interface IProductoInventario {
    producto: Producto
    cantidad: number
}
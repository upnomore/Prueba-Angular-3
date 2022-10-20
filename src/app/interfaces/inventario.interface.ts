export interface inventario{
    id: number
    cantidad: number
    producto: producto
}

export interface producto{
    nombre: string,
    logotipo: string
}
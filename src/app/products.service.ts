import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] =[
    {
      id:1,
      producto:"Galletas chokis",
      Compra:"10.00",
      Venta:"15.00",
      ganancia:5,
      stock:"100.00"
    },
    {
      id:2,
      producto:"Mermelada de fresa",
      Compra:"65.00",
      Venta:"80.00",
      ganancia:15,
      stock:"100.00"
    },
    {
      id:3,
      producto:"Aceite",
      Compra:"18.00",
      Venta:"20.00",
      ganancia:2,
      stock:"100.00"
    },
    {
      id:4,
      producto:"Palomitas de maíz",
      Compra:"12.00",
      Venta:"15.00",
      ganancia:3,
      stock:"100.00"
    },
    {
      id:5,
      producto:"Doritos",
      Compra:"5.00",
      Venta:"8.00",
      ganancia:3,
      stock:"100.00"
    },
  ]
  constructor() { }
  productDetail(id:number){ 
    const items = this.products.filter(item => item.id === id) 
    return items;
} }

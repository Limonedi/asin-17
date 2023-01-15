import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!:number; //almacenara el id recibido por la url
  public productDetail!:any; //almacenara el objeto json recibido por el servicio

  constructor(private route:ActivatedRoute, private dataServices:ProductsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); //Obtenemos el ID de la url
    console.log(this.dataServices.productDetail(this.id)); //Mostramos en consola el detalle del producto por el ID
    this.productDetail = this.dataServices.productDetail(this.id); //Le pasamos el objeto json a nuestro array

  }
 
}

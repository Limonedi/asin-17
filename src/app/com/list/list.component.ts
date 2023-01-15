import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productsList !: any[];
  constructor(private dataServices:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.productsList= this.dataServices.products; 
  }

  editar(id:number){
    this.router.navigate(['edit',id]);
  }
}

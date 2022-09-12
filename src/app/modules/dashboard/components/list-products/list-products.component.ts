import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import {tap} from 'rxjs/operators';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  listProducts: Product[] = [];

  displayedColumns: string[] = ['name', 'description','price', 'image','actions'];
  dataSource!:MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {
     this.productSvc.getProducts()
    .pipe(
      tap((products: Product[] ) => this.listProducts=products),
      )
    .subscribe(tiendas => {
      this.dataSource = new MatTableDataSource(tiendas);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   });

  }

  /* ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } */
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

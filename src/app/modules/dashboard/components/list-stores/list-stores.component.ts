import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {tap,map} from 'rxjs/operators';
import { Store } from 'src/app/shared/interfaces/stores.interfaces';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.css']
})
export class ListStoresComponent implements OnInit {

  listStores: Store[] = [];

  displayedColumns: string[] = ['name', 'address', 'city','openingHours','actions']
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataSvc:DataService,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getStores()
  }

   /* ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } */
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

getStores(){
  this.dataSvc.getStores()
  .subscribe((stores:Store[]) => {
    this.listStores=stores;
    this.dataSource = new MatTableDataSource(this.listStores);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
 });}

deleteStore(element:Store){
  if(element._id){
    this.dataSvc.deleteStore(element._id).pipe(
    tap(res=>this.getStores()))
    .subscribe();}
  

  this._snackbar.open('La tienda fue eliminada con éxito','',{
    duration:1500,
    horizontalPosition:'right',
    verticalPosition:'bottom',
    panelClass: 'green-snackbar'
    })
}

editarStore(element:Store){
  if(element._id){
    this.dataSvc.editStore(element).pipe(
    tap(res=>this.getStores()))
    .subscribe();}
  

  this._snackbar.open('La tienda fue actualizada con éxito','',{
    duration:1500,
    horizontalPosition:'right',
    verticalPosition:'bottom',
    panelClass: 'green-snackbar'
    })
}


}

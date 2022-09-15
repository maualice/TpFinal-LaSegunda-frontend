import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class ProductsService {
    //private apiURL= `${environment.api}/api/v1/products`;    no se conecta en el vercel
    //private apiURL= 'http://localhost:3000/api/v1/products';
    private apiURL= `https://tpfinal-lasegunda.herokuapp.com/api/v1/products`;
    
    constructor(private http:HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiURL)
    }
}
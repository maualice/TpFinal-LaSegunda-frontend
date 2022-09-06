import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../interfaces/order.interface";
import { Store } from "../interfaces/stores.interfaces";



@Injectable({
    providedIn: 'root'
  })

export class DataService {
  
    private apiURL='http://localhost:3000/api/v1';
    
    constructor(private http:HttpClient) {
  
    }
  
    getStores(): Observable <Store[]> {
        return this.http.get<Store[]>(`${this.apiURL}/stores`)
    }

    saveOrder(order:Order): Observable <Order> {
        return this.http.post<Order>(`${this.apiURL}/orders`,order)
    }//crear un service separado para esto

  }
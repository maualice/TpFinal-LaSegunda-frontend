import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../interfaces/order.interface";
import { Store } from "../interfaces/stores.interfaces";
import { map } from "rxjs/operators"



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

    deleteStore(id: string): Observable <Store> {
      return this.http.delete<Store>(`${this.apiURL}/stores/`+ id)
    }

    saveStore(store:Store): Observable <Store> {
      return this.http.post<Store>(`${this.apiURL}/stores`,store)
    }
  
    editStore(store:Store): Observable <Store> {
      return this.http.patch<Store>(`${this.apiURL}/stores/${store._id}`,store)
    }

    getOneStore(id:string): Observable <Store> {
      return this.http.get(`${this.apiURL}/stores/`+ id).pipe(map((response:any)=> {
        const store:Store = response.store;
        return store;
      }))
    }

    saveOrder(order:Order): Observable <Order> {
        return this.http.post<Order>(`${this.apiURL}/orders`,order)
    }//crear un service separado para esto

  }
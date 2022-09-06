import { Store } from "./stores.interfaces";

export interface Order{
    _id:string;
    name:string;
    //shippingAddress:string;
    //city:string;
    //date:string;
    store:Store;
    pickup:boolean;
}
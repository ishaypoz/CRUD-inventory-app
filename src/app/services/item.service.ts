import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsUrl: string = 'http://localhost:3000/items';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }
  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url, httpOptions);
  }
  deleteItem(item: Item): Observable<any> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.delete<Item>(url, httpOptions);
  }
  addItem(item: any): Observable<any> {
    console.log(item);
    return this.http.post<any>(this.itemsUrl, item, httpOptions);
  }
  editItem(item: any): Observable<any> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put<any>(url, item, httpOptions);
  }
  //can use one serive but split it in to two
  withdrawItem(data: any): Observable<any> {
    const url = `${this.itemsUrl}/${data.id}/withdraw`;
    let withdraw = { withdraw: data.amount };
    return this.http.put<any>(url, withdraw, httpOptions);
  }
  depositItem(data: any): Observable<any> {
    const url = `${this.itemsUrl}/${data.id}/deposit`;
    let deposit = { deposit: data.amount };
    return this.http.put<any>(url, deposit, httpOptions);
  }
}

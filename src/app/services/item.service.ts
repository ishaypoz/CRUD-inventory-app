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
  deleteItem(item: Item): Observable<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.delete<Item>(url, httpOptions);
  }
  addItem(item: Object): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, httpOptions);
  }
  editItem(item: Item): Observable<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  }
}

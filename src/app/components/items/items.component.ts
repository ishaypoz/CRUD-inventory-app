import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[];
  search: Item;
  @Input() id: number;
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.initialList();
  }
  initialList() {
    this.itemService.getItems().subscribe(
      (items) => {
        this.items = items;
      },
      (err) => console.log(err)
    );
  }
  deleteItem(item: Item) {
    //Delete from Server
    this.itemService.deleteItem(item).subscribe();
    //Delete from UI
    this.items = this.items.filter((i) => i.id !== item.id);
  }
  searchItem(id: number) {
    this.itemService.getItem(id).subscribe(
      (item) => {
        this.items = [item];
      },
      (err) => {
        this.items = [];
      }
    );
  }
  updateCount(data: any) {
    if (this.items[0].id == data.id) {
      [this.search] = this.items;
    } else {
      this.initialList();
      this.search = this.items.find((i) => i.id == data.id);
    }
    if (this.search) {
      switch (data.option) {
        case 'withdraw':
          if (this.search.count - data.amount >= 0) {
            this.search.count -= data.amount;
            this.itemService.editItem(this.search).subscribe(
              () => console.log('Withdraw'),
              (err) => console.log(err)
            );
          }
          this.searchItem(this.search.id);
          break;
        case 'deposit':
          this.search.count += parseInt(data.amount);
          this.items = [this.search];
          this.itemService.editItem(this.search).subscribe(
            () => console.log('Deposit'),
            (err) => console.log(err)
          );
          this.searchItem(this.search.id);
          break;
        default:
          break;
      }
    }
  }
}

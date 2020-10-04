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
  error: string = '';
  info: string = '';
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
    this.itemService.deleteItem(item).subscribe((respone) => {
      this.info = respone;
    });
    this.items = this.items.filter((i) => i.id !== item.id);
  }
  searchItem(id: number) {
    this.itemService.getItem(id).subscribe(
      (item) => {
        this.error = '';
        this.items = [item];
      },
      (err) => {
        this.error = err.error;
        this.items = [];
      }
    );
  }
  updateCount(data: any) {
    switch (data.option) {
      case 'withdraw':
        this.itemService.withdrawItem(data).subscribe(
          () => {
            this.error = '';
            this.searchItem(data.id);
          },
          (err) => {
            this.error = err.error;
          }
        );
        break;
      case 'deposit':
        this.itemService.depositItem(data).subscribe(
          () => {
            this.error = '';
            this.searchItem(data.id);
          },
          (err) => {
            this.error = err.error;
          }
        );
        break;
      default:
        break;
    }
  }
}

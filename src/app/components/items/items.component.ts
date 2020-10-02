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
    this.itemService.deleteItem(item).subscribe((respone) => {
      console.log(respone);
    });
    this.items = this.items.filter((i) => i.id !== item.id);
  }
  searchItem(id: number) {
    this.itemService.getItem(id).subscribe((item) => {
      this.items = [item];
    });
  }
  updateCount(data: any) {
    switch (data.option) {
      case 'withdraw':
        this.itemService.withdrawItem(data).subscribe(
          () => this.searchItem(data.id),
          (err) => console.log(err)
        );
        break;
      case 'deposit':
        this.itemService.depositItem(data).subscribe(
          () => this.searchItem(data.id),
          (err) => console.log(err)
        );
        break;
      default:
        break;
    }
  }
}

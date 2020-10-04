import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  data = {
    option: '',
    amount: null,
    id: null,
  };
  error: string = '';
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}
  onDelete(item) {
    this.deleteItem.emit(item);
  }
  changeBalance() {
    this.data.id = this.item.id;
    switch (this.data.option) {
      case 'withdraw':
        this.itemService.withdrawItem(this.data).subscribe(
          () => {
            this.error = '';
            this.item.count -= this.data.amount;
          },
          (err) => {
            this.error = err.error;
          }
        );
        break;
      case 'deposit':
        this.itemService.depositItem(this.data).subscribe(
          () => {
            this.error = '';
            this.item.count += this.data.amount;
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

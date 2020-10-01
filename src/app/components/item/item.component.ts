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
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}
  onDelete(item) {
    this.deleteItem.emit(item);
  }
}

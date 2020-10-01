import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  id: number;
  @Output() searchItem: EventEmitter<Number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSearch(id: number) {
    if (id !== undefined) {
      this.searchItem.emit(this.id);
    }
  }
}

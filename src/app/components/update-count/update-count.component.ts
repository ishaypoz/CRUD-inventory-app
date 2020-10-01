import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-count',
  templateUrl: './update-count.component.html',
  styleUrls: ['./update-count.component.css'],
})
export class UpdateCountComponent implements OnInit {
  @Output() updateCount: EventEmitter<any> = new EventEmitter();
  data = {
    option: '',
    amount: null,
    id: null,
  };
  constructor() {}

  ngOnInit(): void {}
  changeCount() {
    this.updateCount.emit(this.data);
  }
}

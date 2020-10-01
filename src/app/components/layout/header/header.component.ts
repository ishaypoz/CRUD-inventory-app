import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  id: number;
  @Output() searchItem: EventEmitter<Number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

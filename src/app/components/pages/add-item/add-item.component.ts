import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  item: object;
  name: string;
  description: string;
  count: number;
  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.item = {
      name: this.name,
      description: this.description,
      count: this.count,
    };
    this.itemService.addItem(this.item).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (err) => console.log(err)
    );
  }
}

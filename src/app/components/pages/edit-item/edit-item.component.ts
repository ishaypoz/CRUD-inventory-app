import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  currentItem: Item = {
    id: null,
    name: '',
    description: '',
    count: null,
  };
  error: string = '';
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getItem(this.route.snapshot.paramMap.get('id'));
  }
  getItem(id: string): void {
    this.itemService.getItem(parseInt(id)).subscribe(
      (data) => {
        this.currentItem = data;
      },
      () => {
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate() {
    this.currentItem = {
      id: this.currentItem.id,
      name: this.currentItem.name,
      description: this.currentItem.description,
      count: this.currentItem.count,
    };
    this.itemService.editItem(this.currentItem).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}

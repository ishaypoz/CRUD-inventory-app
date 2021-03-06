import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/pages/add-item/add-item.component';
import { EditItemComponent } from './components/pages/edit-item/edit-item.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'items/new', component: AddItemComponent },
  { path: 'items/:id/edit', component: EditItemComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

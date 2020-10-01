import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/pages/add-item/add-item.component';
import { EditItemComponent } from './components/pages/edit-item/edit-item.component';
const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'new', component: AddItemComponent },
  { path: 'edit/:id', component: EditItemComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

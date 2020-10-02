import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddItemComponent } from './components/pages/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { EditItemComponent } from './components/pages/edit-item/edit-item.component';
import { UpdateCountComponent } from './components/update-count/update-count.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    HeaderComponent,
    AddItemComponent,
    SearchComponent,
    EditItemComponent,
    UpdateCountComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

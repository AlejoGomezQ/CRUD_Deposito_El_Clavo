import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

//Interfaces
import { Product } from '../../interfaces/product';

@Component({
  selector: 'products-table',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  @Input() productsList: Product[] = [];
}

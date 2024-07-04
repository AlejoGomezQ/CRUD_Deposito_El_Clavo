import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

//Services
import { ProductService } from '../../services/product.service';

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
  private productService: ProductService = inject(ProductService);

  @Input() productsList: Product[] = [];

  @Input() deleteProduct!: ((id: number) => void); 
}

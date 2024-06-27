import { Component } from '@angular/core';

//Components
import { ProductsTableComponent } from '../../components/products-table/products-table.component';

//Interfaces
import { Product } from '../../interfaces/product';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductsTableComponent, RouterModule]
})
export class ProductListComponent {
  public productsList: Product[] = [
    {
        id: 1,
        name: "Martillo",
        description: "Ferreteria",
        price: 8500,
        stock: 10
    },
    {
        id: 2,
        name: "Taladro",
        description: "Ferreteria",
        price: 250000,
        stock: 3
    },
    {
        id: 3,
        name: "Destornillador",
        description: "Ferreteria",
        price: 5000,
        stock: 5
    },
  ]
}

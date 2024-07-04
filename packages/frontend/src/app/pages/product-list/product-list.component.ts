import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { ProductsTableComponent } from '../../components/products-table/products-table.component';

//Services
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductsTableComponent, RouterModule]
})
export class ProductListComponent implements OnInit {
  private productService: ProductService = inject(ProductService);

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.productService.getProductsList().subscribe(data => {
      console.log(data);
    })
  }
}

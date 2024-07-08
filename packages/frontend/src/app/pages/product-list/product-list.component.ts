import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//Components
import { ProductsTableComponent } from '../../components/products-table/products-table.component';

//Services
import { ProductService } from '../../services/product.service';

//Interfaces
import { Product } from '../../interfaces/product';


@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductsTableComponent, RouterModule]
})
export class ProductListComponent implements OnInit {
  private productService: ProductService = inject(ProductService);
  private toastr: ToastrService = inject(ToastrService);

  public productList: Product[] = []

  ngOnInit(): void {
    this.getProductList();
  }

  public getProductList(): void {
    this.productService.getProductsList().subscribe({
      next: (data: Product[]) => this.productList = data,
      error: err => console.error('Ocurrio un error al obtener la lista de productos' ,err)
    })
  }

  public deleteProduct(id: number): void {
    this.productService.deleteProductById(id).subscribe({
      next: () => {
        this.getProductList();
        this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
      },
      error: err => console.error('Ocurrio un error al intertar borrar el producto', err)
    })
  }
}

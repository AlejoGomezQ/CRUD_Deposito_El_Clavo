import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  public productForm: FormGroup;
  public id: number;
  public formTitle: string = 'Agregar producto';
  public buttonText: string = 'Agregar';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  public ngOnInit(): void {
    if(this.id != 0) {
      this.formTitle = 'Editar producto';
      this.buttonText = 'Actualizar';
      this.getProduct(this.id);
    };
  }

  public addProduct() {
   const product: Product = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price,
      stock: this.productForm.value.stock
   }

   if(this.id !== 0) {
    product.id = this.id;
    this.productService.updateProduct(this.id, product).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.toastr.info(`El producto ${product.name} fue actualizado con éxito.`, 'Producto actualizado');
      },
      error: err => console.error(err)
    })
   } else {
    this.productService.addProduct(product).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.toastr.success(`El producto ${product.name} fue registrado con éxito.`, 'Producto registrado');
      },
      error: err => console.error(err)
     })
   }
  }

  public getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (data: Product) => {
        this.productForm.setValue({
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock
        })
      }, 
      error: err => console.error(err)
    })
  }
}

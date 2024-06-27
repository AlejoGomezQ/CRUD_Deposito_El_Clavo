import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  public productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    })
  }

  public addProduct() {
   const product: Product = {
      name: this.productForm.value.productName,
      description: this.productForm.value.productDescription,
      price: this.productForm.value.productPrice,
      stock: this.productForm.value.productStock
   }
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products/';
   }

   public getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  public deleteProductById(id: number ): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  public addProduct(product: Product): Observable<void> {
    return this.http.post<void>(
      `${this.myAppUrl}${this.myApiUrl}`, 
      product
    );
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  public updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(
      `${this.myAppUrl}${this.myApiUrl}${product.id}`, 
      product
    )
  }
}
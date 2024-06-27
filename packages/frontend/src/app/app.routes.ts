import { Routes } from '@angular/router';

//Pages
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'agregar-producto',
        component: AddEditProductComponent
    },
    {
        path: 'editar-producto/:id',
        component: AddEditProductComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'app-add-edit-product',
    standalone: true,
    templateUrl: './add-edit-product.component.html',
    styleUrl: './add-edit-product.component.css',
    imports: [CardComponent]
})
export class AddEditProductComponent {

}

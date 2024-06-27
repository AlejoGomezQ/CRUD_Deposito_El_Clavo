import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'card-component',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [FormComponent]
})
export class CardComponent {

}

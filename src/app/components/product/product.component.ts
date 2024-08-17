import {Component, Input, ViewEncapsulation} from '@angular/core'
import { IProduct } from '../../moduls/products'

@Component ({
   selector: 'app-product',
   templateUrl: './product.component.html',
   encapsulation: ViewEncapsulation.None
})

export class ProductComponent {
   @Input() product: IProduct
   details = false
}

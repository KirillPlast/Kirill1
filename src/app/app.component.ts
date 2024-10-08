import { Component } from '@angular/core'
import { IProduct } from './moduls/products'
import {products as data} from './data/products'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kirill App'

  products: IProduct[] = data
}

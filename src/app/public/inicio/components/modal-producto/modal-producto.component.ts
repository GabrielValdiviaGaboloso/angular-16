import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent {
  activeModal = inject(NgbActiveModal);
  productService = inject(ProductService);

  product: Product = { id: 0, name: '', price: 0, stock: 0 };

  saveProduct(form: any) {
    if (!form.valid) return;

    if (!/^[a-zA-Z0-9 ]+$/.test(this.product.name)) return;

  }
}

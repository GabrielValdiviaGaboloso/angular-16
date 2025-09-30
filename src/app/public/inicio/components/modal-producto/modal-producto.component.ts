import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  // Objeto que se llenará con el formulario
  product: Product = { id: 0, name: '', price: 0, stock: 0 };

  saveProduct(form: any) {
    if (form.valid) {
      this.productService.addProduct(this.product).subscribe({
        next: (res) => {
          console.log('Producto agregado:', res);
          this.activeModal.close('Producto agregado');
        },
        error: (err) => console.error('Error al agregar producto', err)
      });
    }
  }
}

// Componente para abrir el modal desde otro componente
@Component({
  selector: 'ngbd-modal-component',
  template: ``,
})
export class NgbdModalComponent {
  private modalService = inject(NgbModal);

  open() {
    this.modalService.open(ModalProductoComponent, { size: 'lg' });
  }
}

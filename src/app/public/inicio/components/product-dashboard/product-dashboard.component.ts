import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProductoComponent } from '../modal-producto/modal-producto.component';
import { ProductService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  paginatedProducts: Product[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  maxSize = 8;

  resizeListener: any;

  constructor(private productService: ProductService, private modalService: NgbModal) {}

  ngOnInit() {
    this.loadProducts();
    this.updateMaxSize();

    // Guardamos la referencia para remover luego
    this.resizeListener = () => this.updateMaxSize();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }

  updateMaxSize() {
    if (window.innerWidth < 768) { // móvil
      this.maxSize = 2;
    } else { // PC
      this.maxSize = 8;
    }
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.collectionSize = this.products.length;
      this.refreshProducts();
    });
  }

  refreshProducts() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProducts = this.products.slice(start, end);
  }

  addProduct() {
    const modalRef = this.modalService.open(ModalProductoComponent);
    modalRef.componentInstance.name = ''; // para pasar datos si quieres

    modalRef.closed.subscribe((newProduct: Product) => {
      if (newProduct) {
        this.productService.addProduct(newProduct).subscribe(() => this.loadProducts());
      }
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }

  onPageChange(page: number) {
    this.page = page;
    this.refreshProducts();
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.page = 1; // reinicia a la primera página
    this.refreshProducts();
  }
}

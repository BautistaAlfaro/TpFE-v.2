import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail-modal',
  standalone: true,
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.css']
})
export class ProductDetailModalComponent {
  product: any; // Producto que se mostrará en el modal
  cantidad: number = 1; // Cantidad inicial del producto
  comentario: string = ''; // Comentario del producto

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProductDetailModalComponent>,
  ) {
    this.product = data.product;
  }
  

  close(): void {
    this.dialogRef.close();
  }

  increaseQuantity() {
    this.cantidad++;
  }

  decreaseQuantity() {
    if (this.cantidad > 1) this.cantidad--;
  }

  addToCart() {
    // Crear el objeto de producto que se agregará al carrito
    const cartItem = {
      nombre: this.product.nombre,
      cantidad: this.cantidad,
      comentario: this.comentario,
      imagenUrl: this.product.imagenUrl,
      precio: this.product.precio
    };
    
    // Agregar el producto al carrito
    // this.cartService.addToCart(cartItem);
    
    // Cerrar el modal
    this.dialogRef.close();
  }
}

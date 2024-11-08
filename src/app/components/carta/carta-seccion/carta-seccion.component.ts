import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDetailModalComponent } from '../../product-detail-modal/product-detail-modal.component';

// Define the Seccion interface with additional properties if needed
interface Seccion {
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-carta-seccion',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './carta-seccion.component.html',
  styleUrls: ['./carta-seccion.component.css']
})
export class CartaSeccionComponent implements OnInit {
  @Input() secciones: Seccion[] = []; // Bind the input to Seccion array

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // Additional initialization logic can go here (if needed)
  }

  // Open the product detail modal with the provided product data
  openProductModal(seccion: any) {
    this.dialog.open(ProductDetailModalComponent, {
      data: { product: seccion },  // Asegúrate de que "product" es la propiedad correcta
      width: '500px',
      autoFocus: true
    });
  }
}  
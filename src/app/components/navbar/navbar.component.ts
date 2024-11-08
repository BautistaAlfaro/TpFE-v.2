import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CurrencyPipe,CommonModule],  // Solo necesitas CurrencyPipe si lo usas en el componente
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Corrige "styleUrl" a "styleUrls"
})
export class NavbarComponent {
  constructor() { }
}


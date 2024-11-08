import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component.js';
import { HomeComponent } from './components/home/home.component.js';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductDetailModalComponent } from './components/product-detail-modal/product-detail-modal.component.js';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { NavbarComponent } from "./components/navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    CarouselComponent,
    JumbotronComponent,
    HomeComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregido: styleUrls en lugar de styleUrl
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite(); // Asegúrate de que Flowbite está correctamente instalado y configurado
  }
}

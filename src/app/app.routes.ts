import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component.js';
import { FooterComponent } from './components/footer/footer.component.js';
import { CarouselComponent } from './components/carousel/carousel.component.js';
import { CartaComponent } from './components/carta/carta.component.js';
import { HomeComponent } from './components/home/home.component.js';

export const routes: Routes = [ 

    {path: '', component: HomeComponent},
    {path: 'carta', component: CartaComponent},
]

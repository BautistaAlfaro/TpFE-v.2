import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { JumbotronComponent } from "../jumbotron/jumbotron.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, JumbotronComponent, FooterComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

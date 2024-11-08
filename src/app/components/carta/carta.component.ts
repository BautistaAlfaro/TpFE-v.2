import { Component ,OnInit} from '@angular/core';
import { FooterComponent } from '../footer/footer.component.js';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component.js';
import { CartaSeccionComponent } from './carta-seccion/carta-seccion.component.js';

interface Section {
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [ FooterComponent, NavbarComponent,CartaSeccionComponent, MatDialogModule ],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent implements OnInit {
  cart: { product: any, cantidad: number, comentario: string }[] = [];
  bebidas: Section[] = [
    { nombre: 'Coca-Cola', descripcion: 'La bebida clásica que nunca falla, refrescante y burbujeante, perfecta para cualquier momento del día.', precio: 2.5 },
    { nombre: 'Jugo de Naranja', descripcion: 'Jugo natural 100% fresco, exprimido directamente de las mejores naranjas, ideal para un comienzo saludable.', precio: 3.0 },
    { nombre: 'Agua Mineral', descripcion: 'Pureza en cada sorbo, agua fresca y revitalizante, ideal para acompañar tu comida.', precio: 1.5 },
    { nombre: 'Agua con Gas', descripcion: 'Refrescante y burbujeante, el agua con gas es el acompañante ideal para esos días calurosos.', precio: 1.7 },
    { nombre: 'Cerveza', descripcion: 'Una cerveza artesanal, perfecta para disfrutar de una velada relajada. Refrescante y llena de sabor.', precio: 4.0 },
    { nombre: 'Té Helado', descripcion: 'Un té frío con limón, refrescante y ligeramente dulce, ideal para relajarse después de una comida.', precio: 2.8 },
    { nombre: 'Limonada', descripcion: 'Una limonada refrescante que equilibra lo ácido con lo dulce, perfecta para los días soleados.', precio: 3.2 },
    { nombre: 'Café Expreso', descripcion: 'Un café fuerte y aromático, preparado con granos de alta calidad para los amantes del café.', precio: 2.0 },
    { nombre: 'Batido de Fresa', descripcion: 'Delicioso batido de fresa natural, cremoso y dulce, el refresco perfecto para los días cálidos.', precio: 3.5 },
    { nombre: 'Vino Tinto', descripcion: 'Un vino de la casa, con notas suaves y afrutadas, ideal para acompañar carnes rojas o pasta.', precio: 5.5 }
  ];

  entradas: Section[] = [
    { nombre: 'Ensalada César', descripcion: 'Lechuga fresca, pollo a la parrilla, crutones y un aderezo cremoso que le dará un toque especial.', precio: 6.5 },
    { nombre: 'Papas Fritas', descripcion: 'Crujientes papas fritas acompañadas con una suave salsa de queso, un clásico que nunca falla.', precio: 4.0 },
    { nombre: 'Alitas de Pollo', descripcion: 'Alitas de pollo jugosas y picantes, acompañadas de una deliciosa salsa, perfectas para compartir.', precio: 8.0 },
    { nombre: 'Nachos', descripcion: 'Nachos crocantes acompañados de guacamole fresco y queso derretido, ideales para picar.', precio: 7.5 },
    { nombre: 'Palitos de Queso', descripcion: 'Palitos de queso mozzarella fritos, acompañados con una salsa marinara para un toque extra de sabor.', precio: 5.0 },
    { nombre: 'Sopa del Día', descripcion: 'Deliciosa sopa casera preparada con ingredientes frescos, el toque reconfortante que necesitas.', precio: 5.5 },
    { nombre: 'Hummus', descripcion: 'Hummus cremoso acompañado de pan pita recién horneado, un plato saludable y lleno de sabor.', precio: 6.0 },
    { nombre: 'Calamares Fritos', descripcion: 'Calamares crocantes acompañados de una salsa tártara especial, perfectos para los amantes de los mariscos.', precio: 9.0 },
    { nombre: 'Empanadas', descripcion: 'Empanadas rellenas de carne sazonada, fritas a la perfección, un bocado delicioso.', precio: 7.0 },
    { nombre: 'Tacos', descripcion: 'Tacos de carne asada, rellenos de sabores auténticos y acompañados de salsa fresca.', precio: 8.5 }
  ];

  guarniciones: Section[] = [
    { nombre: 'Arroz', descripcion: 'Arroz blanco, suave y esponjoso, el acompañante ideal para cualquier plato.', precio: 2.0 },
    { nombre: 'Puré de Papas', descripcion: 'Puré de papas casero, cremoso y lleno de sabor, perfecto para acompañar tus platos principales.', precio: 2.5 },
    { nombre: 'Vegetales al Vapor', descripcion: 'Vegetales frescos y al vapor, un acompañante saludable y ligero para equilibrar tu comida.', precio: 3.0 },
    { nombre: 'Papas al Horno', descripcion: 'Papas horneadas con un toque de romero, crujientes por fuera y suaves por dentro.', precio: 3.5 },
    { nombre: 'Ensalada Verde', descripcion: 'Una mezcla fresca de lechuga, tomate y pepino, ideal para un toque fresco y saludable.', precio: 2.5 },
    { nombre: 'Pasta', descripcion: 'Pasta con salsa de tomate, simple y deliciosa, ideal para los amantes de la comida italiana.', precio: 4.0 },
    { nombre: 'Puré de Camote', descripcion: 'Puré de camote con un toque de canela, dulce y sabroso, un acompañante único para tus platos.', precio: 3.5 },
    { nombre: 'Papas Fritas', descripcion: 'Papas fritas con sal, crujientes por fuera y tiernas por dentro, el clásico acompañante de siempre.', precio: 3.0 }
  ];

  principales: Section[] = [
    { nombre: 'Filete de Res', descripcion: 'Filete de res jugoso a la parrilla, perfecto para los amantes de la carne.', precio: 15.0 },
    { nombre: 'Pollo a la Parrilla', descripcion: 'Pechuga de pollo a la parrilla, tierna y sabrosa, acompañada con una salsa especial.', precio: 12.0 },
    { nombre: 'Salmón', descripcion: 'Salmón fresco a la parrilla, con un toque de limón, ideal para los que buscan una opción más ligera.', precio: 14.5 },
    { nombre: 'Pasta Alfredo', descripcion: 'Pasta con salsa Alfredo cremosa y deliciosa, un clásico italiano que te hará querer más.', precio: 10.0 },
    { nombre: 'Hamburguesa', descripcion: 'Hamburguesa gourmet con queso derretido y tocino crujiente, un festín de sabores.', precio: 11.0 },
    { nombre: 'Tacos de Camarón', descripcion: 'Tacos de camarón con salsa de mango, frescos y llenos de sabor tropical.', precio: 13.0 },
    { nombre: 'Pizza', descripcion: 'Pizza de pepperoni, con una masa crujiente y cubierta de queso derretido, la pizza que siempre has querido.', precio: 9.0 },
    { nombre: 'Tacos de Pescado', descripcion: 'Tacos de pescado con salsa de chipotle, un plato de sabores frescos y deliciosos.', precio: 12.5 },
    { nombre: 'Pasta Primavera', descripcion: 'Pasta con vegetales frescos y una salsa ligera, perfecta para los días cálidos.', precio: 10.5 },
    { nombre: 'Costillas de Cerdo', descripcion: 'Costillas de cerdo BBQ, jugosas y sabrosas, acompañadas de una salsa agridulce irresistible.', precio: 13.5 }
  ];

  postres: Section[] = [
    { nombre: 'Pastel de Chocolate', descripcion: 'Un pastel de chocolate suave, acompañado de una bola de helado, el final perfecto para tu comida.', precio: 5.0 },
    { nombre: 'Helado', descripcion: 'Tres bolas de helado, servidas en tu sabor favorito, la manera perfecta de refrescarte.', precio: 4.0 },
    { nombre: 'Flan', descripcion: 'Flan casero, suave y cremoso, con un toque dulce que hará que tu paladar se derrita.', precio: 3.5 },
    { nombre: 'Tiramisú', descripcion: 'Tiramisú con café, un postre italiano con capas de sabor que no puedes dejar de probar.', precio: 4.5 },
    { nombre: 'Cheesecake', descripcion: 'Cheesecake de fresa, cremosa y fresca, la opción ideal para los amantes de los postres suaves.', precio: 5.5 },
    { nombre: 'Gelatina', descripcion: 'Gelatina de frutas frescas, ligera y deliciosa, el postre refrescante que necesitas.', precio: 3.0 },
    { nombre: 'Crepa', descripcion: 'Crepa de cajeta, suave y dulce, con el toque especial que hará que tu día sea más dulce.', precio: 4.0 },
    { nombre: 'Churros', descripcion: 'Churros recién hechos, acompañados con una rica salsa de chocolate, el snack perfecto.', precio: 3.5 },
    { nombre: 'Brownie', descripcion: 'Brownie de chocolate con nueces, un postre denso y delicioso para los más golosos.', precio: 4.0 },
    { nombre: 'Macaron', descripcion: 'Macaron de frambuesa, ligero y delicado, un bocado perfecto para endulzar tu día.', precio: 4.5 }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    
  }
  // Método para agregar productos al carrito
  addToCart(product: Section): void {
    const existingProduct = this.cart.find(item => item.product.nombre === product.nombre);
    
    if (existingProduct) {
      existingProduct.cantidad += 1; // Si el producto ya está en el carrito, solo incrementa la cantidad
    } else {
      this.cart.push({ product, cantidad: 1, comentario: '' }); // Si no está, lo agrega al carrito
    }
  }

  // Método para actualizar la cantidad de un producto en el carrito
  updateQuantity(product: Section, quantityChange: number): void {
    const cartItem = this.cart.find(item => item.product.nombre === product.nombre);
    if (cartItem) {
      const newQuantity = cartItem.cantidad + quantityChange;
      if (newQuantity >= 0) {
        cartItem.cantidad = newQuantity; // Actualiza la cantidad del producto en el carrito
      }
    }
  }

  // Método para agregar un comentario a un producto en el carrito
  addComment(product: Section, comment: string): void {
    const cartItem = this.cart.find(item => item.product.nombre === product.nombre);
    if (cartItem) {
      cartItem.comentario = comment; // Actualiza el comentario del producto en el carrito
    }
  }
};
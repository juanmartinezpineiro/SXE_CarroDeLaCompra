import {Component, OnInit} from '@angular/core';
import {ServicioDeAutentServiceService} from '../../servicio-de-autent-service.service';
import {FireDBService} from '../../fire-db.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.html',
  styleUrls: ['./lista-compra.css']
})
export class ListaProductos implements OnInit {

  // Lista alimentos
  productos: any[];

  constructor(public dbProd: FireDBService,
              public authComponent: ServicioDeAutentServiceService) {
    const producto1 = {
      titulo: 'Manzanas',
      comprado: false
    };
    const producto2 = {
      titulo: 'Naranjas',
      comprado: false,
    };
    const producto3 = {
      titulo: 'Carne picada',
      comprado: false,
    };
    const producto4 = {
      titulo: 'Filetes de pollo',
      comprado: false,
    };
    const producto5 = {
      titulo: 'Salmon',
      comprado: false,
    };
    const producto6 = {
      titulo: 'Uvas',
      comprado: false,
    };
    const producto7 = {
      titulo: 'Cerezas',
      comprado: false,
    };
    const producto8 = {
      titulo: 'Cereales',
      comprado: false,
    };
    const producto9 = {
      titulo: 'Pan',
      comprado: false,
    };
    const producto10 = {
      titulo: 'Cebollas',
      comprado: false,
    };
    const producto11 = {
      titulo: 'Estrella Galicia',
      comprado: false,
    };
    const producto12 = {
      titulo: 'Wisky',
      comprado: false,
    };

    this.productos = [];
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
    this.productos.push(producto4);
    this.productos.push(producto5);
    this.productos.push(producto6);
    this.productos.push(producto7);
    this.productos.push(producto8);
    this.productos.push(producto9);
    this.productos.push(producto10);
    this.productos.push(producto11);
    this.productos.push(producto12);
  }

  ngOnInit() {
  }

  seleccionarCompra(userMail: string, userUid: string, index) {

    this.productos[index].comprado = !this.productos[index].comprado;
    this.dbProd.guardarProds(userMail, userUid, this.productos[index].nombre, this.productos[index].comprado);
  }

  comprar(producto) {
    producto.comprado = !producto.comprado;
  }
}

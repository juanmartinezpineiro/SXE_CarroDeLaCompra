import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.html',
  styleUrls: ['./compra.css']
})
export class StoreList implements OnInit {

  compra: any;

  constructor() {
    this.compra = {
      titulo: 'Titulo del Producto',
      descripcion: 'Descripción'
    }
  }

  ngOnInit() {
  }

}

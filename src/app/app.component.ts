import { Component } from '@angular/core';
import {ServicioDeAutentServiceService} from './servicio-de-autent-service.service';
import {FireDBService} from './fire-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarroSXE';
  constructor( public authComponent: ServicioDeAutentServiceService,
               public dbApp: FireDBService) {
  }
}

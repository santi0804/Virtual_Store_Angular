import { Component } from '@angular/core';
import { ContadorComponent } from "./contador/contador.component";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BotonesComponent } from './botones/botones.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { BuclesComponent } from './bucles/bucles.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    ContadorComponent,
    NavbarComponent,
    HomeComponent,
    BotonesComponent,
    FormulariosComponent,
    BuclesComponent
  ],
})
export class AppComponent {
  title = 'front_angular';
}

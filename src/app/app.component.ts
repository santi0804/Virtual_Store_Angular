import { Component } from '@angular/core';
import { ContadorComponent } from "./contador/contador.component";
import { Navbar } from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';
import { BotonesComponent } from './botones/botones.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ContadorComponent, Navbar, HomeComponent, BotonesComponent]
})
export class AppComponent {
  title = 'front_angular';
}

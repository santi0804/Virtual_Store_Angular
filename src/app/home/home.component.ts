import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule], // <-- Añade esto
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

   // Variables para datos dinámicos
  titulo: string = "Welcome to the Madhouse";
  descripcion: string = "Aqui encontraras lo mas actualizado en productos tecnólogicos";
  servicios: string [] = ["Tecnologia","Diseño","Inversiones"];
  monstrarMensaje: boolean = true;

  constructor() {}

  ngOnInit(): void {
      // Esta logica se ejecuta al iniciar el componente
      console.log ("Iniciando...")
  }

  // Metodo para interactuar con el usuario.
   cambiarMensaje(): void {
    this.monstrarMensaje = !this.monstrarMensaje;
   }
}

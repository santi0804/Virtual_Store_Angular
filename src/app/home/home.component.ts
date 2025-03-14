import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

   // Variables para datos dinámicos
  titulo: string = "Welcome To My Virtual Store";
  descripcion: string = "Aqui encontraras lo mas actualizado en productos";
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

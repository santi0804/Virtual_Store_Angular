import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  text_color: string = "";
  button_disabled: boolean = true;  /* Boton de activar y desactivar */

}

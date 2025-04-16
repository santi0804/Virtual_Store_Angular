import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent implements OnInit {

  personas: Persona[] = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Marta", edad: 36 },
    { nombre: "Carmen", edad: 28 },
    { nombre: "Jhon", edad: 56 },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}

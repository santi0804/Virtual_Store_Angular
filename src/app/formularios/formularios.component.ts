import { Component } from '@angular/core';

@Component({
  selector: 'app-formularios',
  imports: [],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {

  mostrar_en_consola(
    name: string,
    lastname: string,
    email: string,
    phone: string
  ) {
    // Crear objeto con los datos
    const formData = {
      nombre: name,
      apellido: lastname,
      correo: email,
      telefono: phone
    };

    console.log('Datos del formulario:', formData);

    //  Muestra una alerta al usuario
    alert('Datos enviados correctamente. Revisa la consola.');
  }
}

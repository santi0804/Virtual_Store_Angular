import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent {

    numero: number = 1;

    decrementar() {      // asi se puede realizar la operacion de menos dentro del metos igual para auemntarla.
        this.numero--;
    }

    incrementar() {
        this.numero += 1;
    }
}
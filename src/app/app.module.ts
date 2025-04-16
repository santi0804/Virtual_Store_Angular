import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BotonesComponent } from './botones/botones.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { BuclesComponent } from './bucles/bucles.component';

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        RouterModule,
        ContadorComponent,
        HomeComponent,
        NavbarComponent,
        BotonesComponent,
        FormulariosComponent,
        BuclesComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
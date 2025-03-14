import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { Navbar } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        ContadorComponent,
        HomeComponent,
        Navbar

    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
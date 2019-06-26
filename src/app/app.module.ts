import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GradienteComponent } from './gradiente/gradiente.component';
import { BoxshadowComponent } from './boxshadow/boxshadow.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { SafePipe } from './pipes/safe.pipe';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        GradienteComponent,
        BoxshadowComponent,
        SafePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ColorPickerModule,
        ClipboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

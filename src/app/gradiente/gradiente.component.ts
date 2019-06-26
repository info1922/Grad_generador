import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from '../pipes/safe.pipe';


@Component({
    selector: 'app-gradiente',
    templateUrl: './gradiente.component.html',
    styleUrls: ['./gradiente.component.css']
})
export class GradienteComponent implements OnInit {
    color1 = '#52bc9f';
    color2 = '#b57dff';
    // tslint:disable-next-line:variable-name
    to_right = 'to right';
    direction = 'to right';

    id = 1;
    codigo = [
        `background: linear-gradient(${this.direction}, ${this.color1}, ${this.color2});`,
        `background: -webkit-linear-gradient(${this.direction}, ${this.color1}, ${this.color2});`,
        `background: -moz-linear-gradient(${this.direction}, ${this.color1}, ${this.color2});`,
        `background: -o-linear-gradient(${this.direction}, ${this.color1}, ${this.color2});`
    ];

    constructor( private sanitizer: DomSanitizer) { }



    ngOnInit() {
    }

    selectMe(id) {
        this.id = id;
    }

}

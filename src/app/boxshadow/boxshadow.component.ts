import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-boxshadow',
    templateUrl: './boxshadow.component.html',
    styleUrls: ['./boxshadow.component.css']
})
export class BoxshadowComponent implements OnInit {

    horizontal = '9';
    vertical = '5';
    blur = '34';
    spread = '0';
    color = 'gray';


    constructor() { }

    ngOnInit() {
    }

}

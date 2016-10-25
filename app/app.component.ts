/**
 * Created by nnag on 10/24/16.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'myapp',
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/heroes">Heroes</a>
        <router-outlet></router-outlet>
`
})

export class AppComponent{
    title = 'Tour of Heroes';
}
/**
 * Created by nabarun on 10/24/2016.
 */
import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router'
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }
     gotoDetails(hero: Hero):void{
         let link = ['/detail',hero.id];
         this.router.navigate(link);
     }

    constructor(
        private heroService: HeroService,
        private router: Router){

    }

}
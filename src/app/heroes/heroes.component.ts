import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { DataService } from "../data.service";


@Component({
  selector: 'app-heroes',
   templateUrl: './heroes.component.html',
  // template: `
  // `,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  message: string = "Message from Child"
  
  hero: Hero = {
    id: 1,
    name: 'Replace the content'
  };

  

  constructor() { }
 
  ngOnInit() {
  }

}

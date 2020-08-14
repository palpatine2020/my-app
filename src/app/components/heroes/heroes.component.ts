import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'windstorm';

  constructor() { }

  ngOnInit(): void {
  }

}

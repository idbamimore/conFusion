import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/dice 1.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '77.9',
      //tslint:disable-next-line:max-line-length
      description: 'A unique combination'
    },
      
    {
      id: '1',
      name: 'Uthappizza',
      image: '/assets/images/dice 2.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '78.9',
      //tslint:disable-next-line:max-line-length
      description: 'A unique combination'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';


const DISHES: Dish[] = [
  {
    id: '1',
    name: 'Software Development',
    image: '/assets/images/dice 1.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '77.9',
    //tslint:disable-next-line:max-line-length
    description: 'A unique combination'
  },
    
  {
    id: '2',
    name: 'Web Development',
    image: '/assets/images/dice 2.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '78.9',
    //tslint:disable-next-line:max-line-length
    description: 'A unique combination'
  },

  {
    id: '3',
    name: 'Data Science',
    image: '/assets/images/dice 2.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '78.9',
    //tslint:disable-next-line:max-line-length
    description: 'A unique combination'
  },

  {
    id: '4',
    name: 'Artificial Intelligence',
    image: '/assets/images/dice 2.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '78.9',
    //tslint:disable-next-line:max-line-length
    description: 'A unique combination'
  }
]



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish = DISHES[0];

  constructor() { }

  ngOnInit(): void {
  }

}

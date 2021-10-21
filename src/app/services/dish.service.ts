import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // method for getting dish
  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(DISHES), 10000)
    });
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 10000);
  });
}

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 10000);
  });
}
}

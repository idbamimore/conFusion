import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
  flyInOut()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish | any;
  dishErrMess: string | any;
  promotion: Promotion | any;
  leader: Leader | any;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject ('BaseURL') public BaseURL: any) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
    .subscribe(dish => this.dish = dish,
      errmess => this.dishErrMess = <any>errmess);
    this.promotionService.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
    .subscribe(leader => this.leader = leader);
  }

}

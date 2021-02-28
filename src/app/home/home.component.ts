import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Dish } from '../dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    restaurentAllDishes: Dish[];
    restaurentShowDishes: Dish[];
    showDishType: string;
  constructor(private homeService: HomeService) { 
    this.restaurentAllDishes = [];
    this.restaurentShowDishes = [];
    this.showDishType = 'pizza';
  }

  ngOnInit(): void {
      this.homeService.getDishes().subscribe(dishes => { 
          this.restaurentAllDishes = dishes;
          this.restaurentShowDishes = dishes.filter(x => x.dtype == this.showDishType)
      });
  }
  selectType(type:string) {
    switch(type) {
        case 'pizza':
            this.showDishType = 'pizza';
            break;
        case 'salad':
            this.showDishType = 'salad';
            break;
        case 'noodle':
            this.showDishType = 'noodle';
            break;
        default:
            this.showDishType = 'pizza';
            break;
    }

    this.restaurentShowDishes = this.restaurentAllDishes.filter(x => x.dtype == this.showDishType);    
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Dish } from '../dish';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  DISHES:Dish[] = [
      {dimage: '/assets/img/gallery/02.jpg', dname: "Lorem Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'pizza', dprice: '$45 / $55'},
      {dimage: '/assets/img/gallery/x2.png', dname: "Lorem Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'pizza', dprice: '$65 / $70'},
      {dimage: '/assets/img/gallery/x3.png', dname: "Lorem Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'pizza', dprice: '$30.50'},
      {dimage: '/assets/img/gallery/x4.png', dname: "Lorem Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'pizza', dprice: '$25.50'},
      {dimage: '/assets/img/gallery/x5.png', dname: "Lorem Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'pizza', dprice: '$80.25'},
      {dimage: '/assets/img/gallery/x1.png', dname: "Lorem Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'pizza', dprice: '$20 / $40 / $60'},
      {dimage: '/assets/img/gallery/07.jpg', dname: "Lorem Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'pizza', dprice: '$94'},
      {dimage: '/assets/img/gallery/08.jpg', dname: "Lorem Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'pizza', dprice: '$15'},
    
      
    {dimage: '/assets/img/gallery/04.jpg', dname: "Salad Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'salad', dprice: '$25'},
    {dimage: '/assets/img/gallery/03.jpg', dname: "Lorem Salad", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'salad', dprice: '$30'},
    {dimage: '/assets/img/gallery/05.jpg', dname: "Salad Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'salad', dprice: '$45'},
    {dimage: '/assets/img/gallery/01.jpg', dname: "Lorem Salad", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'salad', dprice: '$50'},
    {dimage: '/assets/img/gallery/08.jpg', dname: "Lorem Salad", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'salad', dprice: '$55 / $60'},
    {dimage: '/assets/img/gallery/07.jpg', dname: "Salad Ipsum", ddesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', dtype: 'salad', dprice: '$75'}
  ]

  DISHES_SALAD:Dish[] = [
    
    
]
  getDishes(): Observable<Dish[]> {
    const dish = of(this.DISHES);
    return dish;
  }
  

}

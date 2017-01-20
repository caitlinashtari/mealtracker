import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li [class]="calorieColor(currentMeal)" *ngFor="let currentMeal of meals">{{currentMeal.name}} - {{currentMeal.details}} - {{currentMeal.calories}} calories <button (click)="editMeal(currentMeal)">Edit</button></li>
  </ul>
  `
})

export class MealListComponent {
  meals: Meal[] = [
    new Meal("Fries", "I ate many fries", 600),
    new Meal("Pies", "I ate many pies", 365),
    new Meal("Ice Creams", "I ate many ice creams", 265)
  ];

  calorieColor(currentMeal){
    if(currentMeal.calories >= 500){
      return "bg-danger";
    } else if(currentMeal.calories >= 300){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

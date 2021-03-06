import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `

  <div class="dropDown">
    <select (change)="onChange($event.target.value)">
       <option value="allMeals">All Meals</option>
       <option value="lowCalorieMeals">Low Calorie Meals</option>
       <option value="highCalorieMeals" selected="selected">High Calorie Meals</option>
    </select>
  </div>
  <div>
    <ul>
      <li class="meals" *ngFor="let currentMeal of childMealList | calorieness:filterByCalories">{{currentMeal.name}} - {{currentMeal.details}} - {{currentMeal.calories}} calories <button class="btn btn-warning" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button></li>
    </ul>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "highCalorieMeals";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

  editButtonHasBeenClicked(mealToEdit: Meal){
    this.clickSender.emit(mealToEdit);
  }
}

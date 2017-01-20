import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
    <div *ngIf="selectedMeal">
      <h3>{{selectedMeal.name}}</h3>
      <h3>Edit Meal</h3>
      <label>Meal Name:</label>
      <input [(ngModel)]="selectedMeal.name">
      <label>Details:</label>
      <input [(ngModel)]="selectedMeal.details">
      <label>Calories:</label>
      <input [(ngModel)]="selectedMeal.calories">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterMealList: Meal[] = [
    new Meal("Fries", "I ate many fries", 600),
    new Meal("Pies", "I ate many pies", 365),
    new Meal("Ice Creams", "I ate many ice creams", 265)
  ];

  selectedMeal: null;

  editMeal(clickedMeal){
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
   this.selectedMeal = null;
 }
}

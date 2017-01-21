import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `

  <h1 class="jumbotron"><hr>Meal Tracker for {{month}}.{{day}}.{{year}}<hr></h1>

  <div class="container">
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
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

  selectedMeal = null;

  editMeal(clickedMeal){
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
   this.selectedMeal = null;
 }

 addMeal(newMealFromChild: Meal) {
   this.masterMealList.push(newMealFromChild);
 }
}

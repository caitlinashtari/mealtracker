import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorieness",
  pure: false
})


export class CalorienessPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var output: Meal[] = [];
      for (var i = 0; i < input.length; i++) {
        if(input[i].calories >= 600){
          output.push(input[i]);
        }
      }
      return output;
    }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes:Recipe[] = [
		new Recipe ('A Test Recipe', 'Testing a recipe', 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg'),

		new Recipe ('A Test Recipe', 'Testing a recipe', 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg')
	];

  constructor() { }

  ngOnInit(): void {
  }

}

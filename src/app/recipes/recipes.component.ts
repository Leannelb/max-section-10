import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe( // subscribe to it to recieve any changes
          (recipe: Recipe) => { // recieving data of type: Recipe, because of how we configured the event emitter, to give back a recipe.
            // this is an es6 arrow function
            this.selectedRecipe = recipe; 
          } 
      );
  }

}

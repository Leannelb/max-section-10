import { EventEmitter } from '@angular/core';
// put angualr inports at the very top, good practice.

import { Recipe } from './recipe.model';

export class RecipeService {
    // adding a public property, recipeSelected ~ object instanciated by using event emitter
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

    getRecipes() {
        return this.recipes.slice();
        // this stops the actual array being returned and instead returns a copy
    }
}


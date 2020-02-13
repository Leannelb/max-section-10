import { EventEmitter } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";


export class ShoppingService {

    // we create an event for when an ingredient is changed, emitting an array of ingredients
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
            new Ingredient('Apples', 5),
            new Ingredient('Tomatoes', 10),
    ];

    // returns a copy of the private array.
    getIngredients() {
        return this.ingredients.slice();
    }

    // before in the last commit, we didnt see the ingredient being added when
    // a new one was added, therefore we emit back the new array
    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

    // 
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    // returns a copy of the private array.
    getIngredients() {
        return this.ingredients.slice();
    }
    public addIngredient(ingredient: Ingredient) {
        return this.ingredients.push(ingredient);
    }
}
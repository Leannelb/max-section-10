import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe[];

  constructor(private recipeService: RecipeService) { }
  // Inject service for use
  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit();
    // hook into the service and call a method that will retrieve the selected item for you.
    // emits the selected recipe ~ the data we want to pass
  }

}

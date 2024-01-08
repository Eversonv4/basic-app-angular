import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() handleRecipe = new EventEmitter<Recipe>();

  chooseRecipe(recipe: Recipe) {
    this.handleRecipe.emit(recipe);
  }

  recipes: Recipe[] = [
    new Recipe("Torta de maracuja", "Faz a torta e o suquinho", "https://anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2168-d0f73b99b3c98f9a1ed7f77575f3728d.jpg"),
    new Recipe("Hamburguer de Siri", "Um hamburguer delicioso.", "https://uvn-brightspot.s3.amazonaws.com/assets/vixpt/b/bob-esponja-hamburguer-siri-08.17-1400x800.jpg")
  ];
}

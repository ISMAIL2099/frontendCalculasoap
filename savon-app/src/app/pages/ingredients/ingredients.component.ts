import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-calculateur',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})

export class IngredientsComponent {

  ingredients: Ingredient[] = []; // Liste des ingrédients de l’API
  isLoading: boolean = true; // Flag marquant la récupération des données
  errorMessage: string = ""; // Eventuel message d'erreur
  ingredient: Ingredient = new Ingredient()



  constructor(private ingredientService: IngredientService) { }
  
  ngOnInit(): void {
    this.fetchIngredients();
  }
  fetchIngredients(): void {
    this.ingredientService.getAllIngredients().subscribe({
      next: (data) => {
        this.ingredients = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du chargement des ingrédients.";
        console.error("Erreur API:", error);
        this.isLoading = false;
      },



    });
  }
  // Supprimer un élément spécifique
  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
  }

  // Modifier un élément (exemple simple)
  editItem(index: number) {
    const newName = prompt("Nouveau nom:", this.ingredients[index].nom);
    if (newName) {
      this.ingredients[index].nom = newName;
    }
  }
  editIngredient(){
    this.ingredientService.updateIngredient(this.ingredient.id! , this.ingredient).subscribe({
      next: (savedIngredient) => {
        console.log("Un ingredient a été modifié " + savedIngredient)
        alert("Ingrédient modifié avec succès.")
      },
      error: (e) => {
        console.log(e)
      }
    })

  }

  // Supprimer tous les éléments
  deleteAll() {
    this.ingredients = [];
  }
}

/*export class IngredientCreateComponent {
  isLoading: boolean = true; // Flag marquant la récupération des données
  errorMessage: string = ""; // Eventuel message d'erreur
  ingredient: Ingredient = new Ingredient()
  constructor(private ingredientService: IngredientService) { }

  onSubmit() {
    this.ingredientService.postIngredient(this.ingredient).subscribe({
      next: (savedIngredient) => {
        console.log("Un ingredient a été ajouter " + savedIngredient)
        alert("Ingrédient crée avec succès.")
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
}*/



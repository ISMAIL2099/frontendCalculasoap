import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { IngredientCreateComponent } from './pages/ingredient-create/ingredient-create.component';
import { RecipeCalculatorComponent } from './pages/recipe-calculator/recipe-calculator.component';
import { RecettesCalculatorPageComponent } from './pages/mes-recettes/mes-recettes.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'ingredient-create', component: IngredientCreateComponent },
  { path: 'calcul', component: RecipeCalculatorComponent },
  { path: 'mes-recettes', component: RecettesCalculatorPageComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

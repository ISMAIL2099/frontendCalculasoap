import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import {  HttpClientModule } from '@angular/common/http';
import { IngredientCreateComponent } from './pages/ingredient-create/ingredient-create.component';
import { FormsModule } from '@angular/forms';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { ModalIngredientPickerComponent } from './shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecettesCalculatorPageComponent } from './pages/mes-recettes/mes-recettes.component';
import { RecipeCalculatorComponent } from './pages/recipe-calculator/recipe-calculator.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    UtilisateurComponent,
    IngredientsComponent,
    IngredientCreateComponent,
    RadarChartComponent,
    ModalIngredientPickerComponent,
    RecettesCalculatorPageComponent,
    RecipeCalculatorComponent,

    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

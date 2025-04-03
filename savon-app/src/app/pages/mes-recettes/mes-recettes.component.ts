import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { Recette } from '../../models/Recette';


@Component({
  selector: 'app-mes-recettes',
  templateUrl: './mes-recettes.component.html',
  styleUrl: './mes-recettes.component.css'
})
export class RecettesCalculatorPageComponent implements OnInit {
  recettes: Recette[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  INSmoyen: number = 0;


  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.fetchRecettes();
  }

  /**
   * Récupère la liste des recettes depuis l'API.
   */
  fetchRecettes(): void {
    this.recetteService.getAllRecettes().subscribe({
      next: (data) => {
        this.recettes = data;
        this.isLoading = false;
        this.moyenneINS();

      },
      error: (error) => {
        this.errorMessage = "Erreur lors du chargement des recettes.";
        console.error('Erreur API:', error);
        this.isLoading = false;
      }
    });

  }

  // Calcul de la moyenne de l'INS
  moyenneINS(): void {
    if (this.recettes.length === 0) {
      this.INSmoyen = 0;
      return;
    }

    let sommeINS = 0;
    this.recettes.forEach(recette => {
      // Supposons que l'indice INS est le premier résultat
      // Si ce n'est pas le cas, ajustez l'index en conséquence
      sommeINS += recette.resultats[1].score;
    });

    this.INSmoyen = sommeINS / this.recettes.length;
  }

  deleteAll() {
    this.recetteService.deleteAllRecettes().subscribe({
      next: () => {
        this.recettes = [];
      },
      error: (error) => {
        this.errorMessage = "Erreur lors de la suppression des recettes.";
        console.error('Erreur API:', error);
        this.isLoading = false;
      }

    })
  }


}





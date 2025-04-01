import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../../app/models/Ingredient';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'http://localhost:8080/api-savon/v1';

  constructor(private http: HttpClient) { }

  /**
  * Récupère tous les ingrédients depuis l'API.
  * @returns Un Observable contenant la liste des ingrédients.
  */
  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.apiUrl}/ingredient`);
  }
  postIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.apiUrl}/ingredient`, ingredient)
  }
  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.apiUrl}/ingredient`, ingredient);
  }
  updateIngredient(id: number, ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.apiUrl}/ingredient/${id}`, ingredient);
  }
  deleteIngredient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ingredient/${id}`);
  }

  /**
   * Supprime tous les ingrédients via l'API.
   * @returns Un Observable vide.
   */
  deleteAllIngredients(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ingredient/all`);
  }

  /**
   * Importe des ingrédients à partir d'un fichier CSV via l'API.
   * @param file - Le fichier CSV à importer.
   * @returns Un Observable contenant la liste des ingrédients importés.
   */
  importFromCSV(file: File): Observable<Ingredient[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Ingredient[]>(`${this.apiUrl}/ingredient/import`, formData);
  }

  /**
   * Exporte tous les ingrédients vers un fichier CSV via l'API.
   * @returns Un Observable contenant le fichier CSV.
   */
  exportToCSV(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/ingredient/export`, { responseType: 'blob' });
  }


}
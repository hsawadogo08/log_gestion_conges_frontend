import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Demande} from "../../../models/demande.model";
import {API_URL} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(
    private http: HttpClient,
  ) { }

  getDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${API_URL}/api/demandes`);
  }
}

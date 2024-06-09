import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Agent} from "../../../models/agent.model";
import {API_URL} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private http: HttpClient,
  ) { }

  getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${API_URL}/api/agents`)
  }
}

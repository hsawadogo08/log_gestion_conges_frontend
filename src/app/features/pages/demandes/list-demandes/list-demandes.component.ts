import {Component, OnInit} from '@angular/core';
import {Demande} from "../../../../models/demande.model";
import {DemandeService} from "../demande.service";

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrl: './list-demandes.component.scss'
})
export class ListDemandesComponent implements OnInit{
  demandes: Demande[] = [];

  constructor(
    private demandeService: DemandeService,
  ) {
  }

  ngOnInit() {
    this.getDemandes();
  }

  getDemandes(): void {
    this.demandeService.getDemandes().subscribe({
      next: response => {
        this.demandes = response;
      },
      error: err => {
        console.error(err);
      }
    });
  }
}

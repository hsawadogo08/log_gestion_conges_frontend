import {Component, OnInit} from '@angular/core';
import {Demande} from "../../../../models/demande.model";
import {DemandeService} from "../demande.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateUpdateDemandeComponent} from "../create-update-demande/create-update-demande.component";

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrl: './list-demandes.component.scss'
})
export class ListDemandesComponent implements OnInit{
  demandes: Demande[] = [];

  constructor(
    private demandeService: DemandeService,
    private modal: NgbModal,
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

  async openCreateUpdateDemandeModal(demande?: Demande) {
    const currentModal = await this.modal.open(CreateUpdateDemandeComponent, { backdrop: 'static', size: 'lg'});
    currentModal.componentInstance.demande = demande;
    currentModal.result.then(
      response => {
        if (response === true) {
          this.getDemandes();
        }
      }
    );
  }

  deleteDemande(demandeId: number): void {
    this.demandeService.delete(demandeId).subscribe({
      next: () => {
        this.getDemandes();
      },
      error: err => console.error(err)
    });
  }
}

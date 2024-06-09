import {Component, OnInit} from '@angular/core';
import {Demande} from "../../../../models/demande.model";
import {AgentService} from "../../agents/agent.service";
import {DemandeService} from "../demande.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Agent} from "../../../../models/agent.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-update-demande',
  templateUrl: './create-update-demande.component.html',
  styleUrl: './create-update-demande.component.scss'
})
export class CreateUpdateDemandeComponent implements OnInit{
  demande!: Demande;
  agents: Agent[] = [];
  formDemande!: FormGroup;

  constructor(
    private agentService: AgentService,
    private demandeService: DemandeService,
    private fb: FormBuilder,
    private activeModal: NgbActiveModal,
  ) {
  }

  ngOnInit() {
    this.demande = this.demande !== undefined ? this.demande : new Demande();
    this.createFormGroup();
    this.getAgents();
  }

  getAgents(): void {
    this.agentService.getAgents().subscribe({
      next: response => {
        this.agents = response;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  createFormGroup(): void {
    this.formDemande = this.fb.group({
      agentId: [this.demande.agent?.id, Validators.required],
      motif: [this.demande.motif, Validators.required],
      dateDebut: [this.demande.dateDebut, Validators.required],
      dateFin: [this.demande.dateFin, Validators.required],
    });
  }

  onGetDemandeInfos() {
    const agentId = this.formDemande.value.agentId as number;
    this.demande.agent = this.agents.find(a => a.id === agentId);
    this.demande.motif = this.formDemande.value.motif;
    this.demande.dateDebut = this.formDemande.value.dateDebut;
    this.demande.dateFin = this.formDemande.value.dateFin;
    if (this.demande.id) {
      this.update();
    } else {
      this.create();
    }
  }

  create(): void {
    this.demandeService.create(this.demande).subscribe({
      next: response => {
        console.log(response);
        this.onCloseModal(true)
      },
      error: err => {
        console.error(err);
      }
    });
  }

  update(): void {
    this.demandeService.update(this.demande).subscribe({
      next: response => {
        console.log(response);
        this.onCloseModal(true)
      },
      error: err => {
        console.error(err);
      }
    });
  }

  onCloseModal(value: boolean) {
    this.activeModal.close(value);
  }
}

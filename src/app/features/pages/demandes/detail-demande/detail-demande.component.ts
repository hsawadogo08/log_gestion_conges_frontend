import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../demande.service";
import {Demande} from "../../../../models/demande.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrl: './detail-demande.component.scss'
})
export class DetailDemandeComponent implements OnInit {
  demande: Demande = new Demande();

  constructor(
    private demandeService: DemandeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['demandeId']);
    // console.log(this.activatedRoute.snapshot.paramMap.get('demandeId'));
    this.demande.id = this.activatedRoute.snapshot.params['demandeId'] as number;
    this.findOne();
  }

  findOne(): void {
    this.demandeService.findOne(this.demande.id!).subscribe({
      next: response => {
        this.demande = response as Demande;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  onGoBack() {
    this.router.navigate(['/pages/demandes']);
  }
}

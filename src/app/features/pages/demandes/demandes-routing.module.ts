import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDemandesComponent} from "./list-demandes/list-demandes.component";
import {DetailDemandeComponent} from "./detail-demande/detail-demande.component";

const routes: Routes = [
  {
    path: '',
    component: ListDemandesComponent,
  },
  {
    path: 'detail/:demandeId',
    component: DetailDemandeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }

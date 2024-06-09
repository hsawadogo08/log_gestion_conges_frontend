import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDemandesComponent} from "./list-demandes/list-demandes.component";

const routes: Routes = [
  {
    path: '',
    component: ListDemandesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }

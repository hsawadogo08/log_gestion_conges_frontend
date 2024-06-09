import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListAgentsComponent} from "./list-agents/list-agents.component";

const routes: Routes = [
  {
    path: '',
    component: ListAgentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }

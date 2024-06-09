import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentLayoutComponent} from "./content-layout/content-layout.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'agents',
        loadChildren: () => import('../pages/agents/agents.module').then(m => m.AgentsModule),
      },
      {
        path: 'demandes',
        loadChildren: () => import('../pages/demandes/demandes.module').then(m => m.DemandesModule),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

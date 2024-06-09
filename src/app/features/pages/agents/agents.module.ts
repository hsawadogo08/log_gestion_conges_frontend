import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { ListAgentsComponent } from './list-agents/list-agents.component';


@NgModule({
  declarations: [
    ListAgentsComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }

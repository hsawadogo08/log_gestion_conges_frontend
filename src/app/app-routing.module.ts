import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentLayoutComponent} from "./features/layout/content-layout/content-layout.component";
import {LayoutRoutingModule} from "./features/layout/layout-routing.module";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('./features/layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

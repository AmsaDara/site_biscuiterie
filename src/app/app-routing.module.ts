import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {MunicipaliteComponent} from './layout/municipalite/municipalite.component';
import {ActivitesComponent} from './layout/activites/activites.component';
import {DemarcheComponent} from './layout/demarche/demarche.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'municipalite',
    component:MunicipaliteComponent
  },
  // {
  //   path:'unallarticles',
  //   component:ArticlesPageComponent
  // },
  {
    path:'activites',
    component:ActivitesComponent
  },
  {
    path:'demarche',
    component:DemarcheComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

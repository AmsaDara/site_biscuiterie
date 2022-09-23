import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {MunicipaliteComponent} from './layout/municipalite/municipalite.component';
import {ActivitesComponent} from './layout/activites/activites.component';
import {DemarcheComponent} from './layout/demarche/demarche.component';
import {HistoricComponent} from './layout/historic/historic.component'
import { SeemoreComponent } from './layout/municipalite/seemore/seemore.component';
import { EducationComponent } from './layout/activites/education/education.component';
import { SportsComponent } from './layout/activites/sports/sports.component';
import { CultureComponent } from './layout/activites/culture/culture.component';
import { SanteComponent } from './layout/activites/sante/sante.component';
import { SocialComponent } from './layout/activites/social/social.component';
import { EnvironnementComponent } from './layout/activites/environnement/environnement.component';
import { ReabitationComponent } from './layout/activites/grandprojet/reabitation/reabitation.component';
import { SansableComponent } from './layout/activites/grandprojet/sansable/sansable.component';
import { TerrainComponent } from './layout/activites/grandprojet/terrain/terrain.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'municipalite',
    component:MunicipaliteComponent,
      // children: [
      //   {
      //     path:'biographie',
      //     component:SeemoreComponent
      //   },
      // ]
  },
  {
        path:'biographie',
        component:SeemoreComponent
  },
 
  {
    path:'activites',
    component:ActivitesComponent
  },
  {
    path:'education',
    component:EducationComponent
  },
  {
    path:'sports',
    component:SportsComponent
  },
  {
    path:'culture',
    component:CultureComponent
  },
  {
    path:'santessecurite',
    component:SanteComponent
  },
  {
    path:'social',
    component:SocialComponent
  },
  {
    path:'environnement',
    component:EnvironnementComponent
  },
  {
    path:'reabilitationAvenue',
    component:ReabitationComponent
  },
  {
    path:'biscuiteriesansable',
    component:SansableComponent
  },
  {
    path:'terrainngb',
    component:TerrainComponent
  },
  {
    path:'demarche',
    component:DemarcheComponent
  },
  {
    path:'historiques',
    component:HistoricComponent
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

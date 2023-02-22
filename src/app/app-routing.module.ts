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
import { ActualitesComponent } from './layout/actualites/actualites.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthenticateComponent } from './user/authenticate/authenticate.component';
import { AuthGuard } from './gards/auth.guard';
import { ArticleResolver } from './layout/article.resolver';
import { ByarticleComponent } from './layout/actualites/byarticle/byarticle.component';
import { SecremunicipalComponent } from './layout/municipalite/secremunicipal/secremunicipal.component';
import { CabinetmaireComponent } from './layout/municipalite/cabinetmaire/cabinetmaire.component';
import { ListeconseilComponent } from './layout/municipalite/listeconseil/listeconseil.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'actualites',
    component:ActualitesComponent,
    canActivate:[AuthGuard]
},
{
  path: 'actualites/:id',
  component: ByarticleComponent,    
  canActivate:[AuthGuard],
  resolve: {
    actualites: ArticleResolver
  }
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
    path:'secretairemunicipal',
    component:SecremunicipalComponent
  },
  {
    path:'cabinetdumaire',
    component:CabinetmaireComponent
  },
  {
    path:'conseilmunicipal',
    component:ListeconseilComponent
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
    path:'register',
    component:RegisterComponent
  },
  {
    path:'signin',
    component:AuthenticateComponent
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavComponent } from './layout/nav/nav.component';
import { HomeComponent } from './layout/home/home.component';
import { MunicipaliteComponent } from './layout/municipalite/municipalite.component';
import { ActivitesComponent } from './layout/activites/activites.component';
import { DemarcheComponent } from './layout/demarche/demarche.component';
import { HistoricComponent } from './layout/historic/historic.component';
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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MunicipaliteComponent,
    ActivitesComponent,
    DemarcheComponent,
    HistoricComponent,
    SeemoreComponent,
    EducationComponent,
    SportsComponent,
    CultureComponent,
    SanteComponent,
    SocialComponent,
    EnvironnementComponent,
    ReabitationComponent,
    SansableComponent,
    TerrainComponent,
    ActualitesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MdbRippleModule,
    MdbFormsModule,
    MdbCarouselModule,
    MatGridListModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

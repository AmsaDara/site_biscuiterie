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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MunicipaliteComponent,
    ActivitesComponent,
    DemarcheComponent
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
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

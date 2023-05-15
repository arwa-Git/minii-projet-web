import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilComponent } from './accueil/accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscriptionAgComponent } from './inscription-ag/inscription-ag.component';
import { InscriptionclComponent } from './inscriptioncl/inscriptioncl.component';
import { AnnoncePourClComponent } from './annonce-pour-cl/annonce-pour-cl.component';
import { AjAnnonceComponent } from './aj-annonce/aj-annonce.component';
import { AnnoncePourAgComponent } from './annonce-pour-ag/annonce-pour-ag.component';
import { AgenceComponent } from './agence/agence.component';
import { AgencePouragComponent } from './agence-pourag/agence-pourag.component';
import { ModifierannonceComponent } from './modifierannonce/modifierannonce.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnecterComponent,
    AccueilComponent,
    FooterComponent,
    InscriptionAgComponent,
    InscriptionclComponent,
    AnnoncePourClComponent,
    AjAnnonceComponent,
    AnnoncePourAgComponent,
    AgenceComponent,
    AgencePouragComponent,
    ModifierannonceComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

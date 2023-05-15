import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { InscriptionAgComponent } from './inscription-ag/inscription-ag.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionclComponent } from './inscriptioncl/inscriptioncl.component';
import { AnnoncePourClComponent } from './annonce-pour-cl/annonce-pour-cl.component';
import { AjAnnonceComponent } from './aj-annonce/aj-annonce.component';
import { AnnoncePourAgComponent } from './annonce-pour-ag/annonce-pour-ag.component';
import { AgenceComponent } from './agence/agence.component';
import { AgencePouragComponent } from './agence-pourag/agence-pourag.component';
import { ModifierannonceComponent } from './modifierannonce/modifierannonce.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'connecter',component:ConnecterComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'inscription-ag',component:InscriptionAgComponent},
  {path:'',component:AccueilComponent},
  {path:'inscriptioncl',component:InscriptionclComponent},
  {path:'annoncecl',component:AnnoncePourClComponent},
  {path:'annonce-pour-ag',component:AnnoncePourAgComponent},
  {path:'aj-annonce',component:AjAnnonceComponent},
  {path:'agence',component:AgenceComponent},
  {path:'compteag',component:AgencePouragComponent},
  {path:'modifieran',component:ModifierannonceComponent},
  {path:'admin',component:AdminComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

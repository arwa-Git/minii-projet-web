import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private j :Router)
{}
gotoinscl()
{
  this.j.navigate(["/inscriptioncl"])
}
gotoinsag()
{
  this.j.navigate(["/inscription-ag"])
}
gotoacc()
{
  this.j.navigate(["/"])
}
}

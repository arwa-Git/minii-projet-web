import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-annonce-pour-ag',
  templateUrl: './annonce-pour-ag.component.html',
  styleUrls: ['./annonce-pour-ag.component.css']
})
export class AnnoncePourAgComponent {
  constructor(private j :Router){}

gotoagence(){
  this.j.navigate(["/compteag"]);
  
}

}

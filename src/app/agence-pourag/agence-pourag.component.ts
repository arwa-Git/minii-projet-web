import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agence-pourag',
  templateUrl: './agence-pourag.component.html',
  styleUrls: ['./agence-pourag.component.css']
})
export class AgencePouragComponent {
constructor(private j:Router){

}
gotoajannonce(){
  this.j.navigate(["/aj-annonce"])
}
gotoannonceag(){
  this.j.navigate(["/annonce-pour-ag"])
}
}

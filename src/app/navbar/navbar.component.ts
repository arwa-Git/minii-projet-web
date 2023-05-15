import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public j :Router){ 
 var  nom=this.getToken('compte');
   console.log(nom)

}
  getToken(value :string)
  {

   return( localStorage.getItem(value))
  }
 gotoconnect()
 {this.j.navigate(["/connecter"]);
}
gotoinscription(){
  this.j.navigate(["/inscription"]);
}
deconnecter()
{localStorage.clear
  localStorage.setItem('connect','0');
  this.gotoconnect()
}
gotoprofile()
{
 if (this.getToken('type')=='a'){
  this.j.navigate(["/compteag"])
 }
}
 nom=this.getToken('compte');

}




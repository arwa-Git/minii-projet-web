import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent {
constructor(private j:Router){}
gotoannonce(){
  this.j.navigate(["/annoncecl"])
}
}

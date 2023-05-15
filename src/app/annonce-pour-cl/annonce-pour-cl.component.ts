import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-annonce-pour-cl',
  templateUrl: './annonce-pour-cl.component.html',
  styleUrls: ['./annonce-pour-cl.component.css']
})
export class AnnoncePourClComponent {
constructor( private j :Router){

}
gotoacc()
{this.j.navigate(["/"])}
clkreserver()
{Swal.fire({
  title: 'vous êtes sûr?',
  icon: 'question',
  iconHtml: '?',
  confirmButtonText: 'oui',
  cancelButtonText: 'non',
  showCancelButton: true,
  showCloseButton: true
})}
}

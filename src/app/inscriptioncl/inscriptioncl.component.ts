import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators, NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ApiService} from '../api.service'


@Component({
  selector: 'app-inscriptioncl',
  templateUrl: './inscriptioncl.component.html',
  styleUrls: ['./inscriptioncl.component.css']
})
export class InscriptionclComponent implements OnInit {
  angForm:FormGroup;
  progress:number=0;
  constructor(private fb:FormBuilder,
     private dataService:ApiService ,
     private router:Router,
  )
  {
    this.angForm=this.fb.group({
      NomCl: ['',Validators.required],
      PrenomCl: ['',Validators.required],
      add_mail: ['',[Validators.required,Validators.minLength(1),Validators.email]],
      DateDeNaiss: ['',Validators.required],
      NumTelCl: ['',Validators.required],
      MotDePasse: ['',Validators.required],
      PhotoProfile:[null]
    })
  }
    ngOnInit(): void{}

  
postdata(angForm:any)
{this.dataService.clientregistration(
  angForm.value.NomCl,
  angForm.value.PrenomCl,
  angForm.value.add_mail,
  angForm.value.DateDeNaiss,
  angForm.value.NumTelCl,
  angForm.value.MotDePasse,
)
.pipe(first())
.subscribe(
  data => {
    console.log(data);
    if(data.message=='success'){
    this.router.navigate(['/']);
    }
    else{
      if(data.message=='exist'){
        alert("address mail exist!");
        } 
    }
  },
  error => {
    // Afficher une alerte contenant un message d'erreur
    alert("Erreur lors de l'inscription!");
  }
);
 
}
gotoinscription()
{this.router.navigate(["/inscription"])}

}

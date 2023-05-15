import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-aj-annonce',
  templateUrl: './aj-annonce.component.html',
  styleUrls: ['./aj-annonce.component.css']
})
export class AjAnnonceComponent {
  angForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,

  ){
    this.angForm = this.fb.group({
      dest: ['', Validators.required],
     prix: ['', Validators.required],
     link: ['', Validators.required],
     datedebut: ['', Validators.required],
     datefin: ['', Validators.required],
     desc: ['', Validators.required],
     photo: ['', Validators.required]
    });
  }
  postdata(angForm: any) {
    this.dataService
      .aj_annonce(
        angForm.value.dest,
        angForm.value.prix,
        angForm.value.link,
        angForm.value.datedebut,
        angForm.value.datefin,
        angForm.value.desc,
        angForm.value.photo,
       
      )
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          if (data.message == 'success') {
            this.router.navigate(['/compteag']);
            alert("demende envoyer!");
          } else {
            if (data.message == 'exist') {
              alert('annonce existe deja!');
            }
            else{if(data.message=='missed'){
              alert('les champs sont tt obligatoir!');
            }}
          }
        },
        (error) => {
          alert("Erreur lors de l'inscription!");
        }
      );
  }
}

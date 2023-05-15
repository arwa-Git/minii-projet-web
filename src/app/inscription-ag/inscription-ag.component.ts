import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-inscription-ag',
  templateUrl: './inscription-ag.component.html',
  styleUrls: ['./inscription-ag.component.css'],
})
export class InscriptionAgComponent {
  angForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,

  ) {
    this.angForm = this.fb.group({
      nomag: ['', Validators.required],
      mat_fisc: ['', Validators.required],
      add_mail: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      num_tel1: ['', Validators.required],
      num_tel2: ['', Validators.required],
      address: ['', Validators.required],
      CodePostal: ['', Validators.required],
      MotDePasse: ['', Validators.required],
 

    });
  }

 
  postdata(angForm: any) {
    this.dataService
      .agenceregistration(
        angForm.value.nomag,
        angForm.value.mat_fisc,
        angForm.value.add_mail,
        angForm.value.num_tel1,
        angForm.value.num_tel2,
        angForm.value.address,
        angForm.value.CodePostal,
        angForm.value.MotDePasse,
      )
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          if (data.message == 'success') {
            this.router.navigate(['/compteag']);
          } else {
            if (data.message == 'exist') {
              alert('address mail exist!');
            }else{
              alert('tt les champs sont obligatoir!');
            }
          }
        },
        (error) => {
          alert("Erreur lors de l'inscription!");
        }
      );
  }
  gotoinscription()
  {this.router.navigate(["/inscription"])}
}
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  angForm: FormGroup;
  annonce:any;
  annonceR:any;
  agence:any;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private j:Router,
    private http:HttpClient
  

  ){ this.http.get('http://localhost/youdesty/annonce.php').subscribe(data=>this.annonce=data)
console.log(this.getToken('add_mail'))

  this.http.get('http://localhost/youdesty/fetchagenceac.php').subscribe(dataa=>this.agence=dataa)
    this.angForm = this.fb.group({
      rechdest: ['', Validators.required],
      rechpa: ['', Validators.required],
      rechda: ['', Validators.required]
    
    });
  }

  postdata(angForm: any) {
    this.dataService
      .rechannonce(
        angForm.value.rechdest,
        angForm.value.rechpr,
        angForm.value.rechda
      )
      .pipe(first())
      .subscribe(
        (dataR) => {
    

          if (dataR.message == 'success') {

            this.annonceR=dataR;
           
    
        
          } 
        },
        (error) => {
          console.log(error);
          alert("Erreur!");
        }
      );
  }
  gotoannonce(){
    this.j.navigate(["/annoncecl"])
  }
  gotoagence(){
    this.j.navigate(["/agence"])
  }
  getToken(value :string)
  {

   return( localStorage.getItem(value))
  }
}



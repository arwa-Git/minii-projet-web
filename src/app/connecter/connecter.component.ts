import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators, NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent {
angForm:FormGroup
constructor(
  private fb:FormBuilder,
     private dataService:ApiService ,
     private router:Router
){
  this.angForm=this.fb.group({
    add_mail: ['',[Validators.required,Validators.minLength(1),Validators.email]],
    MotDePasse: ['',Validators.required]
});
}
postdata(angForm:any)
{this.dataService.connection(
  angForm.value.add_mail,
  angForm.value.MotDePasse
)
.pipe(first())
.subscribe(
  data => {
    console.log(data);
    if(data.message=='success'){
        if(data.type=='c'){
          this.router.navigate(['/']);
        }
        else{if(data.type=='a')
          {this.router.navigate(['/compteag']);}
          else{this.router.navigate(['/admin']);}
        }
    }
    else{
      alert("address mail ou mot de passe incorrect");
    }
      localStorage.clear;
    this.setToken(data.type);
    localStorage.setItem('connect', '1');
    if(data.type=='a')
    {localStorage.setItem('compte',data.compte.nomag)}
    if(data.type=='c')
    {localStorage.setItem('compte',data.compte.NomCl)}
    if(data.type=='d')
    {localStorage.setItem('compte','admin')}
  },
  error =>{
    
  }
);


}
setToken(token: string) {
  localStorage.setItem('type', token);
}

}

import { Component, ɵɵqueryRefresh } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';
import {first} from 'rxjs/operators';
import { annonce } from '../annonce';
import { map } from "rxjs/operators";
import { ResourceLoader } from '@angular/compiler';
import { RouteConfigLoadStart, Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  baseUrl:string="http://localhost/youdesty/";
  annonce:any;
  agence:any;
  constructor(
    private dataService:ApiService , private http:HttpClient,private j:Router){
    this.http.get('http://localhost/youdesty/annonceadmin.php').subscribe(data=>this.annonce=data),
    this.http.get('http://localhost/youdesty/fetchagence.php').subscribe(dataa=>this.agence=dataa)
  }
  confirmer(id_annonce:any,dest:any,prix:any,link:any,datedebut:any,datefin:any,descr:any){
this.http.post<any>('http://localhost/youdesty/confirmerannonce.php',
                {
                   id_annonce,dest,prix,link,datedebut,datefin,descr    
                }).pipe(map(annonce =>{
                  return annonce;
                })
                ).subscribe(
                  data => {
                    console.log(data);
                  }
                  
                );
                this.j.navigate(["/admin"])
  }
  confirmerag(id_agence:any,nomag:any,mat_fisc:any,add_mail:any,num_tel1:any,num_tel2:any,MotDePasse:any,address:any,CodePostal:any,PhotoProfile:any){
    this.http.post<any>('http://localhost/youdesty/confirmeragence.php',
                    {
                      id_agence,nomag,mat_fisc,add_mail,num_tel1,num_tel2,MotDePasse,address,CodePostal,PhotoProfile                    }).pipe(map(annonce =>{
                      return this.agence;
                    })
                    ).subscribe(
                      data => {
                        console.log(data);
                     

                      }
                      
                    );
                  
      }  
  
}

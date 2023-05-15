import { Injectable,Output,EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { recherche } from "./recherche";
@Injectable({
    providedIn: 'root'
})
export class ApiService{
baseUrl:string="http://localhost/youdesty/";
constructor (private httpClient : HttpClient) { }
public clientregistration (NomCl:any,PrenomCl :any,
    add_mail :any,
    DateDeNaiss :any,
    NumTelCl :any,
     MotDePasse :any)
     {
        return this.httpClient.post<any>(this.baseUrl + 'registre_client.php',
        {
            NomCl,PrenomCl,add_mail, DateDeNaiss, NumTelCl, MotDePasse
        })
        .pipe(map(client =>{
            return client;
        }
            ));
     }
















     
     public rechannonce (
        rechdest :any,
        rechpr:any,
        rechda :any,
       
      )
         {
            return this.httpClient.post<any>(this.baseUrl + 'rech_annonce.php',
            {
               rechdest,rechpr,rechda
            })
            .pipe(map(recherche =>{
                return recherche;
            }
                ));
         }
        


     public agenceregistration (nomag:any,mat_fisc :any,
        add_mail :any,
        num_tel1:any,
        num_tel2 :any,
        address:String,
        CodePostal:String,
         MotDePasse :any,

      )
         {
            return this.httpClient.post<any>(this.baseUrl + 'registre_agence.php',
            {
                nomag,mat_fisc,add_mail, num_tel1, num_tel2,address,CodePostal, MotDePasse
            })
            .pipe(map(agences =>{
                return agences;
            }
                ));
         }


    public connection(add_mail: string, MotDePasse: string) {
        return this.httpClient.post<any>(this.baseUrl + '/connection.php', { add_mail, MotDePasse })
            .pipe(map(profile => {
                console.log(profile.add_mail);
               this.setToken(profile.add_mail);
             return profile;
            }));
    }

    setToken(token: string) {
        localStorage.setItem('add mail', token);
    }
    public aj_annonce (dest:any,prix :any,
        link :any,
       datedebut:any,
        datefin :any,
       desc:String,
       photo:any

      )
         {
            return this.httpClient.post<any>(this.baseUrl + 'aj_annonce.php',
            {
               dest,prix,link,datedebut,datefin,desc,photo
            })
            .pipe(map(annonce =>{
                return annonce;
            }
                ));
         }

}

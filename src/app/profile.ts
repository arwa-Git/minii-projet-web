export class  profile{
    public  id_profile: number;
    public add_mail :String;
    public MotDePasse :String;

     
     constructor( id_profile: number,
           add_mail :String,
            MotDePasse :String){
             this.id_profile=id_profile;
             this.add_mail=add_mail;
             this.MotDePasse=MotDePasse;

 
     }
 
 }
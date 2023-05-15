export class  client{
   public  id_Client: number;
   public NomCl :String;
   public PrenomCl :String;
   public add_mail :String;
   public DateDeNaiss :String;
   public NumTelCl :String;
   public MotDePasse :String;
    
    constructor( id_Client: number,
         NomCl :String,
         PrenomCl :String,
          add_mail :String,
          DateDeNaiss :String,
          NumTelCl :String,
           MotDePasse :String){
            this.id_Client=id_Client;
            this.NomCl=NomCl;
            this.PrenomCl=PrenomCl;
            this.add_mail=add_mail;
            this.DateDeNaiss=DateDeNaiss;
            this.NumTelCl=NumTelCl;
            this.MotDePasse=MotDePasse;

    }

}
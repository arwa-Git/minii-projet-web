export class  annonce{
    public  id_annonce: number;
    public dest:String;
    public prix :String;
    public link :String;
    public datedebut :String;
    public datefin:String;
    public desc :String;
    public photo:any;
     
     constructor(  id_annonce: number,
         dest:String,
         prix :String,
         link :String,
         datedebut :String,
         datefin:String,
         desc :String,
         photo:any){
             this.id_annonce=id_annonce;
             this.dest=dest;
             this.prix=prix;
             this.link=link;
             this.datedebut=datedebut;
             this.datefin=datefin
             this.desc=desc;
             this.photo=photo

 
     }
 
 }
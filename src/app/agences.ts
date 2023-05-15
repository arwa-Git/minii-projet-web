export class agences{
    public id_agence:number;
    public nomag:String;
    public mat_fisc:String;
    public add_mail:String;
    public num_tel1:String;
    public num_tel2:String;
    public MotDePasse:String;
    public address:String;
    public CodePostal:String;
    public PhotoProfile:any;

    constructor(id_agence:number,
        nomag :String,
        mat_fisc:String,
        add_mail :String,
        num_tel1:String,
        num_tel2:String,
        MotDePasse:String, 
        address:String,
        CodePostal:String,
        PhotoProfile:any)
        {
            this.id_agence=id_agence;
            this.nomag=nomag;
            this.mat_fisc=mat_fisc;
            this.add_mail=add_mail;
            this.num_tel1=num_tel1;
            this.num_tel2=num_tel2;
            this.MotDePasse=MotDePasse;
            this.address=address;
            this.CodePostal=CodePostal;
            this.PhotoProfile=PhotoProfile;

        }
}
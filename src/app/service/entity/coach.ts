export class coach{
id :number;
nom:string;
prenom:string;
genre:string;
date_naiss:string;
cin:number;
type :string;
adresse_mail:string;
login:string;
password:string;
tel:number;
gouvernorat:string;
ville:string;
certificat:string;
constructor(){}

public get logincoach() : string {
    return this.login;
}

public set setlogincoach(v : string) {
    this.login = v;
}

public get passwordcoach() : string {
    return this.password;
}
 
 public set setpasswordcoach(v : string) {
     this.password = v;
 }
 

}

export interface Profile
{
    key?:string;
    userID : string;  
    customerID : number;
    numberCustomer: number;
    firstName: String;
    lastName : string;
    dateBirth : Date;
    gender : String;
    height : Float32Array;
    hairColor : String;
    eyeColor : String;
    build:string;
    ethnicity : string;
    nationality : string;
    language : string ;
}
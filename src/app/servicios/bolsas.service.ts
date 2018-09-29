import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Bolsa } from "../interfaces/bolsa.interface";

import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BolsasService {

    private bolsas:Bolsa[] = [
        // {
        //     nombre:"balsaO",
        //     descripcion:"bolsa naranja",
        //     img:"../../../assets/balsaO.jpeg"
        // },
        // {
        //     nombre:"bolsaazul",
        //     descripcion:"bolsa azul",
        //     img:"../../../assets/bolsaazul.jpeg"
        // },
        // {
        //     nombre:"bolsaBur",
        //     descripcion:"bolsa de cuadros",
        //     img:"../../../assets/bolsaBur.jpeg"
        // },
        // {
        //     nombre:"bolsaC",
        //     descripcion:"bolsa cafe",
        //     img:"../../../assets/bolsaC.jpeg"
        // },
        // {
        //     nombre:"bolsaMano",
        //     descripcion:"bolsa mano cafe",
        //     img:"../../../assets/bolsaMano.jpeg"
        // },
        // {
        //     nombre:"bolsaroja",
        //     descripcion:"bolsa roja",
        //     img:"../../../assets/bolsaroja.jpeg"
        // },
        // {
        //     nombre:"cuelgaroja",
        //     descripcion:"bolsa blanca",
        //     img:"../../../assets/cuelgaroja.jpeg"
        // },
        // {
        //     nombre:"MochilaB",
        //     descripcion:"Mochila cafe",
        //     img:"../../../assets/MochilaB.jpeg"
        // },
        // {
        //     nombre:"mochilaOr",
        //     descripcion:"mochila naranja",
        //     img:"../../../assets/mochilaOr.jpeg"
        // }
    ]

    heroesURL:string="https://catalogapp-584d9.firebaseio.com/bolsas.json"
    bolsaURL:string="https://catalogapp-584d9.firebaseio.com/bolsas"
    imgBolsas:string="https://catalogapp-584d9.firebaseio.com/imagenesbolsas.json"


    constructor(private http:Http){
        console.log('servicio listo para usar!!')
    }

    getBolsas():Bolsa[]{
        return this.bolsas;
    }

    getBolsa( idx:number ){
        return this.bolsas[idx];
    }

    nuevaBolsa(bolsa:Bolsa){
        let body = JSON.stringify(bolsa);
        let headers = new Headers({
          'Content-Type':'application/json'
        });

        return this.http.post( this.heroesURL, body, {headers} )
                        .pipe(map((resultado:any)=>{
                          console.log(resultado.json());
                          return resultado.json()
                        }));
    }

    actualizarBolsa(bolsa:Bolsa, key$:string){
        let body = JSON.stringify(bolsa);
        let headers = new Headers({
          'Content-Type':'application/json'
        });
        
        let url = `${ this.bolsaURL}/${ key$ }.json`;
        return this.http.put( url, body, {headers} )
                        .pipe(map((resultado:any)=>{
                          console.log(resultado.json());
                          return resultado.json()
                        }));
    }

    getBolsa2(key$:string){

        let url = `${ this.bolsaURL }/${ key$ }.json`
        return this.http.get( url )
                        .pipe(map(res=>{return res.json()}));

    }

    getBolsas2(){

        return this.http.get( this.heroesURL )
                        .pipe(map(res=>{return res.json()}));

    }

    borrarBolsa(key$:string){
        let url = `${this.bolsaURL}/${ key$ }.json`;
        return this.http.delete(url)
                    .pipe(map(res=>{return res.json()}))
    }

    getimgBolsas(){
        return this.http.get( this.imgBolsas )
                        .pipe(map(res=>{return res.json()}));
    }
}


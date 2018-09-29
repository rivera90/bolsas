import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Bolsa } from "../../interfaces/bolsa.interface";
import { BolsasService } from '../../servicios/bolsas.service';



@Component({
  selector: 'app-bolsasfirebase',
  templateUrl: './bolsasfirebase.component.html'
})
export class BolsasfirebaseComponent implements OnInit {

  bolsas:any[]=[];
  loading:boolean = true;
  constructor( private _bservice:BolsasService ) { 
    this._bservice.getBolsas2().subscribe(data=>{
       console.log(data);

      this.bolsas = data;
      this.loading = false;
    })
  }

  ngOnInit() {
  }

  borraBolsa(key$:string){
    this._bservice.borrarBolsa(key$).subscribe(res=>{
      // console.log(res)
      if(res){
        console.error(res);
      }else{
        delete this.bolsas[key$];
      }
    })
  }
}

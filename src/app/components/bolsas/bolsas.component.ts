import { Component, OnInit } from '@angular/core';
import { BolsasService } from '../../servicios/bolsas.service';
import { Router } from '@angular/router';
import { Bolsa } from "../../interfaces/bolsa.interface";


@Component({
  selector: 'app-bolsas',
  templateUrl: './bolsas.component.html'
})
export class BolsasComponent implements OnInit {

  bolsas:Bolsa[] = [];
  
  constructor( private _bs:BolsasService,
              private _bolsasService:BolsasService,
                private router:Router ) {
   }

  ngOnInit() {
    this._bs.getBolsas2().subscribe(data=>{

      this.bolsas = data;
      console.log(this.bolsas );
    })
  }

  VerBolsa(idx:number){
    console.log(idx);
    this.router.navigate(['/bolsa',idx]);
  }

}

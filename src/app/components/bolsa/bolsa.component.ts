import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolsasService } from '../../servicios/bolsas.service';


@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html'
})
export class BolsaComponent {

  bolsa:any={};
  constructor( private activatedRoute:ActivatedRoute, private bolsaService:BolsasService ) {
  //Esto regresa un observador con los parametros de la url
    this.activatedRoute.params.subscribe( params=>{
          
      this.bolsaService.getBolsa2(params['id']).subscribe(bols=>{
        
        this.bolsa = bols
       })
      console.log(this.bolsa)

    })

   }



}

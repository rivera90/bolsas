import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Router,ActivatedRoute } from "@angular/router";
import { BolsasService } from '../../servicios/bolsas.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html'
})
export class ImagesComponent implements OnInit {

  bolsas:any[] = [];
  URL:string="";
  @Output() PasamelaImg = new EventEmitter();
  constructor(private _bs:BolsasService,
    private router:Router,
    private activRout:ActivatedRoute ) { 

      this._bs.getimgBolsas().subscribe(bols=>{
        
         this.bolsas = bols
         console.log(this.bolsas)
        })

    }

  ngOnInit() {
  }
  //Output
  @Output() sended = new EventEmitter();
  send(event){
    // console.log(event)
    this.sended.emit({sende:'true'}); //esto se envia cuando se ejecuta el evento sended
  }

  urlimagen(){
    console.log("doble click imagen")
    console.log(this.bolsas)
  }

  cambiaLado(valor) {
    console.log(valor);
    this.sended.emit({sended: valor});
  }
}

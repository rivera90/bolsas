import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BolsasService } from '../../servicios/bolsas.service';
import { Bolsa } from '../../interfaces/bolsa.interface';
import { Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-bolsaeditfire',
  templateUrl: './bolsaeditfire.component.html'
})
export class BolsaeditfireComponent implements OnInit {

  bolsa:Bolsa = {
    nombre:"",
    descripcion:"",
    img:""
  } 
  
  metadata:any = {
    contentType: 'image/jpeg'
  };

  nuevo:boolean = false;
  id:string ="";

  imagenes:any;

  constructor(private _bs:BolsasService,
              private router:Router,
              private activRout:ActivatedRoute ) {

                this.activRout.params.subscribe( parametros=> {
                  this.id = parametros['id']
            
                  if(this.id != "nuevo"){
                    this._bs.getBolsa2(this.id).subscribe(bols=>{
                       console.log(this.bolsa)
                       this.bolsa = bols
                      })
                  }
                });
              }

  ngOnInit() {
  }

  guardar(){

    if(this.id == "nuevo"){
      console.log(this.bolsa);
      this._bs.nuevaBolsa(this.bolsa)
              .subscribe(data=>{
                this.router.navigate(['/bolsaEdit','nuevo'],data.name)
              },
              error=>{console.log(error)})


    }else{
      console.log(this.bolsa)
      this._bs.actualizarBolsa(this.bolsa,this.id)
            .subscribe(data=>{
              // console.log(data)

            },
            error=>console.log(error))
    } 

  }

  agregarNuevo(forma:NgForm){
    this.router.navigate(['/bolsaEdit','nuevo']);

    forma.reset()
  }


  

  

  addImagen(event){
    console.log(event)//{send:true}
    this.bolsa.img= event.sended
  }
}

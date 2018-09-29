import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



//Rutas
import { APP_ROUTING } from './app.routes';


//servicios
import { BolsasService } from './servicios/bolsas.service';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BolsasComponent } from './components/bolsas/bolsas.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';
import { BolsasfirebaseComponent } from './components/bolsasfirebase/bolsasfirebase.component';
import { BolsaeditfireComponent } from './components/bolsaeditfire/bolsaeditfire.component';
import { KeysPipe } from './pipes/keys.pipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//AngularFireAuthModule Este se require para autenticarse
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { ImagesComponent } from './components/images/images.component';
import { SubirimgComponent } from './components/subirimg/subirimg.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BolsasComponent,
    BolsaComponent,
    BolsasfirebaseComponent,
    BolsaeditfireComponent,
    KeysPipe,
    ImagesComponent,
    SubirimgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    BolsasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

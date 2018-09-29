import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BolsasComponent } from './components/bolsas/bolsas.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';
import { BolsasfirebaseComponent } from './components/bolsasfirebase/bolsasfirebase.component';
import { BolsaeditfireComponent } from './components/bolsaeditfire/bolsaeditfire.component';
import { SubirimgComponent } from './components/subirimg/subirimg.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'bolsas', component: BolsasComponent },
    { path: 'bolsa/:id', component: BolsaComponent },
    { path: 'bolsasAdd', component: BolsasfirebaseComponent },
    { path: 'bolsaEdit/:id', component: BolsaeditfireComponent },
    { path: 'subirimg', component: SubirimgComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
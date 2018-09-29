import { Component, OnInit } from '@angular/core';
import { BolsasService } from '../../servicios/bolsas.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-subirimg',
  templateUrl: './subirimg.component.html',
  styleUrls: ['./subirimg.component.css']
})
export class SubirimgComponent implements OnInit {

  constructor(private _bs:BolsasService) { }

  ngOnInit() {
  }

  fileToUpload: File = null;

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      console.log(this.fileToUpload)

  }

  subirimg(){
    // Create a root reference
      var urlimg = this.fileToUpload;
      
      var storageRef = firebase.storage().ref();
      var imagenes = firebase.database().ref().child("imagenesbolsas");

      var uploadTask = storageRef.child(`imagenes/${urlimg.name}`).put(urlimg);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      function(){
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
          // console.log('File available at', downloadURL);
          console.log(urlimg.name)
          console.log(downloadURL)
          setTimeout(() => {
            imagenes.push({nombre:urlimg.name,url:downloadURL})
          }, 1);
          location.reload();
        });
      });
  }

}

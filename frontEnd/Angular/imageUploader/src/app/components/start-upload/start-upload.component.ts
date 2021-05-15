import { Component, OnInit } from '@angular/core';
import { Utils } from '../../Utils/utils';

@Component({
  selector: 'app-start-upload',
  templateUrl: './start-upload.component.html',
  styleUrls: ['./start-upload.component.css']
})
export class StartUploadComponent implements OnInit {

  private selectedFile: File;

  constructor(private utils: Utils) { }

  ngOnInit(): void {
  }

  dragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  dragEnter(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  //Subir imagen arrastrandola
  drop(event) {
    event.stopPropagation();
    event.preventDefault();
    this.selectedFile = event.dataTransfer.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    //realizar peticion post
    this.utils.uploadImage(fd).then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  //Subir imagen por medio de seleccion
  uploadImage(event) {
    this.selectedFile = event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    //realizar peticion post
    this.utils.uploadImage(fd).then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}

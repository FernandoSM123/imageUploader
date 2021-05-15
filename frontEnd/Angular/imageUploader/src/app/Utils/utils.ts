import { Injectable } from '@angular/core';
import { ImageUploadService } from '../services/image-upload.service';

@Injectable({
    providedIn: 'root'
})

export class Utils {

    constructor(private imgService: ImageUploadService) { }

    uploadImage(fd:FormData){
    return new Promise((resolve, reject) => {
        this.imgService.UploadImage(fd).subscribe(
          response => {
            resolve(response);
          },
          error => {
            reject(error);
          });
      });
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importo http client
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private static readonly cors = "https://cors-anywhere-venky.herokuapp.com/"; //constante

  constructor(
    private http:HttpClient
  ) {}

  UploadImage(fd:FormData):Observable<any> {
    const path = ImageUploadService.cors+"http://paginademaikol.epizy.com/vuephp/api.php?accion=crear";
    return this.http.post(path,fd);
  }
}

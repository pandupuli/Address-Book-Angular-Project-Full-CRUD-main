import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { UserDetails } from '../interfaces/userDetails';
import { Observable } from 'rxjs';
import { Gallery } from '../interfaces/gallery';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  gallery!: Gallery;

  constructor(private _http: HttpClient) { }

  uploadFile(formData: FormData) {
    return this._http.post(`${environment.API}/api/fileUpload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  upload(file: File, userDetails: UserDetails): Observable<HttpEvent<any>> {

    let formData:FormData = new FormData();
    formData.append("MediaUpload", file);
    formData.append("id", userDetails.id.toString() );
    formData.append("userName", userDetails.userName );
    formData.append("password", userDetails.password );
    formData.append("address", userDetails.address );

    const req = new HttpRequest('POST', `${environment.API}/api/fileUpload1`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this._http.request(req);
  }

  // getFiles(): Observable<any> {
  //   return this._http.get(`${environment.API}/files`);
  // }
}

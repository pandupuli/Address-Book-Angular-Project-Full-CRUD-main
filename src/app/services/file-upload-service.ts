import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../interfaces/userDetails';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private _http: HttpClient) { }

  uploadFile(formData: FormData) {
    return this._http.post(`${environment.API}/api/fileUpload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}

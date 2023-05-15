import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  imageUpload(PhotoProfile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("fileToUpload", PhotoProfile);
    return this.http.post('http://localhost/htdocs/youdesty/upload-img.php', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError((err: any) => {
        alert(err.message);
        return throwError(err.message);
      })
    );
  }
}






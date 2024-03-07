import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface UnsplashResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private access_key = 'GomFBKp5Kw5CwJzUxyMJWLdQOelD_WKLhlhxtOCnkHU';

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers : {
        Authorization: `Client-ID ${this.access_key}`
      }
    }).pipe(
      map(x => x.urls.regular)
    )
  }
}

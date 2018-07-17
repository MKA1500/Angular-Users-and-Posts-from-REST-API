import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    getPhotos() {
      return this.http.get('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?Krakow&tagmode=any&format=json')
    }
  }
}

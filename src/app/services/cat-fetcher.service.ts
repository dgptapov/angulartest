import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import data from '../constants/data'


@Injectable({
  providedIn: 'root'
})
export class CatFetcherService {

  constructor(private httpClient: HttpClient) { }

  getCatList() : Observable<any> {
    const url  = data.url
    const params = new HttpParams()
      .append("tags",data.tags)
      .append("api_key", data.api_key)
      .append("method", data.method)
      .append("format", data.format)
      .append("tag_mode", data.tag_mode)
      .append("nojsoncallback", data.nojsoncallback)
      return this.httpClient.get(url,{params: params})
  }

}

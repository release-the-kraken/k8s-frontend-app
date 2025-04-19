import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private BASE_URL: string = "http://localhost:8080"
  private API_VERSION: string = "/v1"
  private CREATE_PATH: string = "/save"

  constructor(private httpClient: HttpClient) { }

  create(word: Word): Observable<Object>{
    return this.httpClient.post(this.BASE_URL + this.API_VERSION + this.CREATE_PATH, word)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  apiUri = '/api/animals';

  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  getAllAnimalsData(): Observable<any>{
    return this.http.get<any>(this.apiUri)
  }

  constructor(private http: HttpClient) { }
}

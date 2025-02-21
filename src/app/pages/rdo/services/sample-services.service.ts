import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleRdoService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get('http://localhost:3000/rdo');
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Correct usage
})
export class _SampleCollaboratorService {
  constructor(public http: HttpClient) { }

  getColumns(){

  }

  getItems(): Observable<any> {
    return this.http.get('http://localhost:3000/colaborador');
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return `00:${minutesValid}:${secondsValid}`;
  }
}


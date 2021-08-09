import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

// const SERVER_CORE = "localhost:3000";
const SERVER_CORE = environment.coreServer;

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  subscribe(formData: any): Observable<any> {
    return this.httpClient.post<any>(
      // SERVER_CORE + '/users/subscribe',
      SERVER_CORE,
      // body
      formData,
      // optionals
      {
        headers: this.httpOptions
      }
    );
  }

}

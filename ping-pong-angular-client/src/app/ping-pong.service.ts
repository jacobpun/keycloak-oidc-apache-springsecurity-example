import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PingPongService {

  constructor(private http: HttpClient) { }
  
  doPing(): Observable<any> {
    return this.http.get<any>("/api/ping");//, {responseType: 'text' as 'json'});
  }
}

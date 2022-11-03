import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient){

  }
  getPosts(): Observable<any> {
   
      //return this.http.get("https://jsonplaceholder.typicode.com/posts");
      return this.http.get("http://localhost:3000/");
  }
}

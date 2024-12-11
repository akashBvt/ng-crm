import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any[]> {
    return new Observable(observer => {
      setTimeout(() => {
        this.http.get<any[]>(this.apiUrl).subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },
          error => {
            observer.error(error);
          }
        );
      }, 3000);  // 3-second delay before initiating the HTTP request
    });
  }
  
}

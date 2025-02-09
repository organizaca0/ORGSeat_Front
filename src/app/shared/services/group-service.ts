import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
    private baseUrl = "enviroment.api_url";


  constructor(private http: HttpClient) {}

  getGroupMembers(): Observable<string[]> {
    return of(['Alice', 'Bob', 'Charlie', 'Diana']);
  }
}

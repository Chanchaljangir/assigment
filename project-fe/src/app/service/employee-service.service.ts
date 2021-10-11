import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  addEmployee(obj) {
    return this.http.post<any>(environment.apiBaseUrl  + '/api/employee', obj)
  }
}

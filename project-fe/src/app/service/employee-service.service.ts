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
    return this.http.post<any>(environment.baseURL + 'employee', obj)
  }

  getAllEmployee() {
    return this.http.get<any>(environment.baseURL + 'employees')
  }
  getAllEligiableSupervisor(empId) {
    return this.http.get<any>(environment.baseURL + 'eligiableSupervisoryees/' + empId)
  }

  allocateSupervisor(obj) {
    return this.http.post<any>(environment.baseURL + 'assignEmployee', obj)
  }
}

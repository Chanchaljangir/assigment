import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-allocate-superviour',
  templateUrl: './allocate-superviour.component.html',
  styleUrls: ['./allocate-superviour.component.css']
})
export class AllocateSuperviourComponent implements OnInit {
  loading: boolean;
  employeeData: any;

  constructor(private empService:EmployeeServiceService) { }

  ngOnInit() {
    this. getAllEmployee();
  }
  getAllEmployee(){
    this.empService.getAllEmployee().subscribe((res: any) => {
      this.loading = false;
      if (res.IsSuccess) {
        this.loading = false;
        this.employeeData = res.Data;
        // this.ts.pop("success", "", "Logged in");
      } else {
        this.loading = false;
        console.log("something wents wrong ");
        // this.ts.pop("error", "", "Invalid mobile/password");
      }
    });
  }
}

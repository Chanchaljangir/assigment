import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
declare var $;
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  paramsId: any;
  loading: boolean;
  empData: any;

  constructor(private empService: EmployeeServiceService, private route: ActivatedRoute,) { 
    this.route.params.subscribe((params: Params) => {
      this.paramsId = params['id'];
    })
  }

  ngOnInit() {
    this.getSpecificEmployee();
    this.findSuperviour();
    this.superviourEmp();
  }
  getSpecificEmployee() {
    this.empService.getSpecificEmployee(this.paramsId).subscribe((res: any) => {
      this.loading = false;
      if (res.IsSuccess) {
        this.loading = false;
        this.empData = res.Data;
        // this.ts.pop("success", "", "Logged in");
      } else {
        this.loading = false;
        console.log("something wents wrong ");
        // this.ts.pop("error", "", "Invalid mobile/password");
      }
    });
  }
  findSuperviour() {
    this.empService.findSuperviour(this.paramsId).subscribe((res: any) => {
      this.loading = false;
      if (res.IsSuccess) {
        this.loading = false;
        // this.ts.pop("success", "", "Logged in");
      } else {
        this.loading = false;
        console.log("something wents wrong ");
        // this.ts.pop("error", "", "Invalid mobile/password");
      }
    });
  }

  superviourEmp() {
    this.empService.superviourEmp(this.paramsId).subscribe((res: any) => {
      this.loading = false;
      if (res.IsSuccess) {
        this.loading = false;
        // this.ts.pop("success", "", "Logged in");
      } else {
        this.loading = false;
        console.log("something wents wrong ");
        // this.ts.pop("error", "", "Invalid mobile/password");
      }
    });
  }
}

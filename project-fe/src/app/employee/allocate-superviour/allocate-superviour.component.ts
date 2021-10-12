import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
declare var $;
@Component({
  selector: 'app-allocate-superviour',
  templateUrl: './allocate-superviour.component.html',
  styleUrls: ['./allocate-superviour.component.css']
})
export class AllocateSuperviourComponent implements OnInit {
  loading: boolean;
  employeeData: any;
  empName: any;
  supervisorId: any;
  empId: any;
  supervisorData: any;

  constructor(private empService: EmployeeServiceService) { }

  ngOnInit() {
    this.getAllEmployee();
  }
  getAllEmployee() {
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
  modalOpen(name) {
    this.empId = name;
    this.getAllEligiableSupervisor();
    $("#myModal").modal('show');
  }
  selectedSupervisor(event) {
    this.supervisorId = event;
  }
  getAllEligiableSupervisor() {
    this.empService.getAllEligiableSupervisor(this.empId).subscribe((res: any) => {
      this.loading = false;
      if (res.IsSuccess) {
        this.loading = false;
        this.supervisorData = res.Data;
        // this.ts.pop("success", "", "Logged in");
      } else {
        this.loading = false;
        console.log("something wents wrong ");
        // this.ts.pop("error", "", "Invalid mobile/password");
      }
    });
  }

  onAllocateBtn() {
    let data = {
      empId: this.empId,
      supervisorId: this.supervisorId
    }
    this.empService.allocateSupervisor(data).subscribe((res: any) => {
      this.loading = false;
      if (res.IsSuccess) {
        this.loading = false;
        // this.ts.pop("success", "", "Successfully allocated");
      } else {
        this.loading = false;
        console.log("something wents wrong ");
        // this.ts.pop("error", "", "Something wents wrong");
      }
    });
  }
}

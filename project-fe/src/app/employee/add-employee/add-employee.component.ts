import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  empForm: FormGroup;
  emailRequiredError: boolean = false;
  passwordRequiredError: boolean = false;
  loading: boolean = false;
  redirectURL = null;
  private loggedIn: boolean;
  // public config: ToasterConfig = new ToasterConfig({ limit: 1 });
  constructor(private fb: FormBuilder, private empService: EmployeeServiceService,
    // private ts: ToasterService,
    ) { }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.empForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      mobile:[""],
      experience:[""]
    });
  }

  onSubmitBtn() {
    console.log("this.empForm.value",this.empForm.value)
    if (this.empForm.valid) {
      this.loading = true;
      this.empService.addEmployee(this.empForm.value).subscribe((res: any) => {
          this.loading = false;
          if (res.IsSuccess) {
            this.loading = false;
            // this.ts.pop("success", "", "Logged in");
            // this.initLoginForm();
          } else {
            this.loading = false;
            //console.log("error invalid ");
            // this.ts.pop("error", "", "Invalid mobile/password");
          }
        },
        (error) => {
          this.loading = false;
          //console.log(error);
          // this.ts.pop("error", "", "Invalid mobile/password");
        }
      );
    } else {
      this.emailRequiredError = true;
      this.passwordRequiredError = true;
    }
  }
}


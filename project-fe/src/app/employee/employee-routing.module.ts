import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllocateSuperviourComponent } from './allocate-superviour/allocate-superviour.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
    { path: '', component: AllocateSuperviourComponent },
    { path: 'employee', component: AddEmployeeComponent },
    {path : 'view', component: AllocateSuperviourComponent},
    {path : 'details/:id', component: EmployeeDetailsComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }


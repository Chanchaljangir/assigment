import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllocateSuperviourComponent } from './allocate-superviour/allocate-superviour.component';

const routes: Routes = [
    { path: '', component: AddEmployeeComponent },
    { path: 'employee', component: AddEmployeeComponent },
    {path : 'view', component: AllocateSuperviourComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
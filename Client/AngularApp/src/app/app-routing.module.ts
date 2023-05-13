import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";

const routes: Routes = [
  { path: 'customers', component: CustomerDetailsComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: '', component: AuthenticationPageComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'editCustomer', component: EditCustomerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

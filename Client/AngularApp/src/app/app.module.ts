import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import { CustomerService } from './customer-service';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { MatNativeDateModule } from '@angular/material/core';

import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { ContractComponent } from './contract/contract.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { LoginComponent } from './log-in/log-in.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    AuthenticationPageComponent,
    NavigationBarComponent,
    ContractComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    LoginComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

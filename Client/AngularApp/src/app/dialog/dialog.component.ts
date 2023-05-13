import {Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Customer} from "../../models/Customer";
import {CustomerService} from "../customer-service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html', // HTML template for the dialog content
})
export class DialogComponent implements  OnInit{

customer !:Customer;
  constructor(
    public http:HttpClient,
    public serviceCustomers:CustomerService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    this.customer = this.data.customomer;
    console.log(this.data);
  }

  saveDetails(customer:Customer){

     this.serviceCustomers.updateCustomer2(this.customer.identityNumber,customer);

  }

}
